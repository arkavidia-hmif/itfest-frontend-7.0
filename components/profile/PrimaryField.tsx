import { useState } from "react";
import InputField from "./InputField";
import { Theme } from "styles/theme";
import FilledButton from "components/FilledButton";

const primary = [
  {
    text: "Email Address",
  },
  {
    text: "Password",
  },
  {
    text: "Phone Number",
  },
  {
    text: "Full Name",
  },
];

const PrimaryField: React.FC = () => {
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  let i = -1;

  return (
    <>
      <div className="mt-3">
        {primary.map((data) => {
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
        @media only screen and (max-width: 767px) {
          h2{
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default PrimaryField;