import FilledButton from "components/commons/FilledButton";
import { MerchStoreItem } from "interfaces/merch-store";

export interface Props {
  item: MerchStoreItem;
  buyCallback?: (item: MerchStoreItem) => void;
  hover: boolean;
}

const MerchStoreCarouselItem: React.FC<Props> = ({
  item,
  buyCallback = () => null,
  hover,
}) => {
  return (
    <div>
      <div className="store-item">
        <div className="item-image">
          <img src={item.imageUrl} className="w-100" />
          <div className="item-hover">
            {hover ? (
              <FilledButton
                disabled={item.qty === 0}
                text={item.qty === 0 ? "Habis" : "Beli"}
                onClick={() => {
                  if (item.qty > 0) {
                    buyCallback(item);
                  }
                }}
              />
            ) : null}
          </div>
        </div>

        <p className="mt-3 item-name">
          <b>{item.name}</b>
        </p>
        <p className="mt-3 mb-2">{item.price.toLocaleString()} P</p>
      </div>
      <style jsx>
        {`
          .item-name {
            min-height: 2.5rem;
          }

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

            background-color: rgba(0, 0, 0, 0.2);

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
