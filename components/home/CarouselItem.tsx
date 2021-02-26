import React from "react";
import ColorfulHeader from "components/ColorfulHeader";
import { Dimen } from "styles/dimen";
import { Theme } from "styles/theme";

interface CarouselItemProps {
  backgroundImage?: string;
  companyImage?: string;
  textCompany: string;
  mainText: string;
  liveUrl: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  backgroundImage,
  companyImage,
  textCompany,
  mainText,
  liveUrl
}) => {
  const background = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const company = {
    backgroundImage: `url(${companyImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
  };

  return (
    <div className="item-carousel" style={background}>
      <div className="row py-3 mx-3 content-container">
        <div className="col-md-5 col-lg-4 company-detail-container">
          <img className="company-logo mr-3" style={company} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
          <div >
            <span className="header-wrapper">
              <ColorfulHeader color={Theme.headerColors.pipl} headingLevel={6} size="1em">{textCompany}</ColorfulHeader>
            </span>
            <a href={liveUrl} target="_blank" rel="noreferrer"><p className="live-link"><b>Watch Live</b></p></a>
          </div>
        </div>
        <div className="company-detail d-none d-md-flex col-md-7 col-lg-8">
          <p>{mainText.substr(0, 150)}...</p>
        </div>
      </div>

      <style jsx>
        {`
          * {
            box-sizing: border-box;
          }

          .item-carousel {
            width: 100%;
            height: 300px;
            border-radius: 1rem;
            position: relative;
            overflow: hidden;
            background-size: cover;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }

          .content-container {
            margin-bottom:1rem;
            background-color: white;
            border-radius: 1rem;
          }

          .company-detail-container {
            display: flex;
            flex-direction: row;
          }

          .live-link {
            font-size: 1rem;
            color: #FE5982;
          }

          .company-logo {
            width: 4rem;
            height: 4rem;
          }

          .header-wrapper {
            font-size: 3rem;
          }

          .company-detail {
            font-weight: bold;
            color: #8f75b7;

            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          @media (max-width: ${Dimen.lgBreakpoint}) { 
            .company-detail {
              font-size: 0.8rem;
            }
          }

          @media (max-width: ${Dimen.smBreakpoint}) { 
            .header-wrapper {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CarouselItem;
