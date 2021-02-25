import * as React from "react";
import MerchStore from "components/merchstore/MerchStore";
import MerchStoreTop from "components/merchstore/MerchStoreTop";
import Layout from "components/commons/Layout";
import CheckoutBagProvider from "provider/CheckoutBagProvider";
import { AuthContext } from "utils/context/auth";
import Alert from "components/commons/Alert";
import { Theme } from "styles/theme";


const MerchStoreMain: React.FC = () => {
  const authContext = React.useContext(AuthContext);

  const title = "Merch Store";
  return (
    <Layout title={title}>
      <CheckoutBagProvider>
        <div className="container">
          <div className="mb-5" />
          <div className="mt-3 mb-5">
            <MerchStoreTop />
          </div>
          <div className="pt-5">
            {authContext.authenticated ? <MerchStore /> : <Alert color={Theme.alertColors.greenAlert} error="Harap login terlebih dahulu yaa" />}
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
