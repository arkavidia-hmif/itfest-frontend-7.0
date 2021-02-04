import * as React from  "react";
import { MerchStoreItem } from "interfaces/merch-store";

interface Props {
  item: Array<MerchStoreItem>;
}

const Checkout: React.FC<Props> = ({ item }) => {
  return (
    <div className="main container-sm">
      <div className="header">
        <p>Checkout</p>
        <img className="btn-close" src="/img/close.svg" />
      </div>
      <div className="content">
        <p>Hello</p>
      </div>

      <style jsx>
        {`
          .main {
            padding: 0 0 0 0 !important;
            background: linear-gradient(180deg, #FFFFFF 0%, #FFDCF4 20.31%, #FFD9DB 65.62%, #E8DBFA 100%);
            width: 50%;
            box-sizing: border-box;
            position: absolute;
            z-index: 2;
            left: 25%;
            border-radius: 1rem 1rem 0 0;
            animation-name: dropdown;
            animation-duration: 1s;
            height: 55vh;
          }

          .header {
            background-color: #FE789A;
            padding: 0.8rem;
            text-align: center;
            border-radius: 1rem 1rem 0 0;
          }

          p {
            color: white;
            margin-block-start: 0;
            margin-block-end: 0;
            font-weight: bold;
            font-size: 1.2rem;
            display: inline-block;
          }

          img {
            width: 2rem;
            margin-right: 1rem;
            cursor: pointer;
            display: inline-block;
          }

          .btn-close {
            float: right; 
            width: 1.5rem;
          }

          .btn-close:hover, .btn-del:hover {
            opacity: 0.5;
          }

          .content {
            border: 1px solid red;
            width: 90%;
            height: 40vh;
            margin: auto;
            margin-top: 0.8rem;
            background-color: #FE99B3;
            padding: 1rem;
            border-radius: 1rem;
            box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </div>
  );
};

export default Checkout;
