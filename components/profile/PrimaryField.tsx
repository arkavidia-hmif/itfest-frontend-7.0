import { useState } from "react";
import InputField from "./InputField";

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
  let i = -1;

  return (
    <>
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

export default PrimaryField;