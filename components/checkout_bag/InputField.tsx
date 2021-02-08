import * as React from  "react";

interface Props {
  text: string;
  value: string,
  setValue: (newValue: string) => void,
}

const InputField: React.FC<Props> = ({ text, value, setValue }) => {
    return (
      <div className="input-field">
        <label>{text}</label>
        <input value={value} onChange={(evt) => { setValue(evt.target.value); }} />

        <style jsx>
          {`
          .input-field {
              width: 90%;
              margin: auto;
              margin: 1rem 0.5rem;
              }
  
              label, input {
              display: block;
              }
  
              input {
              width: 100%;
              margin: auto;
              padding: 0.2rem;
              }
          `}
        </style>
      </div>
    )
}

export default InputField;
