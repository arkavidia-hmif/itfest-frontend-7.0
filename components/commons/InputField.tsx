interface Props {
    type?: string;
    value: string;
    setValue: (newValue: string) => void;
    placeholder: string;
  }
  
const InputField: React.FC<Props> = ({
  type = "text",
  value,
  setValue,
  placeholder,
}) => {
  
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
        placeholder={placeholder}
      />
      <style jsx>{`
          input{
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
          input:focus{
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