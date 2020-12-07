import Carousel from "react-elastic-carousel";
import {
  merchStoreCarouselBreakPoints,
  merchStoreItems,
} from "./MerchStoreConstants";
import { merchStoreConsts } from "./MerchStoreConstants";
import MerchStoreItem from "./MerchStoreItem";

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
    return (
      <>
        <div className="next-btn-container">
          <button onClick={onClick} disabled={isEdge}>
            <img
              src={`/img/merchstore/${
                type === merchStoreConsts.PREV ? "prev" : "next"
              }_button.png`}
              className="next-icon"
            />
          </button>
        </div>
        <style>
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
