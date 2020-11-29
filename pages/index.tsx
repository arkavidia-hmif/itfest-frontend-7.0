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
            textCompany={"Dino"}
            mainText={"Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer"}
            backgroundImage={"/img/carousel/bground.png"}
            companyImage={"/img/carousel/dino.svg"}
          />
          <CarouselItem
            textCompany={"Wiella"}
            mainText={"Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer"}
            backgroundImage={"/img/carousel/bground.png"}
            companyImage={"/img/carousel/dino.svg"}
          />
          <CarouselItem
            textCompany={"Afif"}
            mainText={"Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer"}
            backgroundImage={"/img/carousel/bground.png"}
            companyImage={"/img/carousel/dino.svg"}
          />
          <CarouselItem
            textCompany={"Romi"}
            mainText={"Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer"}
            backgroundImage={"/img/carousel/bground.png"}
            companyImage={"/img/carousel/dino.svg"}
          />
          <CarouselItem
            textCompany={"Akromi"}
            mainText={"Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer Lorem ipsum dolor sit amer"}
            backgroundImage={"/img/carousel/bground.png"}
            companyImage={"/img/carousel/dino.svg"}
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
