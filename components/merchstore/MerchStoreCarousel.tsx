import Carousel from "react-elastic-carousel";
import MerchStoreCarouselItem from "./MerchStoreCarouselItem";
import MerchStoreCarouselButton from "./MerchStoreCarouselButton";
import { MerchStoreCarouselBreakPoints } from "utils/constants/merch-store-placeholder";
import { MerchStoreItem } from "interfaces/merch-store";

interface Props {
  items: Array<MerchStoreItem>;
}

const MerchStoreCarousel: React.FC<Props> = ({ items }) => {
  const buyCallback = (item: MerchStoreItem) => {
    // debug
    // eslint-disable-next-line no-console
    console.log(`Buy ${item.name}`);
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
