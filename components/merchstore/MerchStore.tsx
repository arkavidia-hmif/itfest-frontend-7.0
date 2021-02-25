import { useState, useEffect, useMemo, useRef } from "react";
import MerchStoreCarouselButton from "./MerchStoreCarouselButton";
import MerchStoreExpanded from "./MerchStoreExpanded";
import MerchStoreSimple from "./MerchStoreSimple";
import SnackBar from "./SnackBar";
import Tenants from "utils/constants/tenants";
import Carousel from "react-elastic-carousel";
import { MerchStoreMerchantCarouselBreakPoints } from "utils/constants/merch-store-merchant";

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
            merchant={storeArray[currentPosition]}
            handleClose={handleClose}
            handleSnackBar={setSnackBar}
          />
        ) :
          (
            <div className="">
              <div className="merchant-carousel">
                <Carousel

                  initialActiveIndex={storeArray.length * 2}
                  onNextStart={() => {
                    setCurrentPosition(currentPosition + 1)
                  }}

                  onPrevStart={() => {
                    setCurrentPosition(currentPosition - 1)
                  }}

                  renderPagination={() => <></>}
                  renderArrow={MerchStoreCarouselButton}
                  breakPoints={MerchStoreMerchantCarouselBreakPoints}

                >
                  {storeCarouselArray.map((merchant, index) => (
                    <div key={index} className={`merch-store-simple ${index === currentPosition ? "" : "merch-store-simple-minor"
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
            </div>

          )}
      </div>

      <SnackBar
        open={snackBar}
      />

      <style jsx>
        {`
          .merch-store-simple {
            // margin-left: -4vw;
            transform: scale3d(0.9, 0.9, 1);
            transition: all .5s;
            overflow: 
          }

          .merch-store-simple-minor {
            transition: all .5s;
            transform: scale3d(0.6, 0.6, 1);
            opacity: 0.5;
          }
          
        `}
      </style>
    </>
  );
};

export default MerchStore;
