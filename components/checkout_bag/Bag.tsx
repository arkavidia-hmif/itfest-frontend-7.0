import * as React from  "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../provider/CheckoutBagContext";
import { MerchStoreItem } from "interfaces/merch-store";



interface Props {
  item: MerchStoreItem;
}

const Bag: React.FC<Props> = ({ item }) => {
  const { deleteItem, addQuantity, subQuantity } = useContext(CheckoutBagContext) as CheckoutBagContextType;

  return (
    <div className="main container-sm">
      <div className="row">
        <div className="border col-4">
          <img className="product-img" src={item.image}/>
        </div>
        <div className="border col-8">
          <p>{item.name}</p>
          <p style={{fontWeight: "bold"}}>Rp {item.price.toLocaleString()}</p>
          <p style={{display: "inline-block", margin: "0.5rem 0.5rem 0 0"}}>Qty: {item.quantity}</p>
          <img className="qty" src="/img/minus.svg" onClick={() => subQuantity(item)} />
          <img className="qty" src="/img/plus.svg" onClick={() => addQuantity(item)} />
          <img  className="btn-del" src="/img/trash.svg" onClick={() => deleteItem(item)}/>
        </div>
      </div>
      <style jsx>
        {`
          // .border {
          //   border: 1px solid red;
          // }

          .main {
            width: 45%;
            display: inline-block;
            margin-top: 0.8rem;
            background-color: #FE99B3;
            padding: 1rem;
            border-radius: 1rem;
            box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
          }

          .product-img {
            width: 5rem;
          }

          .qty {
            width: 1.2rem;
            display: inline-block;
            margin: 0 0.3rem 0 0;
            cursor: pointer;
          }

          .btn-del {
            width: 2rem;
            float: right;
            cursor: pointer;
          }

          .btn-del:hover, .qty:hover {
            opacity: 0.5;
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
