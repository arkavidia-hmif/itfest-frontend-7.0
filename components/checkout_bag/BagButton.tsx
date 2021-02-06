import * as React from  "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../provider/CheckoutBagContext";


const BagButton: React.FC = () => {
  const { showBag, data } = useContext(CheckoutBagContext) as CheckoutBagContextType;

  const showBagContainer = () => {
    showBag(true);
  };

  return (
    <div className="main container-sm" onClick={showBagContainer}>
      <div className="row align-items-center justify-content-between">
        <div className="col-8">
          <p>Keranjang Belanja</p>
        </div>
        <div className="col-3">
          <img src="/img/bag.svg" />
        </div>
        <div className="notif">
          <p style={{color: "white", fontWeight: "bold", marginTop: "0.2rem"}}>{data.length}</p>
        </div>
      </div>

      <style jsx>
        {`
          .main {
            box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
            border-radius: 4rem;
            width: 20%;
            cursor: pointer;
            position: relative;
            margin-top: 5rem;
          }

          img {
            width: 2.5rem;
            float: right;
          }

          p {
            margin-block-start: 0;
            margin-block-end: 0;
          }

          .notif {
            border-radius: 100%;
            width: 1.5rem;
            height: 1.5rem;
            background-color: red;
            text-align: center;
            z-index: 1;
            position: absolute;
            right: 0;
            top: -0.5rem;
          }

          @media only screen and (max-width: 576px) {
            .main {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BagButton;
