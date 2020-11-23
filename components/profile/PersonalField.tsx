import { useState } from "react";
import InputField from "./InputField";
import ColorfulHeader from "components/ColorfulHeader";
import { Theme } from "styles/theme";

const primary = [
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
        {primary.map((data) => {
          i += 1;
          return (
            <div key={i} className="d-flex justify-content-between">
              <h2>{data.text}</h2>
              <InputField
                type={data.text}
                value={value}
                setValue={setValue}
                placeholder={data.text}
              />
            </div>
          );
        })}
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