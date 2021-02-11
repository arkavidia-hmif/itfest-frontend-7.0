import Layout from "components/commons/Layout";
import VerifEmail from "./verif-email/VerifEmail";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <VerifEmail />
      </div>

    </Layout>
  );
};

export default Home;
