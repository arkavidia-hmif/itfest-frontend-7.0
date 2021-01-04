import Layout from "components/commons/Layout";
import MerchStoreContainer from "components/merchstore/MerchStoreContainer";

const Home: React.FC = () => {
  return (
    <Layout title="Merch Store">
      <div className="container">
        <MerchStoreContainer />
      </div>
    </Layout>
  );
};

export default Home;
