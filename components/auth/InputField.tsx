interface Props {
  name: string,
  type?: string,
  value: string,
  setValue: (newValue: string) => void,
  placeholder: string
}

const InputField: React.FC<Props> = ({ name, type = "text", value, setValue, placeholder }) => {

  const id = name.toLowerCase().replace(/\s/g, "");

  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input id={id} type={type} value={value} onChange={(evt) => { setValue(evt.target.value); }} placeholder={placeholder} />
      <style jsx>{`
        label {
          font-style: normal;
          font-weight: bold;
          font-size: 1.4rem;
          line-height: 1.2rem;
          display: block;
          color: #000000;
          margin-top: 0.8rem;
        }

        input {
          width: 100%;
          border: none;
          padding: 0.5rem 0 0.5rem 0;
          border-bottom: 0.15rem solid black;
          box-sizing: border-box;
          background: none;
          margin: 0.5rem 0 1rem 0;
        }

        input[type="text"], input[type="password"] {
          font-size: 1.2rem;
          font-style: normal;
          font-weight: bold;
        }

        input:focus {
          outline: none;
        }

        ::placeholder {
          font-style: normal;
          font-weight: bold;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default InputField;