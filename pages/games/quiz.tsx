import dynamic from "next/dynamic";
import Layout from "components/commons/Layout";

const Quiz = dynamic(() => import("components/games/Quiz"), {
  ssr: false,
});

const ChessPage: React.FC = () => {
  return (
    <Layout title="Chess">
      <div className="container my-5">
        <Quiz />
      </div>
    </Layout>
  );
};

export default ChessPage;
