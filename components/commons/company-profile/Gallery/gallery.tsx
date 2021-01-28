import * as React from "react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";

interface Props {
  items: string[];
}

const Gallery: React.FC<Props> = ({items}) => {
  const carouselArrowMain = ({ type, onClick }: RenderArrowProps) => {
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
              justify-content: center; 
              align-items: flex-end;
          }

          .left-arrow {
              z-index: 3;
              position: absolute;
              margin-bottom: 1%; 
              border-radius: 100%; 
              padding-left: 0.25%; 
              padding-right: "0.25%"; 
              left: 47.5%; 
          }

          .left-arrow:hover {
              cursor: pointer;
          }
  
          .right-arrow {
              z-index: 3;
              position: absolute;
              margin-bottom: 1%; 
              border-radius: 100%; 
              padding-left: 0.25%; 
              padding-right: "0.25%"; 
              right: 47.5%; 
          }

          .right-arrow:hover {
              cursor: pointer;
          }
  
          @media only screen and (max-width: 1200px) {
              .left-arrow {
                  left: 48%; 
                  margin-left: -2%;
              }
      
              .right-arrow {
                  right: 48%; 
                  margin-right: -2%;
              }
          }

          @media only screen and (max-width: 992px) {
              .left-arrow {
                  left: 47%; 
                  margin-left: -2%;
              }
      
              .right-arrow {
                  right: 47%; 
                  margin-right: -2%;
              }
          }

          @media only screen and (max-width: 768px) {
              .left-arrow {
                  left: 46%; 
                  margin-left: -2%;
              }
      
              .right-arrow {
                  right: 46%; 
                  margin-right: -2%;
              }
          }

          @media only screen and (max-width: 576px) {
              .left-arrow {
                  left: 43.5%; 
                  margin-left: -2%;
              }
      
              .right-arrow {
                  right: 43.5%; 
                  margin-right: -2%;
              }
          }
        `}</style>  
      </div>
    );
  };

  return (
    <>
      <div className="flex-container">
        <div>
          <h1>Gallery</h1>
        </div>
        <div className="carousel-background">
          <Carousel 
            itemsToShow={3}
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
            renderArrow={carouselArrowMain}
          >
            {items.map((item, index) => 
              <div key={index} className="item-container">
                <img src={item} alt="Foto"/>
              </div>
            )}
          </Carousel>
        </div>
      </div>
      <style jsx>{`
        .flex-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 8%;
        }

        .carousel-background {
            width: 110%;
            height: 20rem;
            display: flex;
            align-items: center;
        }

        .item-container {
            background: white;
            width: 95%;
            height: 15rem;
        }

        @media only screen and (max-width: 1000px) {
              .carousel-background {
                  height: 10rem;
              }

              .item-container {
                  background: white;
                  width: 90%;
                  height: 8rem;
              }
        }
      `}</style>
    </>
  );
};

export default Gallery;