import * as React from "react";
import VerifEmailInputCode from "components/verif-email/VerifEmailInput";

const VerifEmail: React.SFC = () => {
  return (
    <>
      <VerifEmailInputCode
        autoFocus
        isNumberInput={false}
        length={22}
        onChangeInput={() => null}
      />
    </>
  );
};

export default VerifEmail;
