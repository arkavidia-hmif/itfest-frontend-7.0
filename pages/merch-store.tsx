import Layout from "components/commons/Layout";
import MerchStoreExpanded from "components/merchstore/MerchStoreExpanded";

const MerchStorePage: React.FC = () => {
  return (
    <Layout title="Merch Store">
      <div className="container my-5">
        <MerchStoreExpanded />
      </div>
    </Layout>
  );
};

export default MerchStorePage;
