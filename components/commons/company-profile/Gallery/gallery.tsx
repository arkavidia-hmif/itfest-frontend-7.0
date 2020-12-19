import * as React from "react";
import Carousel from "react-elastic-carousel";
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
              }}>
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
              width: 100%;
              height: 20rem;
              display: flex;
              align-items: center;
          }
  
          .item-container {
              background: white;
              width: 90%;
              height: 15rem;
          }
  
          @media only screen and (max-width: 1000px) {
                .carousel-background {
                    height: 12rem;
                }

                .item-container {
                    background: white;
                    width: 90%;
                    height: 10rem;
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
              }}>
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

        @media only screen and (max-width: 1000px) {
            .flex-container {
                display: flex;
                flex-direction: column-reverse;
                margin-top: 8%;
            }

            .carousel-background {
                background-color: white;
                width: 100%;
                height: 14rem;
                display: flex;
                align-items: center;
                padding: 2%;
                box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
                border-radius: 1rem;
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