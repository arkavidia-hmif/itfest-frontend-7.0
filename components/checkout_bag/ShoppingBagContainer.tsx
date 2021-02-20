import * as React from "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../utils/context/checkout";
import ShoppingBag from "./ShoppingBag";
import Checkout from "./Checkout";
import { MerchStoreItem } from "interfaces/merch-store";



const ShoppingBagContainer: React.FC = () => {
  const { data, showBag, show } = useContext(CheckoutBagContext) as CheckoutBagContextType;

  return (
    <div className="main container-sm" style={{ display: show ? "block" : "none" }}>
      <div className="row">
        <div className="content col-md-6 col-lg-8" style={{ overflowY: "scroll" }}>
          <h2>Shopping Bag</h2>
          <table style={{ width: "100%" }}>
            <tbody>
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
            </tbody>
          </table>
        </div>
        <div className="content col-md-6 col-lg-4">
          <Checkout />
        </div>
        <img className="btn-close" src="/img/close.svg" onClick={() => showBag(false)} />
      </div>
      <style jsx>
        {`
          .main {
            background-color: white;
            position: absolute;
            z-index: 3;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -20%);
            padding: 1rem;
          }

          .btn-close {
            width: 1rem;
            position: absolute;
            top: 1rem;
            right: 2rem;
            cursor: pointer;
          }

          .btn-close:hover {
            opacity: 0.5;
          }

          table { 
            border-collapse: separate; 
            border-spacing: 0 1rem;
          } 
        `}
      </style>
    </div>
  );
};

export default ShoppingBagContainer;