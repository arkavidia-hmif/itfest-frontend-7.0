import * as React from "react";
import Carousel from "react-elastic-carousel";
import GalleryAltContent from "../../../../../utils/context/constants/company-profile/gallery-text";

const GalleryAlt: React.FC = () => {
  const [items] = React.useState([
    {id: 1, title: "item #1"},
    {id: 2, title: "item #2"},
    {id: 3, title: "item #3"},
    {id: 4, title: "item #4"},
    {id: 5, title: "item #5"}
  ]);

  // const myArrow = ({ type, onClick, isEdge }) => {
  //   const pointer = type === consts.PREV ? "<" : ">";
  //   return (
  //     <button onClick={onClick} disabled={isEdge}>
  //       {pointer}
  //     </button>
  //   );
  // };
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
            margin-left: 15%;
            margin-right: 15%;
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
                height: 20rem;
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
};

export default GalleryAlt;