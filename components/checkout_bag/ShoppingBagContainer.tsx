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
    <>
      <div id="shadow" style={{ display: show ? "block" : "none" }} onClick={() => showBag(false)}>
      </div>
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
                  data.length === 0 && <tr><td colSpan={5} align="center"><br />Belum ada barang</td></tr>
                }
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
      </div>
      <style jsx>
        {`
          #shadow {
            width: 100vw;
            height: 100vh;
            background-color: rgba(0,0,0,0.5);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 3;
          }

          .main {
            border-radius: 1rem;
            background-color: white;
            position: absolute;
            z-index: 4;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            box-shadow: 2px 4px 14px rgb(0 0 0 / 25%);
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
    </>
  );
};

export default ShoppingBagContainer;