import * as React from "react";
import MerchStore from "components/merchstore/MerchStore";
import MerchStoreTop from "components/merchstore/MerchStoreTop";
import Layout from "components/commons/Layout";


const MerchStoreMain: React.FC = () => {
  const title = "Merch Store";
  return (
    <Layout title={title}>
      <div className="container">
        <div className="mb-5" />
        <div className="mt-3 mb-5">
          <MerchStoreTop />
        </div>
        <div className="pt-5">
          <MerchStore />
        </div>
        <div className="mb-5 pb-5" />
      </div>
      <style jsx>{`
        p { 
          color: #7446a1;
        }  
      `}</style>
    </Layout>

  );
};

export default MerchStoreMain;
