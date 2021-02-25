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
  const [expandSelect, setExpandSelect] = useState("");

  const storeArray = useMemo(() => Object.values(Tenants), [Tenants]);

  const storeCarouselArray = storeArray;
  const [currentPosition, setCurrentPosition] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSnackBar(false);
    }, 1400);

    return () => clearTimeout(timer);
  });

  const handleMore = (slug: string) => {
    setExpandSelect(slug);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };


  return (
    <>
      <div>
        {isExpanded && (
          <MerchStoreExpanded
            merchant={Tenants[expandSelect]}
            handleClose={handleClose}
            handleSnackBar={setSnackBar}
          />
        )}
        <div className={`merchant-carousel ${isExpanded && "d-none"}`}>
          <Carousel
            initialActiveIndex={0}
            onNextStart={() => {
              if (currentPosition < storeCarouselArray.length - 1) {
                setCurrentPosition(currentPosition + 1);
              }
            }}

            onPrevStart={() => {
              if (currentPosition > 0) {
                setCurrentPosition(currentPosition - 1);
              }
            }}

            renderPagination={() => <></>}
            renderArrow={MerchStoreCarouselButton}
            breakPoints={MerchStoreMerchantCarouselBreakPoints}
          >
            {storeCarouselArray.map((merchant, index) => (
              <div key={index} className="merch-store-simple">
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

      <SnackBar
        open={snackBar}
      />

      <style jsx>
        {`
          .merch-store-simple {
            transition: all .5s;
            overflow: 
          }

          .merch-store-simple-minor {
            transition: all .5s;
            transform: scale3d(0.6, 0.6, 1);
            opacity: 0.5;
          }

          @media only screen and (max-width: ${Dimen.smBreakpoint}) {
            .merch-store-simple {
              width: 100%;
            }
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
