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
      
      <style jsx>{`
        .input-field {
          margin-bottom: 1rem;
        }
        
        .label, input {
          display: block;
        }

        input {
          border: 1px solid black;
          width: 100%;
          padding: 0.4rem;
        }
      `}</style>
    </div>
  );
};

export default InputField;
