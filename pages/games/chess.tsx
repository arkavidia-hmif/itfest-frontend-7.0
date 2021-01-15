import Layout from "components/commons/Layout";
import Chess from "components/games/Chess";

const MerchStorePage: React.FC = () => {
  return (
    <Layout title="Chess">
      <div className="container my-5">
        <Chess />
      </div>
    </Layout>
  );
};

export default MerchStorePage;
