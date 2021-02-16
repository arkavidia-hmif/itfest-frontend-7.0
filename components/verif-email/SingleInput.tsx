import { memo, useLayoutEffect, useRef } from "react";
import usePrevious from "./hooks/UsePrevious";
import { Dimen } from "styles/dimen";

export interface SingleInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}

const SingleInputComponent: React.SFC<SingleInputProps> = (
  props: SingleInputProps
) => {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <>
      <div className="single-input">
        <input ref={inputRef} {...rest} />
      </div>

      <style jsx>
        {`
          .single-input input {
            width: 1.75rem !important;
            height: 2rem;
            margin: 0 0.25rem;
            font-size: 1.75rem;
            text-align: center;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            background: #ffffff;
            box-shadow: 1px 2px 11px rgba(0, 0, 0, 0.25);
            font-family: 'Viga';
          }

          .single-input input:focus {
            outline: none;
          }

          @media (max-width: ${Dimen.xlBreakpoint}) {
            .single-input input {
              width: 1.5rem !important;
              height: 2rem;
              font-size: 1.5rem;
              margin: 0 0.15rem;
            }
          }

          @media (max-width: ${Dimen.lgBreakpoint}) {
          }

          @media (max-width: ${Dimen.mdBreakpoint}) {
            .single-input input {
              width: 1.1rem !important;
              height: 1.5rem;
              font-size: 1.3rem;
              margin: 0 0.15rem;
            }
          }

          @media (max-width: 507px) {
            .single-input input {
              width: .85rem !important;
              height: 1rem;
              font-size: 1rem;
              margin: 0 0.05rem;
            }
          }
        `}
      </style>
    </>
  );
};

const SingleInput = memo(SingleInputComponent);
export default SingleInput;
