import Layout from "components/commons/Layout";
import LeaderBoard from "../components/LeaderBoard";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <LeaderBoard />
    </Layout>
  );
};

export default Home;
