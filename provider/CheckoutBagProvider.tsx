import { useState } from "react";
import CheckoutBagContextType from "../utils/constants/checkout-bag";
import { CheckoutBagContext } from "./CheckoutBagContext";
import { MerchStoreItem } from "interfaces/merch-store";



const CheckoutBagProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Array<MerchStoreItem>>([]);
  const [show, setShow] = useState(false);

  const addData = (item: MerchStoreItem) => {
    setItems([...items ?? [], item]);
  };

  const deleteData = () => {
    setItems([]);
  };

  const showBagContainer = (status: boolean) => {
    setShow(status);
  };

  const deleteItem = (item: MerchStoreItem) => {
    const newItem = [...items];
    const index = newItem.indexOf(item);

    if (index !== -1) {
      newItem.splice(index, 1);
      setItems(newItem);
    }
  };

  const checkoutContext: CheckoutBagContextType = {
    data: items,
    show: show,
    addData: addData,
    deleteData: deleteData,
    showBag: showBagContainer,
    deleteItem: deleteItem
  };

  return (
    <CheckoutBagContext.Provider value={checkoutContext}>
      {children}
    </CheckoutBagContext.Provider>
  );
};

export default CheckoutBagProvider;