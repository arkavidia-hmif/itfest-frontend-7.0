import * as React from  "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../provider/CheckoutBagContext";
import Bag from "./Bag";
import { MerchStoreItem } from "interfaces/merch-store";
import FilledButton from "components/commons/FilledButton";
import { Theme } from "styles/theme";


const BagContainer: React.FC = () => {
  const { data, deleteData, show } = useContext(CheckoutBagContext) as CheckoutBagContextType;

  const none = {
    display: "none"
  };

  const block = {
    display: "block"
  };
  
  return (
    <div className="main container-sm" style={show ? block: none}>
      <div className="header">
        <p>Arkavidia Shopping Bag</p>
      </div>
      <div className="content row justify-content-center">
        {
          data.map((data: MerchStoreItem) => 
            <Bag key={data.name} item={data} />
          )
        }

      </div>
      <div className="content row justify-content-end" style={{paddingRight: "2rem"}}>
        <img src="/img/trash.svg" onClick={deleteData} />
        <FilledButton
          color={Theme.buttonColors.pinkButton}
          text="Buy"
          padding="0.75rem 3rem"
        />
      </div>

      <style jsx>
        {`
          .main {
            padding: 0 0 0 0 !important;
            background-color: #A7C8F3;
            width: 50%;
            box-sizing: border-box;
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            border-radius: 1rem 1rem 0 0;
          }

          .header {
            background-color: #FE789A;
            padding: 0.8rem;
            text-align: center;
            border-radius: 1rem 1rem 0 0;
          }

          .content {
            padding: 1rem;
          }

          p {
            color: white;
            margin-block-start: 0;
            margin-block-end: 0;
            font-weight: bold;
            font-size: 1.2rem;
          }

          img {
            width: 2rem;
            margin-right: 1rem;
            cursor: pointer;
          }

          @media only screen and (max-width: 576px) {
            .main {
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BagContainer;
