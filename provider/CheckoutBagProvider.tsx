import { useContext, useEffect, useState } from "react";
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      const saved = localStorage.getItem("saved_item");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } else {
      localStorage.setItem("saved_item", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item: MerchStoreItem) => {
    if (authenticated) {
      if (items.find(currentItem => currentItem.id === item.id)) {
        addQuantity(item);
      } else {
        item.qty = 1;
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
      if (item.qty >= 0) {
        item.qty += 1;
        setItems(newItem);
      }
    }
  };

  const subQuantity = (item: MerchStoreItem) => {
    const newItem = [...items];
    const index = newItem.indexOf(item);

    if (index !== -1) {
      if (item.qty > 0) {
        item.qty -= 1;
        setItems(newItem);
      }
    }
  };

  const clearItem = () => {
    setItems([]);
  };

  const checkoutContext: CheckoutBagContextType = {
    data: items,
    show: show,
    addData: addItem,
    deleteData: deleteAllItem,
    showBag: showBagContainer,
    deleteItem: deleteItem,
    addQuantity: addQuantity,
    subQuantity: subQuantity,
    clearItem,
    hasPhysical: items.some(entry => entry.hasPhysical)
  };

  return (
    <CheckoutBagContext.Provider value={checkoutContext}>
      {children}
    </CheckoutBagContext.Provider>
  );
};

export default CheckoutBagProvider;