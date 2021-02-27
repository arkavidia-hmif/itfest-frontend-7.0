import { useState, useEffect, useMemo } from "react";
import MerchStoreSimple from "./MerchStoreSimple";
import SnackBar from "./SnackBar";
import Tenants from "utils/constants/tenants";
// import { MerchStoreMerchantCarouselBreakPoints } from "utils/constants/merch-store-merchant";
import { Dimen } from "styles/dimen";
import { Tenant } from "interfaces/tenant";
// import Carousel from "react-elastic-carousel";
// import MerchStoreCarouselButton from "./MerchStoreCarouselButton";
// import MerchStoreExpanded from "./MerchStoreExpanded";

function shuffleFisherYates(array: Tenant[]) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * (i + 1));
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

// const shuffleArray = (array: Tenant[]) => {
//   const fix: Tenant[] = [];
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     fix[i] = array[j];
//     fix[j] = temp;
//   }
//   return fix;
// };

// interface Props {
//   storeCarouselArray: Tenant[]
// }
const MerchStore: React.FC = () => {
  const [snackBar, setSnackBar] = useState(false);
  // const [isExpanded, setIsExpanded] = useState(false);
  // const [expandSelect, setExpandSelect] = useState("");

  const storeCarouselArray = useMemo(
    () => shuffleFisherYates(Object.values(Tenants)),
    [Tenants]
  );

  // const storeCarouselArray = storeArray;
  // const [currentPosition, setCurrentPosition] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSnackBar(false);
    }, 1400);

    return () => clearTimeout(timer);
  });

  // const handleMore = (slug: string) => {
  //   setExpandSelect(slug);
  //   setIsExpanded(true);
  // };

  // const handleClose = () => {
  //   setIsExpanded(false);
  // };

  return (
    <>
      <div>
        {/* {isExpanded && (
          <MerchStoreExpanded
            // merchant={Tenants[expandSelect]}
            handleClose={handleClose}
            handleSnackBar={setSnackBar}
          />
        )} */}
        <div className={"merchant-carousel"}>
          {/* ${isExpanded && "d-none"} */}
          {/* <Carousel
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
          > */}
          <div className="row">
            {storeCarouselArray.map((merchant, index) => (
              <div
                key={index}
                className="merch-store-simple col-md-6 col-sm-12"
              >
                <MerchStoreSimple
                  hide={false}
                  // hide={Math.abs(index - currentPosition) > 5}
                  merchant={merchant}
                  // handleMore={handleMore}
                  handleSnackBar={setSnackBar}
                  key={index}
                />
              </div>
            ))}
          </div>
          {/* </Carousel> */}
        </div>
      </div>

      <SnackBar open={snackBar} />

      <style jsx>
        {`
          .merch-store-simple {
            transition: all 0.5s;
            overflow: ;
          }

          .merch-store-simple-minor {
            transition: all 0.5s;
            transform: scale3d(0.6, 0.6, 1);
            opacity: 0.5;
          }

          @media only screen and (max-width: ${Dimen.smBreakpoint}) {
            .merch-store-simple {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default MerchStore;
