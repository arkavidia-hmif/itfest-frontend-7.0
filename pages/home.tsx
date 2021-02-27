import dynamic from "next/dynamic";
import Leaderboard from "components/LeaderBoard";
import MapDescription from "components/home/MapDescription";
import LiveCarousel from "components/home/LiveCarousel";
import SponsoredBy from "components/SponsoredBy";

const Home: React.FC = () => {
  const MapWithNoSSR = dynamic(() => import("components/map/Map"), {
    ssr: false,
  });

  return (
    <div className="container">
      <LiveCarousel />
      <MapDescription />
      <MapWithNoSSR />
      <SponsoredBy/>
      <Leaderboard />
    </div>
  );
};

export default Home;
