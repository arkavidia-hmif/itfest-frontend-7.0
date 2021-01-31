import { useEffect, useRef } from "react";

interface Props {
  type?: string;
  value: string;
  shouldRef?: boolean;
  setValue: (newValue: string) => void;
  choices: Array<string>;
}

const InputField: React.FC<Props> = ({
  type = "text",
  value,
  shouldRef = false,
  setValue,
  choices,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, [shouldRef]);

  return (
    <div>
      {shouldRef ? (
        <input
          ref={ref} 
          type={type}
          value={value}
          onChange={(evt) => {
            setValue(evt.target.value);
          }}
        />
      ) : choices.length > 0 ? (
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          {choices.map((choice, index) => (
            <option value={index+1} key={choice}>
              {choice}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(evt) => {
            setValue(evt.target.value);
          }}
        />
      )}
      <style jsx>{`
        input,
        select {
          width: 100%;
          border: none;
          border-radius: 2em;
          padding: 0.25rem 0em 0.25rem 0.5em;
          box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
          background: white;
          margin: 0rem 0 1rem 0;
          font-size: 1.1rem;
          font-weight: bold;
        }
        option {
          font-family: Roboto;
        }
        input:focus,
        select:focus{
          outline: none;
        }
        @media only screen and (max-width: 767px) {
          input{
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InputField;