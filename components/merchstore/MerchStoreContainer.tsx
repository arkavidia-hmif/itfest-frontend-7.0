import Carousel, { consts } from "react-elastic-carousel";
import MerchStoreItem from "./MerchStoreItem";

const MerchStoreContainer: React.FC = () => {
  const customArrow = ({ type, onClick, isEdge }) => {
    return (
      <>
        <div className="next-btn-container">
          <button onClick={onClick} disabled={isEdge}>
            <img src="/img/merchstore/next_button.png" className="next-icon" />
          </button>
        </div>
        <style jsx>
          {`
            .next-btn-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .next-btn-container button {
              background: none;
              border: none;
            }

            .next-btn-container button:focus {
              outline: none;
            }

            .next-icon {
              -webkit-transform: scaleX(${type === consts.PREV ? -1 : 1});
              width: 2rem;
              border-radius: 50%;
              box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
            }
          `}
        </style>
      </>
    );
  };
  const MerchStoreItems = [
    {
      "item-img": "/img/merchstore/store_item_1.png",
      "item-name": "Tas Totebag Shopee",
      "item-price": "3,000,000",
    },
    {
      "item-img": "/img/merchstore/store_item_2.png",
      "item-name": "Tas Totebag Shopee",
      "item-price": "3,000,000",
    },
    {
      "item-img": "/img/merchstore/store_item_3.png",
      "item-name": "Tas Totebag Shopee",
      "item-price": "3,000,000",
    },
    {
      "item-img": "/img/merchstore/store_item_1.png",
      "item-name": "Tas Totebag Shopee",
      "item-price": "3,000,000",
    },
    {
      "item-img": "/img/merchstore/store_item_2.png",
      "item-name": "Tas Totebag Shopee",
      "item-price": "3,000,000",
    },
    {
      "item-img": "/img/merchstore/store_item_3.png",
      "item-name": "Tas Totebag Shopee",
      "item-price": "3,000,000",
    },
    {
      "item-img": "/img/merchstore/store_item_1.png",
      "item-name": "Tas Totebag Shopee",
      "item-price": "3,000,000",
    },
    {
      "item-img": "/img/merchstore/store_item_2.png",
      "item-name": "Tas Totebag Shopee",
      "item-price": "3,000,000",
    },
    {
      "item-img": "/img/merchstore/store_item_3.png",
      "item-name": "Tas Totebag Shopee",
      "item-price": "3,000,000",
    },
  ];
  return (
    <div>
      <div className="merch-store-container">
        <div className="merch-store-cross-button mt-2 mr-2">
          <button>
            <img src="/img/merchstore/cross_button.png" />
          </button>
        </div>
        <div className="merch-store-top">
          <div className="merch-store-title">
            <img
              src="/img/merchstore/store_logo.png"
              alt="store-logo"
              className="store-logo"
            />
            <div className="store-name ml-5">
              <h2>John Shop</h2>
            </div>
          </div>
          <div className="merch-store-search">
            <input
              className="merch-store-search-bar"
              type="text"
              placeholder="Cari Merchandise"
            />
          </div>
        </div>

        <div className="merch-store-bottom">
          <div className="store-items">
            <h3 className="store-items-title">Top Merch</h3>
            <div className="store-items-carousel mt-4 mb-2">
              <Carousel
                itemsToShow={7}
                renderPagination={() => <></>}
                renderArrow={customArrow}
              >
                {MerchStoreItems.map((item) => (
                  <MerchStoreItem
                    name={item["item-name"]}
                    image={item["item-img"]}
                    price={item["item-price"]}
                  />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="store-items">
            <h3 className="store-items-title">Merch Lain</h3>
            <div className="store-items-carousel mt-4 mb-2">
              <Carousel
                itemsToShow={7}
                renderPagination={() => <></>}
                renderArrow={customArrow}
              >
                {MerchStoreItems.map((item) => (
                  <MerchStoreItem
                    name={item["item-name"]}
                    image={item["item-img"]}
                    price={item["item-price"]}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .merch-store-container {
            background: white;
            border: 1px solid #b7b7b7;
          }

          .merch-store-cross-button {
            display: flex;
            justify-content: flex-end;
          }

          .merch-store-cross-button button {
            background: none;
            border: none;
          }

          .merch-store-cross-button button:focus {
            outline: none;
          }

          .merch-store-cross-button img {
            width: 1rem;
          }

          .merch-store-top {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #b7b7b7;
            padding: 0rem 3.7rem 2.6rem;
          }

          .merch-store-title {
            display: flex;
          }

          .store-logo {
            width: 6.3rem;
          }

          .store-name {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .store-name h2 {
            margin: 0;
            font-size: 3.3rem;
          }

          .merch-store-search {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .merch-store-search-bar {
            box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
            border-radius: 51px;
            border: 0px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 1.5rem;
            line-height: 28px;
            letter-spacing: 0.015em;
            padding: 1rem 5rem 1rem 3.7rem;
          }

          .merch-store-search-bar:focus {
            outline: none;
          }

          .merch-store-bottom {
            padding: 2.6rem 5rem;
          }

          .store-items {
            margin-bottom: 3rem;
          }

          .store-items-title {
            font-size: 2.5rem;
          }
        `}
      </style>
    </div>
  );
};

export default MerchStoreContainer;
