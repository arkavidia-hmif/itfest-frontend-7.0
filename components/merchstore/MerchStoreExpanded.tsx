import MerchStoreCarousel from "./MerchStoreCarousel";
import { Dimen } from "styles/dimen";

const MerchStoreExpanded: React.FC = () => {
  return (
    <div className="w-100">
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
            <div className="store-name">
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
              <MerchStoreCarousel />
            </div>
          </div>
          <div className="store-items">
            <h3 className="store-items-title">Merch Lain</h3>
            <div className="store-items-carousel mt-4 mb-2">
              <MerchStoreCarousel />
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
            padding: 0rem 1.7rem 1.6rem;
          }

          .merch-store-title {
            display: flex;
          }

          .store-logo {
            width: 4.5rem;
            height: 4.5rem;
          }

          .store-name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 5rem;
          }

          .store-name h2 {
            margin: 0;
            font-size: 2.75rem;
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
            padding: 2.6rem 2.5rem 0;
          }

          .store-items {
            margin-bottom: 3rem;
          }

          .store-items-title {
            font-size: 2.5rem;
          }

          @media only screen and (max-width: ${Dimen.lgBreakpoint}) {
            .merch-store-top {
              display: block;
            }
            .merch-store-search {
              padding-top: 1.5rem;
            }
          }

          @media only screen and (max-width: ${Dimen.xsBreakpoint}) {
            .merch-store-title {
              padding: 0;
            }

            .merch-store-top {
              padding: 1.5rem 1rem;
            }

            .merch-store-bottom {
              padding: 1.5rem 1rem;
            }

            .merch-store-search {
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
          }

          @media only screen and (max-width: ${Dimen.mdBreakpoint}) {
            .merch-store-search-bar {
              font-size: 1.25rem;
              padding: 0.5rem 2rem 0.5rem 2.7rem;
            }

            .store-name {
              margin-left: 0.5rem;
            }

            .store-logo {
              width: 5rem;
              height: 5rem;
            }

            .store-name h2 {
              font-size: 3rem;
            }

            .store-items-title {
              font-size: 2.3rem;
            }
          }

          @media only screen and (max-width: 400px) {
            .store-name h2 {
              font-size: 2rem;
            }

            .store-items-title {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MerchStoreExpanded;
