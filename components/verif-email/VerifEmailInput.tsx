import { useCallback, useState, memo, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import SingleInput from "./SingleInput";
import { Dimen } from "styles/dimen";
import { verifEmail } from "api/auth";
import { ApiContext } from "utils/context/api";
import FilledButton from "components/commons/FilledButton";
import Alert from "components/commons/Alert";
import useProgress from "utils/hooks/useProgress";

export interface VerifEmailInput {
  length: number;
  onChangeInput: (otp: string) => void;
  autoFocus?: boolean;
  isNumberInput?: boolean;
  disabled?: boolean;
}

const VerifEmailInputComponent: React.SFC<VerifEmailInput> = (
  props: VerifEmailInput
) => {
  const {
    length,
    onChangeInput,
    autoFocus,
    isNumberInput,
    disabled,
    ...rest
  } = props;

  const [activeInput, setActiveInput] = useState(0);

  const [inputValues, setInputValues] = useState(
    Array<string>(length).fill("")
  );

  const apiContext = useContext(ApiContext);

  const progressObj = useProgress();

  const router = useRouter();

  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [length]
  );

  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index);
    },
    [focusInput]
  );

  const onBlur = useCallback(() => {
    setActiveInput(-1);
  }, []);

  const getRightValue = useCallback(
    (str: string) => {
      const changedValue = str;
      if (!isNumberInput) {
        return changedValue;
      }
      return !changedValue || /\d/.test(changedValue) ? changedValue : "";
    },
    [isNumberInput]
  );

  const handleInputChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join("");
      onChangeInput(otpValue);
    },
    [onChangeInput]
  );

  const changeCodeAtFocus = useCallback(
    (str: string) => {
      const updatedInputValues = [...inputValues];
      updatedInputValues[activeInput] = str[0] || "";
      setInputValues(updatedInputValues);
      handleInputChange(updatedInputValues);
    },
    [activeInput, handleInputChange, inputValues]
  );

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = getRightValue(e.currentTarget.value);
      if (!val) {
        e.preventDefault();
        return;
      }
      changeCodeAtFocus(val);
      focusNextInput();
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  );

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case "Backspace":
        case "Delete": {
          e.preventDefault();
          if (inputValues[activeInput]) {
            changeCodeAtFocus("");
          } else {
            focusPrevInput();
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          focusPrevInput();
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          focusNextInput();
          break;
        }
        case " ": {
          e.preventDefault();
          break;
        }
        default:
          break;
      }
    },
    [
      activeInput,
      changeCodeAtFocus,
      focusNextInput,
      focusPrevInput,
      inputValues,
    ]
  );

  const handleOnPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData("text/plain")
        .trim()
        .slice(0, length - activeInput)
        .split("");
      if (pastedData) {
        let nextFocusIndex = 0;
        const updatedOTPValues = [...inputValues];
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val);
            if (changedValue) {
              updatedOTPValues[index] = changedValue;
              nextFocusIndex = index;
            }
          }
        });
        setInputValues(updatedOTPValues);
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
      }
    },
    [activeInput, getRightValue, length, inputValues]
  );

  const handleSubmit = () => {
    progressObj.reset();

    const email = window.location.search;
    if (!email.startsWith("?email=")) {
      progressObj.setError("Data email tidak valid");
    }

    progressObj.startLoad();

    verifEmail(apiContext.axios, email.replace("?email=", ""), inputValues.join(""))
      .then(() => {
        progressObj.setSuccess(true);
        router.push("/login");
      })
      .catch(() => {
        progressObj.setError("Silahkan masukan token yang benar");
      }).finally(() => {
        progressObj.setLoading(false);
      });
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mb-5">
        <div>
          <h1>Enter your code</h1>
        </div>
        <div
          {...rest}
          className="d-flex justify-content-center verif-email-input"
        >
          {Array(length)
            .fill("")
            .map((_, index) => (
              <SingleInput
                key={`SingleInput-${index}`}
                focus={activeInput === index}
                value={inputValues && inputValues[index]}
                autoFocus={autoFocus}
                onFocus={handleOnFocus(index)}
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}
                onBlur={onBlur}
                onPaste={handleOnPaste}
                disabled={disabled}
              />
            ))}
        </div>
      </div>

      <div className="mt-5 mb-5">
        <FilledButton
          onClick={handleSubmit}
          text={"Submit"}
          fontSize="1.25rem"
          loading={progressObj.loading}
        />
      </div>

      <Alert error={progressObj.error} />



      <style jsx>{`
        .verif-email-input {
          width: 50%;
          background: #fe5982;
          box-shadow: 1px 2px 11px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
          padding: 1.5rem;
        }

        @media (max-width: ${Dimen.xlBreakpoint}) {
          .verif-email-input {
            width: 60%;
          }
        }

        @media (max-width: ${Dimen.lgBreakpoint}) {
          .verif-email-input {
            width: 70%;
          }
        }

        @media (max-width: ${Dimen.mdBreakpoint}) {
          .verif-email-input {
            width: 80%;
            padding: 1rem;
          }
        }

        @media (max-width: ${Dimen.smBreakpoint}) {
          .verif-email-input {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

const VerifEmailInput = memo(VerifEmailInputComponent);
export default VerifEmailInput;
