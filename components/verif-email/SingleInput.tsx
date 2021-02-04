import { memo, useLayoutEffect, useRef } from "react";
import usePrevious from "./hooks/UsePrevious";

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
            width: 3rem !important;
            height: 3rem;
            margin: 0 1rem;
            font-size: 2rem;
            text-align: center;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            background: #ffffff;
            box-shadow: 1px 2px 11px rgba(0, 0, 0, 0.25);
          }

          .single-input input:focus {
            outline: none;
          }
        `}
      </style>
    </>
  );
};

const SingleInput = memo(SingleInputComponent);
export default SingleInput;
