import * as React from  "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../provider/CheckoutBagContext";
import { MerchStoreItem } from "interfaces/merch-store";

interface Props {
  item: MerchStoreItem;
}

const Bag: React.FC<Props> = ({ item }) => {
  const { deleteItem } = useContext(CheckoutBagContext) as CheckoutBagContextType;

  return (
    <div className="main container-sm">
      <div className="row">
        <div className="col-4">
          <img src={item.image}/>
        </div>
        <div className="col-8">
          <p>{item.name}</p>
          <p style={{fontWeight: "bold"}}>Rp {item.price.toLocaleString()}</p>
          <img src="/img/trash.svg" style={{width: "2rem", float: "right"}}  onClick={() => deleteItem(item)}/>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            width: 45%;
            display: inline-block;
            margin-top: 0.8rem;
            background-color: #FE99B3;
            padding: 1rem;
            border-radius: 1rem;
          }

          img {
            width: 5rem;
            cursor: pointer;
          }

          p {
            color: white;
            margin-block-start: 0;
            margin-block-end: 0;
          }

          @media only screen and (max-width: 576px) {
            .main {
              width: 80%;
            }
          }

        `}
      </style>
    </div>
  );
};

export default Bag;
