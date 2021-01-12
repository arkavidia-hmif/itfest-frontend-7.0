import MerchStoreCarousel from "./MerchStoreCarousel";
import { MerchStorePlaceholderItems } from "utils/constants/merch-store-placeholder";

const MerchStoreExpanded: React.FC = () => {

  const { merchantName, storeLogo } = {
    merchantName: "John",
    storeLogo: "/img/merchstore/store_logo.png"
  };

  return (
    <div className="w-100 merch-store-container">
      <div className="row">
        <div className="merch-store-cross-button">
          <button>
            <img src="/img/merchstore/cross_button.png" />
          </button>
        </div>
        <div className="col-md-6 merch-title justify-content-center justify-content-md-start pl-0 pl-md-5">
          <img
            src={storeLogo}
            alt={merchantName}
          />
          <h2 className="mb-0 ml-3">{merchantName}&#39;s Shop</h2>
        </div>
        <div className="merch-store-search col-md-6 pr-md-5 align-items-center align-items-md-end">
          <input
            className="merch-store-search-bar mx-3 mr-md-5 my-3"
            type="text"
            placeholder="Cari Merchandise"
          />
        </div>
      </div>

      <hr />

      <div className="px-3">
        <div>
          <h3 className="store-items-title">Top Merch</h3>
          <div className="mt-4 mb-2">
            <MerchStoreCarousel items={MerchStorePlaceholderItems} />
          </div>
        </div>
        <div>
          <h3 className="store-items-title">Merch Lain</h3>
          <div className="mt-4 mb-2">
            <MerchStoreCarousel items={MerchStorePlaceholderItems} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .merch-store-container {
            position: relative;
            background: white;
            border: 1px solid #b7b7b7;
          }

          .merch-store-cross-button {
            position: absolute;
            right: 1rem;
            top: 1rem;
          }

          .merch-store-cross-button button {
            background: none;
            border: none;
          }

          .merch-store-cross-button img {
            width: 1rem;
          }

          .merch-title {
            display: flex;
            flex-direction: row;
            align-items: center;

            margin: 1rem 0;
          }

          .merch-title h2 {
            font-size: 2rem;
          }

          .merch-store-search {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .merch-store-search-bar {
            padding: 1rem;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
            border-radius: 0.25rem;
            border: 0px;

            min-width: 250px;
            max-width: 400px;
          }

          .merch-store-search-bar:focus {
            outline-color: lightgray;
          }

          .store-items-title {
            font-size: 1.5rem;
            padding-left: 1.5rem;
            margin-top: 2.5rem;
          }
        `}
      </style>
    </div >
  );
};

export default MerchStoreExpanded;
