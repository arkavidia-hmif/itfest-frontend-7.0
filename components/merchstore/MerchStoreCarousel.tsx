import Carousel from "react-elastic-carousel";
import MerchStoreCarouselItem from "./MerchStoreCarouselItem";
import {
  merchStoreCarouselBreakPoints,
  merchStoreConsts,
} from "utils/constants/merch-store-placeholder";
import { MerchStoreItem } from "interfaces/merch-store";

interface Props {
  items: Array<MerchStoreItem>
}

const MerchStoreCarousel: React.FC<Props> = ({ items }) => {
  const MerchStoreCustomArrow = ({
    type,
    onClick,
    isEdge,
  }: {
    type: "PREV" | "NEXT";
    onClick: () => void;
    isEdge: boolean;
  }) => {
    const buttonImgPart = type === merchStoreConsts.PREV ? "prev" : "next";
    const buttonImgSrc = `/img/merchstore/${buttonImgPart}_button.png`;

    return (
      <>
        <div className="next-btn-container">
          <button onClick={onClick} disabled={isEdge}>
            <img
              src={buttonImgSrc}
              className="next-icon"
            />
          </button>
        </div>
        <style jsx>
          {`
            .next-btn-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .next-btn-container button {
              background: none;
              border: none;
            }

            .next-btn-container button:focus {
              outline: none;
            }

            .next-icon {
              width: 2rem;
              border-radius: 50%;
              box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
            }
          `}
        </style>
      </>
    );
  };

  return (
    <Carousel
      breakPoints={merchStoreCarouselBreakPoints}
      renderPagination={() => <></>}
      renderArrow={MerchStoreCustomArrow}
    >
      {items.map((item, index) => (
        <MerchStoreCarouselItem
          key={index}
          item={item}
        />
      ))}
    </Carousel>
  );
};

export default MerchStoreCarousel;
