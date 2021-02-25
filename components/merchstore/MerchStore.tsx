import { useState, useEffect, useMemo } from "react";
import MerchStoreCarouselButton from "./MerchStoreCarouselButton";
import MerchStoreExpanded from "./MerchStoreExpanded";
import MerchStoreSimple from "./MerchStoreSimple";
import SnackBar from "./SnackBar";
import { Dimen } from "styles/dimen";
import Tenants from "utils/constants/tenants";

const MerchStore: React.FC = () => {
  const [snackBar, setSnackBar] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  const storeArray = useMemo(() => Object.values(Tenants), [Tenants]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSnackBar(false);
    }, 1400);

    return () => clearTimeout(timer);
  });

  const goRight = () => {
    setCurrentPosition((currentPosition + 1) % storeArray.length);
  };

  const goLeft = () => {
    setCurrentPosition(
      (currentPosition - 1 + storeArray.length) % storeArray.length
    );
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
            merchant={storeArray[currentPosition]}
            handleClose={handleClose}
            handleSnackBar={setSnackBar}
          />
        ) :
          (
            <div className="d-flex merch-store-simple align-items-center">
              <div className="merch-store-l-btn">
                <MerchStoreCarouselButton
                  type="PREV"
                  onClick={goLeft}
                  isEdge={false}
                />
              </div>
              <div className="merch-store-left">
                <MerchStoreSimple
                  merchant={storeArray[currentPosition]}
                  handleMore={handleMore}
                  handleSnackBar={setSnackBar}
                />
              </div>

              <div className="merch-store-simple-minor merch-store-center">
                <MerchStoreSimple
                  merchant={storeArray[(currentPosition + 1) % storeArray.length]}
                  handleMore={() => null}
                  handleSnackBar={setSnackBar}
                />
              </div>

              <div className="merch-store-simple-minor merch-store-right">
                <MerchStoreSimple
                  merchant={storeArray[(currentPosition + 2) % storeArray.length]}
                  handleMore={() => null}
                  handleSnackBar={setSnackBar}
                />
              </div>

              <div className="merch-store-r-btn">
                <MerchStoreCarouselButton
                  type="NEXT"
                  onClick={goRight}
                  isEdge={false}
                />
              </div>
            </div>
          )}
      </div>

      <SnackBar
        open={snackBar}
      />

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
            margin-left: -3vw;
          }

          .merch-store-right {
            margin-left: -6vw;
          }

          .merch-store-r-btn {
            margin-left: ${currentPosition === storeArray.length - 1 ? "-10px" : "-50px"};
          }

          @media (max-width: 1400px) {
            .merch-store-right {
              display: none;
            }

            .merch-store-simple {
              margin-left: 0;
            }
          }

          @media (max-width: ${Dimen.lgBreakpoint}) {
            .merch-store-center {
              display: none;
            }

            .merch-store-r-btn {
              margin-left: 0;
            }
          }

          @media (max-width: ${Dimen.lgBreakpoint}) {
            .merch-store-l-btn {
              margin-left: 3vw;
              margin-right: 3vw;
            }

            .merch-store-r-btn {
              margin-left: -1vw;
            }
          }
        `}
      </style>
    </>
  );
};

export default MerchStore;
