import { useContext } from "react";
import useSWR from "swr";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import { getLiveTenant } from "api/tenant";
import Alert from "components/commons/Alert";
import Spinner from "components/commons/Spinner";
import { ApiContext } from "utils/context/api";
import ColorfulHeader from "components/ColorfulHeader";
import { Theme } from "styles/theme";
import Tenants from "utils/constants/tenants";

const LiveCarousel: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const { data: liveTenant, error } = useSWR("tenant/live", () => getLiveTenant(apiContext.axios));

  if (error) return <Alert error={"Gagal mengambil event yang sedang live"} />;
  if (!liveTenant) return <Spinner />;

  const getCarouselItem = () => {
    if (liveTenant.data.length === 0) {
      return <p style={{ textAlign: "center" }}>Sedang belum ada yang Live nih, silahkan browsing tenant kami pada peta di bawah ini</p>;
    } else {
      return (<Carousel
        contactLink={liveTenant.data.map(el => Tenants[el.slug].contactLink)}
      >
        {liveTenant.data.map(el => {
          const tenantObj = Tenants[el.slug];
          return (
            <CarouselItem
              key={el.id}
              textCompany={tenantObj.name}
              mainText={tenantObj.aboutUs}
              backgroundImage={tenantObj.gallery[0]}
              companyImage={tenantObj.logo}
              liveUrl={el.liveURL}
            />
          );
        })}
      </Carousel>);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }} className="my-3">
        <ColorfulHeader color={Theme.headerColors.plpi} headingLevel={1}>LIVE EVENTS</ColorfulHeader>
      </div>
      {getCarouselItem()}
    </>
  );
};

export default LiveCarousel;