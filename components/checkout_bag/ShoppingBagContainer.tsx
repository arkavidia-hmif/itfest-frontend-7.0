import * as React from  "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../utils/context/checkout";
import ShoppingBag from "./ShoppingBag";
import Checkout from "./Checkout";
import { MerchStoreItem } from "interfaces/merch-store";



const ShoppingBagContainer: React.FC = () => {
  const { data, showBag, show } = useContext(CheckoutBagContext) as CheckoutBagContextType;
  
  return (
    <div className="main" style={{display: show ? "block": "none"}}>
      <div className="shopping-bag">
        <h2>Shopping Bag</h2>
        <table style={{width: "100%"}}>
          <tr>
            <th>PRODUCT</th>
            <th>POINT</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th></th>
          </tr>
          {
            data.map((item: MerchStoreItem) => <ShoppingBag key={item.id} item={item} />)
          }  
        </table>
      </div>
      <div className="checkout">
        <img src="/img/close.svg" onClick={() => showBag(false)} />
        <Checkout />
      </div>
      <style jsx>
        {`
          .main {
            width: 80%;
            background-color: white; 
            position: absolute;
            z-index: 3;
            left: 10%;
            height: 80vh;
          }

          .shopping-bag {
            width: 65%;
            // border: 2px solid red; 
            height: 100%;
            top: -70%;
          }

          .checkout {
            width: 35%;
            // border: 2px solid blue; 
            height: 100%;
          }

          .checkout img {
            width: 1rem;
            position: absolute;
            top: 1rem;
            right: 2rem;
            cursor: pointer;
          }

          .checkout img:hover {
            opacity: 0.5;
          }

          .shopping-bag, .checkout {
            display: inline-block;
            padding: 1rem;
            position: relative;
          }

          table { 
            border-collapse: separate; 
            border-spacing: 0 1rem;
            // border: 2px solid green; 
          } 
        `}
      </style>
    </div>
  );
};

export default ShoppingBagContainer;
