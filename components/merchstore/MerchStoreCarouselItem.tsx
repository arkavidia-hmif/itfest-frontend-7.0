import FilledButton from "components/commons/FilledButton";
import { MerchStoreItem } from "interfaces/merch-store";

export interface Props {
  item: MerchStoreItem,
  buyCallback: (item: MerchStoreItem) => void
}

const MerchStoreCarouselItem: React.FC<Props> = ({ item, buyCallback }) => {
  return (
    <div>
      <div className="store-item">
        <div className="item-image">
          <img src={item.image} className="w-100" />
          <div className="item-hover">
            <FilledButton text="Buy" onClick={() => {
              buyCallback(item);
            }} />
          </div>
        </div>

        <h4 className="mt-2 mb-2">{item.name}</h4>
        <p className="mt-4 mb-2">{item.price}</p>
      </div>
      <style jsx>
        {`
          .store-item {
            width: 5.75rem;
          }

          .item-image {
            position: relative;
          }

          .item-hover {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;

            border-radius: 0.25rem;

            background-color: rgba(0,0,0,0.2);
            
            justify-content: center;
            align-items: center;
            display: flex;

            opacity: 0;
            transition: opacity 200ms ease-out;
          }

          .item-hover:hover {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default MerchStoreCarouselItem;
