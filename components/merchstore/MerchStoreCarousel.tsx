import * as React from  "react";
import { useContext} from "react";
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
    // debug
<<<<<<< HEAD
    // eslint-disable-next-line no-console 
    addData(item);
=======
    // eslint-disable-next-line no-console
    console.log(`Buy ${item.name}`);
>>>>>>> 31bd11d9a48fbda3e2e4c63726ecaa8bee86bf30
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
