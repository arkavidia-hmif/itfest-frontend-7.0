import LeaderBoard from "../components/LeaderBoard";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import Layout from "components/commons/Layout";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <div className="carouselTest">
        <Carousel>
          <CarouselItem
            url="/competition/arkalogica"
            desc={"ARKALOGICA"}
            backgroundImage={"/img/carousel/bground.png"}
            foregroundImage={"/img/carousel/bg.svg"}
            width={"150px"}
            type="competition"
          />
          <CarouselItem
            url="/competition/capture-the-flag"
            desc={"CAPTURE THE FLAG"}
            backgroundImage={"/img/carousel/bground.png"}
            foregroundImage={"/img/carousel/bg.svg"}
            width={"150px"}
            type="competition"
          />
          <CarouselItem
            url="/competition/competitive-programming"
            desc={"COMPETITIVE PROGRAMMING"}
            backgroundImage={"/img/carousel/bground.png"}
            foregroundImage={"/img/carousel/bg.svg"}
            width={"160px"}
            type="competition"
          />
          <CarouselItem
            url="/competition/datavidia"
            desc={"DATAVIDIA"}
            backgroundImage={"/img/carousel/bground.png"}
            foregroundImage={"/img/carousel/bg.svg"}
            width={"130px"}
            type="competition"
          />
          <CarouselItem
            url="/competition/gamejam"
            desc={"ARKAV GAME JAM"}
            backgroundImage={"/img/carousel/bground.png"}
            foregroundImage={"/img/carousel/bg.svg"}
            width={"150px"}
            type="competition"
          />
        </Carousel>
      </div>
      <LeaderBoard />
      <style jsx>
        {`
          .carouselTest {
            width: 50%;
            margin:0 auto;
          }

          @media (max-width: 1000px) {
            .carouselTest {
              width: 100%;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
