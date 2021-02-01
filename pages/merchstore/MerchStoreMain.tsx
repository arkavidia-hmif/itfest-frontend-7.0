import * as React from "react";
import MerchStore from "components/merchstore/MerchStore";
import MerchStoreTop from "components/merchstore/MerchStoreTop";


const MerchStoreMain: React.SFC = () => {
  return (
    <>
      <div className="mt-3 mb-5">
        <MerchStoreTop />
      </div>

      <div className="pt-5">
        <MerchStore />
      </div>
    </>
  );
};

export default MerchStoreMain;
