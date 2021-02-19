import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import InputField from "components/commons/InputField";
import SelectField from "components/commons/SelectField";
import ColorfulHeader from "components/commons/ColorfulHeader";
import { Theme } from "styles/theme";
import FilledButton from "components/commons/FilledButton";
import { ApiContext } from "utils/context/api";
import useFormInput from "utils/hooks/useFormInput";
import { editPersonalData, getPersonalData, PROFILE_URL } from "api/profile";
import Alert from "components/commons/Alert";
import Spinner from "components/commons/Spinner";
import { checkTruthPersonal } from "utils/transformer/profile";
import profileAttributes, { genderList } from "utils/constants/profile-attributes";
import { PersonalData } from "interfaces/auth";
import { Dimen } from "styles/dimen";


const PersonalField: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const [isEdit, setIsEdit] = useState(false);
  const gender = useFormInput("");
  const dob = useFormInput("");
  const institute = useFormInput("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    isEdit ? setSuccess(false) : setError("");
  }, [setError, setSuccess, isEdit]);

  const { data: personal, error: errorPersonal, mutate } = useSWR(
    PROFILE_URL,
    () => getPersonalData(apiContext.axios)
  );

  useEffect(() => {
    if (personal !== undefined) {
      if (personal.gender && personal.gender !== 0) {
        gender.setValue(String(personal.gender));
      }
      if (personal.dob && personal.dob !== "") {
        const datePart = personal.dob.split("T")[0];
        dob.setValue(datePart);
      }
      if (personal.institute && personal.institute !== "") {
        institute.setValue(personal.institute);
      }
    }
  }, [
    personal
  ]);

  if (errorPersonal) return <Alert error="Masalah koneksi" />;
  if (!personal) return <Spinner height="200px" />;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const truth = await checkTruthPersonal(
        gender.value,
        dob.value,
        institute.value,
        personal.filled,
        personal
      );
      const res = await editPersonalData(apiContext.axios, truth);
      mutate(res);
      setSuccess(true);
      setIsEdit(false);
      setError(null);
    } catch (e) {
      setSuccess(false);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const dataField = [
    {
      state: gender,
      key: "gender",
      viewTransformer: (data: string) => genderList[data] || "",
      choices: genderList
    },
    {
      state: dob,
      key: "dob",
      viewTransformer: (data: string) => data.substring(0, 10)
    },
    {
      key: "institute",
      state: institute,
      viewTransformer: (data: string) => data
    }
  ];

  const getInputBox = (
    value: string,
    setValue: (data: string) => void,
    key: string,
    choices?: Record<string, string>
  ) => {
    if (choices) {
      return (
        <SelectField
          value={value}
          setValue={setValue}
          choices={choices}
        />
      );
    } else {
      return (
        <InputField
          type={key === "dob" ? "date" : "text"}
          value={value}
          setValue={setValue}
        />
      );
    }
  };

  return (
    <>
      <div>
        {!personal.filled && <ColorfulHeader
          color={Theme.headerColors.pipl}
          headingLevel={6}
          size="1.5rem"
        > Lengkapi data untuk poin ekstra! (Opsional)
        </ColorfulHeader>}
      </div>
      <Alert error={success ? "Update sukses" : error} color={success ? Theme.alertColors.greenAlert : Theme.alertColors.redAlert} />
      <div className="mt-3">
        {dataField.map((data) => {
          const label = profileAttributes[data.key];
          const value = personal[data.key as keyof PersonalData] || "";

          return (
            <div key={label} className="row mt-3">
              <div className="col-md-6 col-sm-12"><h2>{label}</h2></div>
              <div className="col-md-6 col-sm-12">
                {isEdit ?
                  getInputBox(data.state.value, data.state.setValue, data.key, data.choices) :
                  (<h2 className="value">{data.viewTransformer(value.toString())}</h2>)}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3">
        {isEdit ? (
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <FilledButton
                color={Theme.buttonColors.pinkButton}
                loading={loading}
                text="Submit"
                padding="0.75rem 2rem"
                onClick={handleSubmit}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <FilledButton
                color={Theme.buttonColors.darkPinkButton}
                loading={loading}
                text="Cancel"
                padding="0.75rem 2rem"
                onClick={() => setIsEdit(false)}
              />
            </div>
          </div>
        ) :
          (
            <FilledButton
              color={Theme.buttonColors.pinkButton}
              loading={loading}
              text="Edit"
              padding="0.75rem 1.5rem"
              onClick={() => setIsEdit(true)}
            />
          )}
      </div>
      <style jsx>{`
        h2 {
          font-size: 1.3rem;
          color: #441985;
        }
        .value {
          color: #0f2f2f;
        }
        @media only screen and (max-width: ${Dimen.mdBreakpoint}) {
          h2{
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default PersonalField;