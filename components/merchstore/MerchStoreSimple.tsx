import { useContext } from "react";
import useSWR from "swr";
import MerchStoreMerchSimple from "./MerchStoreMerchSimple";
import { Dimen } from "styles/dimen";
import FilledButton from "components/commons/FilledButton";
import { Tenant } from "interfaces/tenant";
import { ApiContext } from "utils/context/api";
import { getMerchFromTenant, getMerchFromTenantKey } from "api/merch";
import Spinner from "components/commons/Spinner";
import Alert from "components/commons/Alert";

interface Props {
  merchant: Tenant;
  handleMore: (slug: string) => void;
  handleSnackBar: (input: boolean) => void;
}

const MerchStoreSimple: React.FC<Props> = ({ merchant, handleMore, handleSnackBar }) => {
  const apiContext = useContext(ApiContext);
  const { data: itemData, error: itemError } = useSWR(getMerchFromTenantKey(merchant), () => getMerchFromTenant(apiContext.axios, merchant.id));

  return (
    <div className="merch-store-container">
      <div className="d-flex merch-store-container-top">
        <div className="w-100 merch-title">
          <div className="merch-store-top-left">
            <img className="" src={merchant.logo} alt={merchant.name} />
            <h2 className="ml-1 ml-sm-3">{merchant.name}&#39;s Shop</h2>
          </div>
          <div className="merch-store-top-right mt-3 mt-sm-0">
            <FilledButton
              text="More"
              padding=".5rem 2.25rem"
              fontSize="1.25rem"
              onClick={() => handleMore(merchant.slug)}
            />
          </div>
        </div>
      </div>

      <div className="px-0 px-md-3 merch-store-container-bottom d-flex justify-content-center">
        <div className="merch-store-bottom ">
          <div>
            <h3 className="store-items-title">Merch</h3>
            <div className="px-3">
              <Alert error={itemError && "Gagal mengambil item"} />
            </div>
            <div className="my-4">
              {itemData ? <MerchStoreMerchSimple handleSnackBar={handleSnackBar} items={itemData.data} /> : <Spinner />}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .merch-store-container {
            width: 100%;
            padding: 10px;
          }
          .merch-store-container-top {
            background: white;
            border: 1px solid #000000;
            border-radius: 50px;
          }

          .merch-store-container-bottom {
            width: 100%;
          }

          .merch-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 1rem 0;
          }

          .merch-title h2 {
            font-size: 1.65rem;
            margin: 2px 2rem 0 2rem;
          }

          .merch-title img {
            max-width: min(75px, 50vw);
          }

          .merch-title button {
            margin: 0;
            outline: none;
            border: none;
            background: none;
          }

          .merch-title {
            display: flex;
          }

          .merch-store-top-left {
            display: flex;
            align-items: center;
            margin: 0 0 0 1rem;
          }
          .merch-store-top-right {
            margin-right: 1.5rem;
          }

          .merch-store-bottom {
            width: 95%;
            background: #ffffff;
            box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.25);
            border-radius: 0 0 20px 20px;
          }

          .store-items-title {
            font-size: 1.5rem;
            padding-left: 1.5rem;
            margin-top: 2.5rem;
          }

          .merch-store-container-top { 
            border-radius: 1rem;
            width: 100%;
          }
          
          @media (max-width: ${Dimen.mdBreakpoint}) {
            .merch-title h2 {
              font-size: 1.5rem;
              text-align: center;
            }

          }

          @media (max-width: ${Dimen.smBreakpoint}) {
            .merch-title h2 {
              text-align: center;
              font-size: 1.25rem;
              margin: 0;
            }

            .merch-title {
              display: inline;
            }

            .merch-store-top-left {
              display: flex;
              justify-content: center
              margin: 0;
            }

            .merch-store-top-right {
              display: flex;
              justify-content: center;
              margin: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MerchStoreSimple;
