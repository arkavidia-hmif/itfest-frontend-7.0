import * as React from "react";
import { useContext } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../utils/context/checkout";
import { MerchStoreItem } from "interfaces/merch-store";


interface Props {
  item: MerchStoreItem;
}

const ShoppingBag: React.FC<Props> = ({ item }) => {
  const { deleteItem, addQuantity, subQuantity } = useContext(CheckoutBagContext) as CheckoutBagContextType;

  return (
    <tr>
      <td style={{ width: "45%" }}>
        <div className="product">
          <img src={item.imageUrl} />
          <p>{item.name}</p>
        </div>
      </td>
      <td style={{ width: "15%" }}><p>{item.price}</p></td>
      <td style={{ width: "20%" }}>
        <div className="quantity">
          <img src="/img/minus.svg" style={{ marginRight: "0.5rem" }} onClick={() => subQuantity(item)} />
          <p>{item.qty}</p>
          <img src="/img/plus.svg" style={{ marginLeft: "0.5rem" }} onClick={() => addQuantity(item)} />
        </div>
      </td>
      <td><p>{item.price * item.qty}</p></td>
      <td><img className="btn-del" src="/img/trash.svg" onClick={() => deleteItem(item)} /></td>

      <style jsx>
        {`
          td {
            border-right:hidden; 
          }

          .product {
            position: relative;
          }

          .product p {
            top: 25%;
            position: absolute;
          }

          .product img, .product p, .quantity img, .quantity p{
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
            width: 1.5rem;
            margin-top: -1rem;
          }

          .quantity img, .btn-del {
            cursor: pointer;
          }

          .quantity img:hover, .btn-del:hover {
            opacity: 0.5;
          }
        `}
      </style>
    </tr>
  );
};

export default ShoppingBag;
