import dynamic from "next/dynamic";
import Layout from "components/commons/Layout";
import Leaderboard from "components/home/Leaderboard";
import MapDescription from "components/home/MapDescription";

const Home: React.FC = () => {
  const MapWithNoSSR = dynamic(() => import("components/Map/Map"), {
    ssr: false
  });

  return (
    <Layout title="Home">
      <MapDescription />
      <MapWithNoSSR />
      <Leaderboard />
    </Layout>
  );
};

export default Home;
