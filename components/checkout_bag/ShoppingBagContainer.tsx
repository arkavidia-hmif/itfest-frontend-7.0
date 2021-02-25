import * as React from "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../utils/context/checkout";
import ShoppingBag from "./ShoppingBag";
import Checkout from "./Checkout";
import { MerchStoreItem } from "interfaces/merch-store";
import { Dimen } from "styles/dimen";



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
            <div className="bag-container mt-3">
              <p><b>PRODUCT</b></p>
              <p className="hide-small"><b>POINT</b></p>
              <p><b>QUANTITY</b></p>
              <p className="hide-small"><b>SUBTOTAL</b></p>
              <p></p>

              {
                data.length === 0 && <div style={{ gridColumn: "1 / span 5", textAlign: "center" }}><br />Belum ada barang</div>
              }
              {
                data.map((item: MerchStoreItem) => <ShoppingBag key={item.id} item={item} />)
              }
            </div>
          </div>
          <div className="content col-md-6 col-lg-4">
            <Checkout />
          </div>
          <img className="btn-close" src="/img/close.svg" onClick={() => showBag(false)} />
        </div>
      </div>
      <style jsx>
        {`
          .bag-container {
            display: grid;
            grid-template-columns: auto repeat(4, min-content);
            grid-gap: 0 1rem;
          }
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

          @media screen and (max-width:${Dimen.mdBreakpoint}){
            .bag-container {
              grid-template-columns: auto repeat(2, min-content);
            }

            .hide-small {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default ShoppingBagContainer;