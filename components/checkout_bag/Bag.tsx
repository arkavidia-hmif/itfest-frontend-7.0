import React from "react";
import { MerchStoreItem } from "interfaces/merch-store";

interface Props {
  item: MerchStoreItem;
}

const Bag: React.FC<Props> = ({ item }) => {
  return (
    <div className="main container-sm">
      <div className="row">
        <div className="col-4">
          <img src={item.image}></img>
        </div>
        <div className="col-8">
          <p>{item.name}</p>
          <p style={{fontWeight: "bold"}}>Rp {item.price.toLocaleString()}</p>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            width: 45%;
            display: inline-block;
            margin-top: 0.8rem;
            background-color: #D4E4F9;
            padding: 1rem;
          }

          img {
            width: 5rem;
          }

          p {
            margin-block-start: 0;
            margin-block-end: 0;
          }

          @media only screen and (max-width: 576px) {
            .main {
              width: 80%;
            }
          }

        `}
      </style>
    </div>
  );
};

export default Bag;
