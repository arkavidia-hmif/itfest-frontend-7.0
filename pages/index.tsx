import Layout from "components/commons/Layout";

const Home: React.FC = () => {
  return <Layout title="Home">{process.env.API_BASE_URL}</Layout>;
};

export default Home;
