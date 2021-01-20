import HomePage from "./home";
import Layout from "components/commons/Layout";
import Leaderboard from "components/home/Leaderboard";
import MapDescription from "components/home/MapDescription";

const Home: React.FC = () => {

  return (
    <Layout title="Home">
      <HomePage/>
    </Layout>
  );
};

export default Home;
