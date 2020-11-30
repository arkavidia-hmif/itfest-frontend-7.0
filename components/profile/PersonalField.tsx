import { useState } from "react";
import InputField from "./InputField";
import ColorfulHeader from "components/ColorfulHeader";
import { Theme } from "styles/theme";
import FilledButton from "components/FilledButton";

const personal = [
  {
    text: "Gender",
  },
  {
    text: "Date of Birth",
  },
  {
    text: "Institution",
  },
];

const PersonalField: React.FC = () => {
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  let i = -1;

  return (
    <>
      <div>
        <ColorfulHeader
          color={Theme.headerColors.pipl}
          headingLevel={6}
          size="2rem"
        > Fill these data to get extra points! (Optional) 
        </ColorfulHeader>
      </div>
      <div className="mt-3">
        {personal.map((data) => {
          i += 1;
          return (
            <div key={i} className="d-flex justify-content-between">
              <h2>{data.text}</h2>
              { isEdit ? (
                <InputField
                type={data.text}
                value={value}
                setValue={setValue}
                placeholder={data.text}
              />
              ) : (
                <h2>{value}</h2>
              )}
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center mt-3">
        {isEdit ? (
          <FilledButton
            color={Theme.buttonColors.pinkButton}
            text="Submit"
            padding="0.75rem 3rem"
            onClick={() => setIsEdit(false)}
          />
        ) : (
          <FilledButton
            color={Theme.buttonColors.pinkButton}
            text="Edit"
            padding="0.75rem 3rem"
            onClick={() => setIsEdit(true)}
          />
        )}
      </div>
      <style jsx>{`
        h2 {
          font: viga;
          font-size: 1.5rem;
          color: #441985;
        }
      `}</style>
    </>
  );
};

export default PersonalField;