import * as React from "react";
import MerchStoreTop from "components/merchstore/MerchStoreTop";
import Layout from "components/commons/Layout";
import MerchStore from "components/merchstore/MerchStore";
import CheckoutBagProvider from "provider/CheckoutBagProvider";
import { AuthContext } from "utils/context/auth";
import Alert from "components/commons/Alert";
import { Theme } from "styles/theme";
import Tenants from "utils/constants/tenants";

const MerchStoreMain: React.FC = () => {
  const authContext = React.useContext(AuthContext);
  const storeArray = React.useMemo(() => Object.values(Tenants), [Tenants]);
  const [search, setSearch] = React.useState("");
  const [tenantArray, setTenantArray] = React.useState(storeArray);

  const updateSearch = async (search: string) => {
    const filtered = tenantArray.filter(tenant => {
      return tenant.name.toLowerCase().includes(search.toLowerCase());
    });

    if (search !== "") {
      setSearch(search);
      setTenantArray(filtered);
    } else {
      setSearch(search);
      setTenantArray(storeArray);
    }

  };

  const title = "Merch Store";
  return (
    <Layout title={title}>
      <CheckoutBagProvider>
        <div className="container">
          <div className="mb-5" />
          <div className="mt-3 mb-5">
            <MerchStoreTop
              search={search}
              onChange={updateSearch}
            />
          </div>
          <div className="pt-5">
            {authContext.authenticated ? (
              <MerchStore />
            ) :
              (
                <Alert
                  color={Theme.alertColors.greenAlert}
                  error="Harap login terlebih dahulu yaa"
                />
              )}
          </div>
          <div className="mb-5 pb-5" />
        </div>
        <style jsx>{`
          p {
            color: #7446a1;
          }
        `}</style>
      </CheckoutBagProvider>
    </Layout>
  );
};

export default MerchStoreMain;
