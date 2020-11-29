import React from "react";
import { Theme } from "styles/theme";

interface CarouselItemProps {
  backgroundImage?: string;
  width: string;
  foregroundImage?: string;
  desc: string;
  type: "event" | "competition";
  url: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  backgroundImage,
  width,
  foregroundImage,
  desc,
  type,
  url,
}) => {
  const background = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const competitionStyle = {
    img: {
      width: `${width}`,
      left: "30px",
    },
    infoBox: {
      right: "0px",
      padding: "0.5rem 0.5rem 0.5rem 1rem",
      marginLeft: "85px",
    },
    title: {
      color: "#623FA2",
      textAlign: "right" as const,
    },
    gradient: {
      transform: "rotate(0deg)",
      backgroundImage: "linear-gradient(90.9deg, #EBE3FF 15.28%, rgba(255, 255, 255, 0) 99.31%",
    },
    infoBtn: {
      textAlign: "right" as const,
    },
  };

  const eventStyle = {
    gradient: {
      transform: "rotate(180deg)",
      backgroundImage: "linear-gradient(90.9deg, #FFD2E1 15.28%, rgba(255, 255, 255, 0) 99.31%)",
    },
    img: {
      width: `${width}`,
      right: "30px",
    },
    infoBox: {
      left: "0px",
      padding: "0.5rem 1rem 0.5rem 0.5rem",
      marginRight: "85px",
    },
    title: {
      color: "#B41A83",
      textAlign: "left" as const,
    },
    infoBtn: {
      textAlign: "left" as const,
    },
  };

  const choosenStyle = type === "event" ? eventStyle : competitionStyle;

  return (
    <div className="item-carousel" style={background}>
      <div className="content-wrapper">
        <img className="dino-img" src="/img/carousel/dino.svg" />
        <div className="dino-text">
          <p className="dino-txt-large">Dino</p>
          <a><p className="dino-txt-normal">Find out more</p></a>
        </div>
        <div className="dino-paragraph">
          <p>Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer</p>
          <p>Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer</p>
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
            background-color: white;
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

          .dino-img {
            width: 4rem;
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
            // border: 1px solid red;
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
              font-size: 0.5rem;
            }
  
            .dino-paragraph p {
              font-size: 0.5rem;
            }

            .dino-text {
              padding: 1.2rem 0 0 1rem;
            }

            .dino-txt-large {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CarouselItem;
