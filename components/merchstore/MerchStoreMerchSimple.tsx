import * as React from "react";
import MerchStoreCarouselItem from "./MerchStoreCarouselItem";
import { MerchStoreItem } from "interfaces/merch-store";
import { Dimen } from "styles/dimen";
import { CheckoutBagContext } from "utils/context/checkout";

interface Props {
  items: Array<MerchStoreItem>;
  handleSnackBar: (input: boolean) => void;
}

const MerchStoreMerchSimple: React.FC<Props> = ({ items, handleSnackBar }) => {
  const { addData } = React.useContext(CheckoutBagContext);

  const buyCallback = (item: MerchStoreItem) => {
    handleSnackBar(true);
    addData(item);
  };


  return (
    <>
      <div className="d-flex">
        {items.slice(0, 3).map((item, index) => {
          return (
            <div
              className={`mr-4 ml-3 merch-store-simple-item-${index}`}
              key={index}
            >
              <MerchStoreCarouselItem buyCallback={buyCallback} hover={true} item={item} />
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          @media (max-width: ${Dimen.smBreakpoint}) {
            .merch-store-simple-item-2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default MerchStoreMerchSimple;
