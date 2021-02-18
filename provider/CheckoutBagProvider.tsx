import { useState } from "react";
import CheckoutBagContextType from "../utils/constants/checkout-bag";
import { CheckoutBagContext } from "./CheckoutBagContext";
import { MerchStoreItem } from "interfaces/merch-store";



const CheckoutBagProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Array<MerchStoreItem>>([]);
  const [show, setShow] = useState(false);

  const addData = (item: MerchStoreItem) => {
    // items.filter((data: MerchStoreItem) => {
    //   if (item.name === data.name) {
    //     setItems([...items ?? [], item]);
    //   } else {
    //     setItems([...items ?? [], item]);
    //   }
    // })
    setItems([...items ?? [], item]);
  };

  const deleteData = () => {
    setItems([]);
  };

  const showBagContainer = (status: boolean) => {
    setShow(status);
  };

  const checkoutContext: CheckoutBagContextType = {
    data: items,
    show: show,
    addData: addData,
    deleteData: deleteData,
    showBag: showBagContainer
  };

  return (
    <CheckoutBagContext.Provider value={checkoutContext}>
      {children}
    </CheckoutBagContext.Provider>
  );
};

export default CheckoutBagProvider;