import * as React from  "react";
import { useContext, ReactNode } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../provider/CheckoutBagContext";
import FilledButton from "components/commons/FilledButton";
import { Theme } from "styles/theme";



const CheckoutContainer: React.FC<ReactNode> = ({children}) => {
  const { deleteData, show, showBag } = useContext(CheckoutBagContext) as CheckoutBagContextType;

  const closeBagContainer = () => {
    showBag(false);
  };

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
        <img className="btn-close" src="/img/close.svg" onClick={closeBagContainer}/>
      </div>
      <div className="content row justify-content-center">
        {children}
      </div>
      <div className="content row justify-content-end" style={{paddingRight: "2rem"}}>
        <img className="btn-del" src="/img/trash.svg" onClick={deleteData} style={{marginRight: "1rem"}}/>
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
            background: linear-gradient(180deg, #FFFFFF 0%, #FFDCF4 20.31%, #FFD9DB 65.62%, #E8DBFA 100%);
            width: 50%;
            box-sizing: border-box;
            position: absolute;
            z-index: 3;
            left: 25%;
            border-radius: 1rem 1rem 0 0;
            animation-name: dropdown;
            animation-duration: 1s;
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

          @media only screen and (max-width: 576px) {
            .main {
              width: 90%;
              left: 5%;
            }
          }

          @keyframes dropdown {
            from {top: -100%;}
            to {top: 32%;}
          }
        `}
      </style>
    </div>
  );
};

export default CheckoutContainer;
