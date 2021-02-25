import * as React from "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../utils/context/checkout";
import { MerchStoreItem } from "interfaces/merch-store";
import { Dimen } from "styles/dimen";


interface Props {
  item: MerchStoreItem;
}

const ShoppingBag: React.FC<Props> = ({ item }) => {
  const { deleteItem, addQuantity, subQuantity } = useContext(CheckoutBagContext) as CheckoutBagContextType;

  return (
    <>
      <div className="hide-small">
        <div className="product product-row">
          <img src={item.imageUrl} />
          <p>{item.name}</p>
        </div>
      </div>
      <div className="show-small">
        <div className="product">
          <img className="mb-3" src={item.imageUrl} />
          <p>{item.name}</p>
          <p>{item.price} poin</p>
        </div>
      </div>
      <div className="center hide-small"><p>{item.price}</p></div>
      <div className="center v-center-small">
        <div className="quantity">
          <img src="/img/minus.svg" style={{ marginRight: "0.5rem" }} onClick={() => subQuantity(item)} />
          <p>{item.qty}</p>
          <img src="/img/plus.svg" style={{ marginLeft: "0.5rem" }} onClick={() => addQuantity(item)} />
        </div>
      </div>
      <div className="center hide-small"><p>{item.price * item.qty}</p></div>
      <div className="v-center-small"><img className="btn-del" src="/img/trash.svg" onClick={() => deleteItem(item)} /></div>
      <hr className="show-small w-100" style={{ gridColumn: "1 / span 3" }} />
      <style jsx>
        {`

          .center {
            text-align: center;
          }

          .product {
            position: relative;
          }

          .product-row p {
            top: 25%;
            position: absolute;
          }

          .product-row img, .product-row p, .quantity img, .quantity p{
            display: inline-block;
          }

          .product img {
            width: 5rem;
            margin-right: 1rem;
          }

          .quantity img { 
            width: 0.8rem;
          }

          .quantity p {
            padding: 0.3rem 0.5rem;
            border-radius: 35%;
            box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
          }

          p {
            font-weight: bold;
          }

          .btn-del {
            width: 20px;
            margin-top: -1rem;
          }

          .quantity img, .btn-del {
            cursor: pointer;
          }

          .quantity img:hover, .btn-del:hover {
            opacity: 0.5;
          }

          .show-small {
            display: none;
          } 


          @media screen and (max-width:${Dimen.lgBreakpoint}){
            .v-center-small {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .hide-small {
              display: none;
            }

            .show-small {
              display: block;
            }
          }
      `}</style>
    </>
  );
};

export default ShoppingBag;
