import HomePage from "./home";
import Layout from "components/commons/Layout";
import Leaderboard from "components/home/Leaderboard";
import MapDescription from "components/home/MapDescription";
import Carousel from "components/Carousel";
import CarouselItem from "components/CarouselItem";

const Home: React.FC = () => {

  return (
    <Layout title="Home">
      <HomePage/>
    </Layout>
  );
};

export default Home;
