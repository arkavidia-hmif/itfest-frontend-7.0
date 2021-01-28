import { useState } from "react";
import { Dimen } from "styles/dimen";
import MerchStoreCarouselButton from "./MerchStoreCarouselButton";
import MerchStoreExpanded from "./MerchStoreExpanded";
import MerchStoreSimple from "./MerchStoreSimple";

const MerchStore: React.SFC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [currentPosition, setCurrentPosition] = useState(0);

  const storeArray = ["Arkav0", "Arkav1", "Testtt2", "Testtt3", "TestTest4"];

  const goRight = () => {
    setCurrentPosition(currentPosition + 1);
  };

  const goLeft = () => {
    setCurrentPosition(currentPosition - 1);
  };

  const handleMore = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div>
        {isExpanded ? (
          <MerchStoreExpanded
            merchantName={`${storeArray[currentPosition]}`}
            handleClose={handleClose}
          />
        ) : (
          <div className="d-flex merch-store-simple align-items-center">
            <div className="merch-store-l-btn">
              <MerchStoreCarouselButton
                type="PREV"
                onClick={goLeft}
                isEdge={currentPosition === 0}
              />
            </div>
            <div className="merch-store-left">
              <MerchStoreSimple
                merchantName={`${storeArray[currentPosition]}`}
                handleMore={handleMore}
              />
            </div>
            {currentPosition < storeArray.length - 1 ? (
              <div className="merch-store-simple-minor merch-store-center">
                <MerchStoreSimple
                  merchantName={`${storeArray[currentPosition + 1]}`}
                  handleMore={() => null}
                />
              </div>
            ) : null}

            {currentPosition < storeArray.length - 2 ? (
              <div className="merch-store-simple-minor merch-store-right">
                <MerchStoreSimple
                  merchantName={`${storeArray[currentPosition + 2]}`}
                  handleMore={() => null}
                />
              </div>
            ) : null}

            <div className="merch-store-r-btn">
              <MerchStoreCarouselButton
                type="NEXT"
                onClick={goRight}
                isEdge={currentPosition === storeArray.length - 1}
              />
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .merch-store-simple {
            margin-left: -4vw;
          }
          .merch-store-simple-minor {
            transform: scale3d(0.7, 0.7, 1);
            opacity: 0.5;
          }

          .merch-store-center {
            margin-left: -2vw;
          }

          .merch-store-right {
            margin-left: -6vw;
          }

          .merch-store-r-btn {
            margin-left: ${currentPosition === storeArray.length - 1
              ? "-10px"
              : "-50px"};
          }

          @media (max-width: 1400px) {
            .merch-store-right {
              display: none;
            }

            .merch-store-simple {
              margin-left: 0;
            }
          }

          @media (max-width: ${Dimen.xsBreakpoint}) {
            .merch-store-center {
              display: none;
            }

            .merch-store-r-btn {
              margin-left: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default MerchStore;
