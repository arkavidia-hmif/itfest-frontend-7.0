import { useState } from "react";
import MerchStoreExpanded from "./MerchStoreExpanded";
import MerchStoreSimple from "./MerchStoreSimple";

const MerchStore: React.SFC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>{isExpanded ? <MerchStoreExpanded /> : <MerchStoreSimple />}</div>
  );
};

export default MerchStore;
