import Carousel from "react-elastic-carousel";
import MerchStoreItem from "./MerchStoreItem";
import {
  merchStoreCarouselBreakPoints,
  merchStoreItems,
  merchStoreConsts,
} from "utils/constants/merch-store-placeholder";

const MerchStoreCarousel: React.FC = () => {
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
      {merchStoreItems.map((item, index) => (
        <MerchStoreItem
          key={index}
          name={item["item-name"]}
          image={item["item-img"]}
          price={item["item-price"]}
        />
      ))}
    </Carousel>
  );
};

export default MerchStoreCarousel;
