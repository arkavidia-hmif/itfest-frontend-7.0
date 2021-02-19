import { useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";
import CheckoutBagContextType from "../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../utils/context/checkout";
import { MerchStoreItem } from "interfaces/merch-store";
import { AuthContext } from "utils/context/auth";



const CheckoutBagProvider: React.FC = ({ children }) => {

  const { authenticated } = useContext(AuthContext);

  const router = useRouter();

  const [items, setItems] = useState<Array<MerchStoreItem>>([]);
  const [show, setShow] = useState(false);

  const addItem = (item: MerchStoreItem) => {

    if (authenticated) {
      if (items.find(currentItem => currentItem.id === item.id)) {
        addQuantity(item);
      } else {
        setItems([...items ?? [], item]);
      }
    } else {
      router.push("/login");
    }



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