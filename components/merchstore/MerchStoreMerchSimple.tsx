import * as React from "react";
import { MerchStoreItem } from "interfaces/merch-store";

interface Props {
  items: Array<MerchStoreItem>;
}

const MerchStoreMerchSimple: React.SFC<Props> = ({ items }) => {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default MerchStoreMerchSimple;
