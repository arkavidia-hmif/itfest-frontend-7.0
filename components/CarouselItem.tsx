import React from "react";
import { Theme } from "styles/theme";

interface CarouselItemProps {
  backgroundImage?: string;
  companyImage?: string;
  textCompany: string;
  mainText: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  backgroundImage,
  companyImage,
  textCompany,
  mainText
}) => {
  const background = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const company = {
    backgroundImage: `url(${companyImage})`,
    width: "4rem",
    height: "4rem",
    marginTop: "1rem"
  };

  return (
    <div className="item-carousel" style={background}>
      <div className="content-wrapper">
        <img className="dino-img" style={company} />
        <div className="dino-text">
          <p className="dino-txt-large">{textCompany}</p>
          <a><p className="dino-txt-normal">Find out more</p></a>
        </div>
        <div className="dino-paragraph">
          <p>{mainText}</p>
        </div>
      </div>

      <style jsx>
        {`
          * {
            box-sizing: border-box;
          }

          .item-carousel {
            position: absolute;
            width: 100%;
            height: 300px;
            margin: 0;
            padding: 0;
            border-radius: 1rem;
            position: relative;
            overflow: hidden;
            background-size: cover;
          }

          .content-wrapper {
            width: 95%;
            display: flex;
            flex-direction: row;
            background-color: white;
            margin: 0 auto;
            height: 100px;
            position: relative;
            margin-top: 11.5rem;
            bottom: 0;
            border-radius: 1rem;
            padding: 0 1.5rem 0 1.5rem;
          }

          .dino-text {
            width: 30%;
            padding-left: 2.5rem;
          }

          .dino-paragraph {
            width: 60%;
            text-align: center;
            vertical-align: middle;
            padding-top: 1rem;
          }
          
          .dino-paragraph p {
            font-size: 0.8rem;
          }

          .dino-text, .dino-paragraph {
            height: 4rem;
            align-self: center;
          }

          .dino-text p {
            background-image: ${Theme.headerColors.pipl};
          }

          .dino-paragraph p {
            background-image: ${Theme.headerColors.plbl};
          }

          .dino-text p, .dino-paragraph p {
            background-size: 100%;
            background-clip: text;
            -webkit-background-clip: text;
            text-fill-color: transparent;
            -webkit-text-fill-color: transparent;
            font-family: Viga;
          }

          .dino-txt-large {
            font-size: 2rem;
            font-weight: bold;
          }

          a {
            cursor: pointer;
            text-decoration: none;
          }

          p {
            display: block;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0;
            margin-inline-end: 0;
          }

          @media (max-width: 1000px) {
            .dino-txt-normal {
              font-size: 0.6rem;
            }
  
            .dino-paragraph p {
              font-size: 0.6rem;
            }

            .dino-text {
              padding: 0.8rem 0 0 1rem;
            }

            .dino-txt-large {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CarouselItem;
