import * as React from "react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";

interface Props {
  items: string[];
  galleryText: string;
}

const GalleryAlt : React.FC<Props> = ({items, galleryText}) => {
  const carouselArrowAlt =  ({ type, onClick }: RenderArrowProps) => {
    const pointerLeft = type === "PREV" ? <img src="/img/company-profile/left-arrow.png" style={{width: "1.6rem"}}/> : null;
    const pointerRight = type === "PREV" ? null : <img src="/img/company-profile/right-arrow.png" style={{width: "1.6rem"}}/>;
    return (
      <div onClick={onClick} className="arrow-flex">
        <div className="left-arrow">
          {pointerLeft}
        </div>
        <div className="right-arrow">
          {pointerRight}
        </div>
        <style jsx>{`
          .arrow-flex {
              display: flex; 
              justify-content: flex-end; 
              align-items: flex-end;
              position: relative;
              z-index: 3;
              margin-bottom: 5%;
          }

          .left-arrow {
              z-index: 3;
              position: absolute;
              border-radius: 100%; 
              padding-left: 0.25%; 
              padding-right: "0.25%"; 
              left: 48%;
              transform: translate(14.5rem,0); 
          }

          .left-arrow:hover {
              cursor: pointer;
          }
  
          .right-arrow {
              z-index: 3;
              position: absolute;
              border-radius: 100%; 
              padding-left: 0.25%; 
              padding-right: "0.25%"; 
              right: 31.5%; 
              margin-right: -1%;
              transform: translate(-14.5rem,0);
          }

          .right-arrow:hover {
              cursor: pointer;
          }

          @media only screen and (max-width: 1200px) {
              .left-arrow {
                  transform: translate(10rem,0);
                  left: 0;
              }
      
              .right-arrow {
                  transform: translate(-10rem,0);
                  right: 0;
              }
          }
  
          @media only screen and (max-width: 960px) {
              .left-arrow {
                  left: 0; 
                  margin-left: -2%;
                  transform: translate(13rem,0);
              }
      
              .right-arrow {
                  right: 0; 
                  margin-right: -2%;
                  transform: translate(-13rem,0);
              }
          }

          @media only screen and (max-width: 720px) {
              .left-arrow {
                  left: 0; 
                  margin-left: -2%;
                  transform: translate(10rem,0);
              }
      
              .right-arrow {
                  right: 0; 
                  margin-right: -2%;
                  transform: translate(-10rem,0);
              }
          }

          @media only screen and (max-width: 576px) {
              .left-arrow {
                  left: 0; 
                  margin-left: -2%;
                  transform: translate(8rem,0);
              }
      
              .right-arrow {
                  right: 0; 
                  margin-right: -2%;
                  transform: translate(-8rem,0);
              }
          }
        `}</style>  
      </div>
    );
  };

  return (
    <>
      <div className="flex-container">
        <div className="text">
          <h1>Gallery</h1>
          <p>{galleryText}</p>
        </div>
        <div className="carousel-background">
          <Carousel 
            itemPadding={[10, 50]}
            renderPagination={({ pages }) => {
              return (
                <>
                  {pages.map(() => {
                    return (
                      null
                    );
                  })}
                </>
              );
            }}
            renderArrow={carouselArrowAlt}
          >
            {items.map((item, index) => 
              <div key={index} className="item-container">
                <img src={item} alt="Foto Gallery"/>
              </div>
            )}
          </Carousel>
        </div>
      </div>
      <style jsx>{`
      .flex-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 5%;
      }

      .text {
          margin-right: 5%;
          grid-column-start: 1;
          grid-column-end: 3;
      }

      .carousel-background {
          grid-column-start: 3;
          grid-column-end: 5;
          background-color: white;
          width: 100%;
          height: 20rem;
          display: flex;
          align-items: center;
          padding: 2%;
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
          border-radius: 1.3rem;
      }

      .item-container {
          grid-column-start: 3;
          grid-column-end: 5;
          background-color: white;
          width: 100%;
          height: 20rem;
          display: flex;
          align-items: center;
          justify-content: center;
      }

      @media only screen and (max-width: 1000px) {
          .flex-container {
              display: flex;
              flex-direction: column-reverse;
              margin-top: 8%;
          }

          .carousel-background {
              width: 100%;
              height: 14rem;
              display: flex;
              align-items: center;
              padding: 2%;
          }

          .item-container {
              background-color: transparent;
              width: 100%;
              height: 14rem;
              display: flex;
              align-items: center;
              justify-content: center;
          }

          .text {
              margin-top: 3%;
          }
      }
    `}</style>
    </>
  );
}

export default GalleryAlt;