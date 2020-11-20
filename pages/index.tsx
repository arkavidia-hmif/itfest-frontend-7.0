import LeaderBoard from "../components/LeaderBoard";
import Layout from "components/commons/Layout";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <LeaderBoard />
    </Layout>
  );
};

export default Home;
