import { useState } from "react";
import CheckoutBagContextType from "../utils/constants/checkout-bag";
import { CheckoutBagContext } from "./CheckoutBagContext";
import { MerchStoreItem } from "interfaces/merch-store";



const CheckoutBagProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Array<MerchStoreItem>>([]);
  const [show, setShow] = useState(false);

  const addItem = (item: MerchStoreItem) => {
    setItems([...items ?? [], item]);
  };

  const deleteAllItem = () => {
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

  const addQuantity = (item: MerchStoreItem) => {
    const newItem = [...items];
    const index = newItem.indexOf(item);

    if (index !== -1) {
      if (item.quantity >= 0) {
        item.quantity += 1;
        setItems(newItem);
      }
    }
  };

  const subQuantity = (item: MerchStoreItem) => {
    const newItem = [...items];
    const index = newItem.indexOf(item);

    if (index !== -1) {
      if (item.quantity > 0) {
        item.quantity -= 1;
        setItems(newItem);
      }
    }
  };

  const checkoutContext: CheckoutBagContextType = {
    data: items,
    show: show,
    addData: addItem,
    deleteData: deleteAllItem,
    showBag: showBagContainer,
    deleteItem: deleteItem,
    addQuantity: addQuantity,
    subQuantity: subQuantity
  };

  return (
    <CheckoutBagContext.Provider value={checkoutContext}>
      {children}
    </CheckoutBagContext.Provider>
  );
};

export default CheckoutBagProvider;