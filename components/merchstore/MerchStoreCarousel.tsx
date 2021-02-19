import * as React from "react";
import { useContext } from "react";
import Carousel from "react-elastic-carousel";
import { CheckoutBagContext } from "../../utils/context/checkout";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import MerchStoreCarouselItem from "./MerchStoreCarouselItem";
import MerchStoreCarouselButton from "./MerchStoreCarouselButton";
import { MerchStoreCarouselBreakPoints } from "utils/constants/merch-store-placeholder";
import { MerchStoreItem } from "interfaces/merch-store";

interface Props {
  items: Array<MerchStoreItem>;
}

const MerchStoreCarousel: React.FC<Props> = ({ items }) => {
  const { addData } = useContext(CheckoutBagContext) as CheckoutBagContextType;

  const buyCallback = (item: MerchStoreItem) => {
    addData(item);
  };

  return (
    <Carousel
      breakPoints={MerchStoreCarouselBreakPoints}
      renderPagination={() => <></>}
      renderArrow={MerchStoreCarouselButton}
    >
      {items.map((item, index) => (
        <MerchStoreCarouselItem
          buyCallback={buyCallback}
          key={index}
          item={item}
          hover={true}
        />
      ))}
    </Carousel>
  );
};

export default MerchStoreCarousel;
