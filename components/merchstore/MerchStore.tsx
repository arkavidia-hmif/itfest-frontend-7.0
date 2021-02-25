import { useState, useEffect, useMemo } from "react";
import Carousel from "react-elastic-carousel";
import MerchStoreCarouselButton from "./MerchStoreCarouselButton";
import MerchStoreExpanded from "./MerchStoreExpanded";
import MerchStoreSimple from "./MerchStoreSimple";
import SnackBar from "./SnackBar";
import Tenants from "utils/constants/tenants";
import { MerchStoreMerchantCarouselBreakPoints } from "utils/constants/merch-store-merchant";
import { Dimen } from "styles/dimen";

const MerchStore: React.FC = () => {
  const [snackBar, setSnackBar] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const storeArray = useMemo(() => Object.values(Tenants), [Tenants]);

  const storeCarouselArray = [...storeArray, ...storeArray, ...storeArray, ...storeArray, ...storeArray];

  const [currentPosition, setCurrentPosition] = useState(storeArray.length * 2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSnackBar(false);
    }, 1400);

    return () => clearTimeout(timer);
  });

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
            merchant={storeArray[currentPosition % storeArray.length]}
            handleClose={handleClose}
            handleSnackBar={setSnackBar}
          />
        ) :
          (
            <div className="merchant-carousel">
              <Carousel
                initialActiveIndex={storeArray.length * 2}
                onNextStart={() => {
                  setCurrentPosition(currentPosition + 1);
                }}

                onPrevStart={() => {
                  setCurrentPosition(currentPosition - 1);
                }}

                renderPagination={() => <></>}
                renderArrow={MerchStoreCarouselButton}
                breakPoints={MerchStoreMerchantCarouselBreakPoints}

              >
                {storeCarouselArray.map((merchant, index) => (
                  <div key={index} className={
                    `merch-store-simple ${index === currentPosition ? "" : "merch-store-simple-minor"
                    }`}>
                    <MerchStoreSimple
                      merchant={merchant}
                      handleMore={handleMore}
                      handleSnackBar={setSnackBar}
                      key={index}
                    />
                  </div>

                ))}
              </Carousel>
            </div>

          )}
      </div>

      <SnackBar
        open={snackBar}
      />

      <style jsx>
        {`
          .merch-store-simple {
            transform: scale3d(0.875, 0.875, 1);
            transition: all .5s;
            overflow: 
          }

          .merch-store-simple-minor {
            transition: all .5s;
            transform: scale3d(0.6, 0.6, 1);
            opacity: 0.5;
          }

          @media only screen and (max-width: ${Dimen.smBreakpoint}) {

            .merchant-carousel {
              width: 95%;
            }

          }
          
        `}
      </style>
    </>
  );
};

export default MerchStore;
