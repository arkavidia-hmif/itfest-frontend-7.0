import MerchStoreCarousel from "./MerchStoreCarousel";
import { MerchStorePlaceholderItems } from "utils/constants/merch-store-placeholder";
import { Dimen } from "styles/dimen";
import { Tenant } from "interfaces/tenant";

interface Props {
  merchant: Tenant;
  handleClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleSnackBar: (input: boolean) => void;
}

const MerchStoreExpanded: React.FC<Props> = ({ merchant, handleClose, handleSnackBar }) => {

  return (
    <div className="w-100 merch-store-container">
      <div className="row">
        <div className="merch-store-cross-button">
          <button onClick={handleClose}>
            <img src="/img/merchstore/cross_button.png" />
          </button>
        </div>
        <div className="col-12 merch-title justify-content-center justify-content-lg-start row">
          <img className="col-md-6 ml-0 ml-md-4 my-0 my-md-3" src={merchant.logo} alt={merchant.name} />
          <h2 className="mb-0 col-md-6 mt-3 mt-md-0">{merchant.name}&#39;s Shop</h2>
        </div>
      </div>

      <hr />

      <div className="px-3">
        <div>
          <h3 className="store-items-title">Merch</h3>
          <div className="my-4">
            <MerchStoreCarousel items={MerchStorePlaceholderItems} handleSnackBar={handleSnackBar} />
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
            z-index: 1;
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

          .merch-title img {
            max-width: min(150px, 50vw);
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

          @media (max-width: ${Dimen.mdBreakpoint}) {
            .merch-title h2 {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MerchStoreExpanded;
