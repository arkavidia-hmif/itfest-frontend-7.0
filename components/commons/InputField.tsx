import InputStyle from "./InputBox.module.css";

interface Props {
  type?: string;
  value: string;
  setValue: (newValue: string) => void;
  placeholder?: string;
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
        className={InputStyle.inputBox}
        type={type}
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;