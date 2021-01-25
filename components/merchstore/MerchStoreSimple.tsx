import { MerchStorePlaceholderItems } from "utils/constants/merch-store-placeholder";
import { Dimen } from "styles/dimen";
import MerchStoreMerchSimple from "./MerchStoreMerchSimple";
import FilledButton from "components/commons/FilledButton";

const MerchStoreSimple: React.FC = () => {
  const { merchantName, storeLogo } = {
    merchantName: "Arkavidia",
    storeLogo: "/img/merchstore/store_logo.png",
  };

  return (
    <div className="merch-store-container">
      <div className="row merch-store-container-top">
        <div className="merch-title row w-100">
          <img className="col-md-3" src={storeLogo} alt={merchantName} />
          <h2 className="mb-0 col-md-6">{merchantName}&#39;s Shop</h2>
          <FilledButton text="Show more" />
        </div>
      </div>

      <div className="px-3 merch-store-container-bottom d-flex">
        <div className="merch-store-bottom justify-content-center">
          <div>
            <h3 className="store-items-title">Top Merch</h3>
            <div className="mt-4 mb-2">
              <MerchStoreMerchSimple items={MerchStorePlaceholderItems} />
            </div>
          </div>
          <div>
            <h3 className="store-items-title">Merch Lain</h3>
            <div className="mt-4 mb-2">
              <MerchStoreMerchSimple items={MerchStorePlaceholderItems} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .merch-store-container {
            width: 50%;
          }
          .merch-store-container-top {
            background: white;
            border: 1px solid #b7b7b7;
            border-radius: 45px;
          }

          .merch-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 1rem 0;
          }

          .merch-title h2 {
            font-size: 1.75rem;
          }

          .merch-title img {
            max-width: min(150px, 50vw);
          }

          .merch-title button {
            margin: 0;
            outline: none;
            border: none;
            background: none;
          }

          .merch-store-bottom {
            width: 30%;
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

export default MerchStoreSimple;
