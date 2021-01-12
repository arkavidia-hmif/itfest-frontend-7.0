import { MerchStoreItem } from "interfaces/merch-store";

export interface Props {
  item: MerchStoreItem
}

const MerchStoreCarouselItem: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <div className="store-item">
        <div className="item-image">
          <img src={item.image} />
          <button>Buy</button>
        </div>

        <h4 className="mt-2 mb-2">{item.name}</h4>
        <p className="mt-4 mb-2">{item.price}</p>
      </div>
      <style jsx>
        {`
          .store-item {
            width: 5.75rem;
          }

          .store-item button {
            display: none;
          }

          .item-image {
            position: relative;
            display: flex;
            justify-content: center;
          }

          .item-image img {
            width: 100%;
          }

          .store-item:hover button {
            position: absolute;
            top: 40%;
            border: none;
            border-radius: 12px;
            display: block;
            color: white;
            font-size: .9rem;
            font-family: Viga;
            font-style: normal;
            font-weight: normal;
            background: #fe789a;
            padding: 0.5rem 2rem;
          }

          .store-item:hover button:focus {
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default MerchStoreCarouselItem;