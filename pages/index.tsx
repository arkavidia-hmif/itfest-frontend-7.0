// import dynamic from "next/dynamic";
import Layout from "components/commons/Layout";

const Home: React.FC = () => {
  // const MapWithNoSSR = dynamic(() => import("components/Map/Map"), {
  //   ssr: false,
  // });

  return (
    <Layout title="Home">
      <div className="container"></div>
    </Layout>
  );
};

export default Home;
