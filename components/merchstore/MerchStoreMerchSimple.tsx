import * as React from "react";
import MerchStoreCarouselItem from "./MerchStoreCarouselItem";
import { MerchStoreItem } from "interfaces/merch-store";
import { Dimen } from "styles/dimen";

interface Props {
  items: Array<MerchStoreItem>;
}

const MerchStoreMerchSimple: React.SFC<Props> = ({ items }) => {
  return (
    <>
      <div className="d-flex">
        {items.slice(0, 3).map((item, index) => {
          return (
            <div
              className={`mr-4 ml-3 merch-store-simple-item-${index}`}
              key={index}
            >
              <MerchStoreCarouselItem hover={false} item={item} />
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
