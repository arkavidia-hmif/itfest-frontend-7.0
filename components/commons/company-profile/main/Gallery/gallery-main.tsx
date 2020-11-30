import * as React from "react";
import Carousel from "react-elastic-carousel";

const GalleryMain: React.FC = () => {
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
            padding: 2%;
        }

        .item-container {
            background: white;
            width: 90%;
            height: 18rem;
        }

        @media only screen and (max-width: 1000px) {
            .item-container {
                background: white;
                width: 90%;
                height: 18rem;
            }
        }
      `}</style>
    </>
  );
};

export default GalleryMain;