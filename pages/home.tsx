import dynamic from "next/dynamic";
import Leaderboard from "components/LeaderBoard";
import MapDescription from "components/home/MapDescription";
import Carousel from "components/Carousel";
import CarouselItem from "components/CarouselItem";

const Home: React.FC = () => {
  const MapWithNoSSR = dynamic(() => import("components/map/Map"), {
    ssr: false,
  });

  return (
    <div className="container">
      <Carousel>
        <CarouselItem
          textCompany="Dinosaurus"
          mainText="Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer"
          backgroundImage="img/carousel/bground.png"
          companyImage="img/carousel/dino.svg"
          slug="dino"
        />
        <CarouselItem
          textCompany="Dinosaurus 2"
          mainText="Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer"
          backgroundImage="img/carousel/bground.png"
          companyImage="img/carousel/dino.svg"
          slug="dino"
        />
      </Carousel>
      <MapDescription />
      <MapWithNoSSR />
      <Leaderboard />
    </div>
  );
};

export default Home;
