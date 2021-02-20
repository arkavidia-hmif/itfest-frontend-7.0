import * as React from "react";
import BagButton from "components/checkout_bag/BagButton";
import ShoppingBagContainer from "components/checkout_bag/ShoppingBagContainer";
import { Dimen } from "styles/dimen";

const MerchStoreTop: React.FC = () => {
  return (
    <>
      <div className="d-sm-flex justify-content-sm-between align-items-center mb-4 ms-top">
        <div className="ms-top-left">
          <h1>Tukarkan Poinmu!</h1>
        </div>
        <div className="ms-top-right">
          <h1>10,000,000</h1>
        </div>
      </div>
      <div className="d-md-flex justify-content-md-center ms-mid-container">
        <div className="d-md-flex justify-content-md-between ms-mid">
          <div className="ms-mid-left m-3">
            {/* <input type="text" placeholder="Cari Startup" /> */}
          </div>
          <div className="m-3 mr-sm-5">
            <BagButton />
            <ShoppingBagContainer />
          </div>
        </div>
      </div>
      <div className="d-lg-flex justify-content-center align-items-center ms-hero">
        <div className="pt-2 pl-5 pr-5 m-5 ms-hero-title">
          <h1>MERCHANDISE STORE</h1>
        </div>
        <div className="ms-hero-logo">
          <img src={"/img/merchstore/merchstore_logo.png"} />
        </div>
      </div>
      <style jsx>
        {`
          .ms-mid {
            width: 90%;
          }

          .ms-top-left h1 {
            background: linear-gradient(to right, #fe5982, #441985);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 2.25rem;
          }

          .ms-top-right {
            background: #ffffff;
            box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            padding: 0.35rem 1rem 0.35rem 5rem;
          }

          .ms-mid-left input {
            padding: 1rem 2.5rem;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
            border-radius: 51px;
            border: 0px;
            
          }

          .ms-hero-title {
            border: 1px solid #000000;
          }

          .ms-hero-title h1 {
            font-size: 2.25rem;
            color: #441985;
            filter: none;
          }

          .ms-hero-logo img {
            width: 80%;
          }

          @media (max-width: ${Dimen.lgBreakpoint}) {
            .ms-hero-title {
              display: flex;
              justify-content: center;
            }

            .ms-hero-logo {
              display: flex;
              justify-content: center;
            }
          }

          @media (max-width: ${Dimen.mdBreakpoint}) {
            .ms-top-left h1 {
              font-size: 1.75rem;
            }

            .ms-top-right h1 {
              font-size: 1.75rem;
              padding: 0.35rem 0.5rem 0.35rem 0.5rem;
            }

            .ms-mid {
              width: 100%;
            }

            .ms-top-right {
              padding: 0;
              display: flex;
              justify-content: center;
              width: 50%;
            }

            .ms-mid-left {
              display: flex;
              justify-content: center;
            }
          }

          @media (max-width: ${Dimen.smBreakpoint}) {
            .ms-hero-title h1 {
              font-size: 1.25rem;
            }

            .ms-top {
              display: flex;
              flex-direction: column;
            }

            .ms-top-left {
              display: flex;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default MerchStoreTop;
