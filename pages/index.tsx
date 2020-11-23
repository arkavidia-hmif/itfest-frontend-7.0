import Layout from "components/commons/Layout";
import MerchStoreContainer from "components/merchstore/MerchStoreContainer";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <div className="container-merch mt-5">
        <MerchStoreContainer />
      </div>
      <style jsx>
        {`
          .container-merch {
            margin: 6rem;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
