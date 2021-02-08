import * as React from  "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../provider/CheckoutBagContext";
import Bag from "./Bag";
import Container from "./Container";
import { MerchStoreItem } from "interfaces/merch-store";


const BagContainer: React.FC = () => {
  const { data } = useContext(CheckoutBagContext) as CheckoutBagContextType;
  const buyCallback = () => {
    console.log("Buy From BagContainer");
  }

  return (
    <Container buyCallback={buyCallback}>
      {
        data.map((item: MerchStoreItem) => <Bag key={item.id} item={item} />)
      }
    </Container>
  );
};

export default BagContainer;
