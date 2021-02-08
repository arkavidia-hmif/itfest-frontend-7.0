import * as React from "react";
import VerifEmailInputCode from "components/verif-email/VerifEmailInput";
import VerifEmailTop from "components/verif-email/VerifEmailTop";

const VerifEmail: React.SFC = () => {
  return (
    <>
      <div className="mb-5 pb-3">
        <VerifEmailTop />
      </div>
      <div className="">
        <VerifEmailInputCode
          autoFocus
          isNumberInput={false}
          length={16}
          onChangeInput={() => null}
        />
      </div>
    </>
  );
};

export default VerifEmail;
