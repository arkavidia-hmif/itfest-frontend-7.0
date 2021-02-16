import InputStyle from "./InputBox.module.css";

interface Props {
  value: string;
  setValue: (newValue: string) => void;
  choices: Record<string, string>;
}

const SelectField: React.FC<Props> = ({
  value,
  setValue,
  choices
}) => {
  return (
    <select
      className={InputStyle.inputBox}
      value={value}
      onChange={(e) => { setValue(e.target.value); }}>
      {Object.entries(choices).map((choice, index) => (
        <option value={choice[0]} key={index}>{choice[1]}</option>
      ))}
    </select>
  );
};

export default SelectField;