import dynamic from "next/dynamic";
import Layout from "components/commons/Layout";

const Home: React.FC = () => {
  const MapWithNoSSR = dynamic(() => import("components/Map/Map"), {
    ssr: false
  });

  return (
    <Layout title="Home">
      <MapWithNoSSR />
    </Layout>
  );
};

export default Home;
