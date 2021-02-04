import VerifEmailInput from "components/verif-email/VerifEmailInput";
import VerifEmailTop from "components/verif-email/VerifEmailTop";
import * as React from "react";

const VerifEmail: React.SFC = () => {
  return (
    <>
      <div className="mb-5 pb-3">
        <VerifEmailTop />
      </div>
      <div className="">
        <VerifEmailInput
          autoFocus
          isNumberInput
          length={4}
          onChangeInput={(input) => console.log("Input: ", input)}
        />
      </div>
    </>
  );
};

export default VerifEmail;
