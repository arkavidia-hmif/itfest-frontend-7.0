import dynamic from "next/dynamic";
import Layout from "components/commons/Layout";

const Home: React.FC = () => {
  const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), {
    ssr: false
  });

  return (
    <Layout title="Home">
      {process.env.API_BASE_URL}
      <MapWithNoSSR/>
    </Layout>
  );
};

export default Home;
