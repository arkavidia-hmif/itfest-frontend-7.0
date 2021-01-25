import * as React from "react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";
import GalleryAltContent from "../../../../utils/constants/company-profile/gallery-text";

interface Props {
    main: boolean;
}

const Gallery: React.FC<Props> = ({ main }) => {
  const [items] = React.useState([
    {id: 1, title: "item #1"},
    {id: 2, title: "item #2"},
    {id: 3, title: "item #3"},
    {id: 4, title: "item #4"},
    {id: 5, title: "item #5"}
  ]);
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
  if(main){
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
              {items.map(item => 
                <div key={item.id} className="item-container">
                  {item.title}
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
  }else{
    return (
      <>
        <div className="flex-container">
          <div className="text">
            <h1>Gallery</h1>
            <p>{GalleryAltContent[0].content}</p>
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
              {items.map(item => 
                <div key={item.id} className="item-container">
                  {item.title}
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
};

export default Gallery;