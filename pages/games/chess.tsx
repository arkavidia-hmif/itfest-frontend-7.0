import dynamic from "next/dynamic";
import Layout from "components/commons/Layout";

const Chess = dynamic(() => import("components/games/Chess"), {
  ssr: false,
});

const ChessPage: React.FC = () => {
  return (
    <Layout title="Chess">
      <div className="container my-5">
        <Chess />
      </div>
    </Layout>
  );
};

export default ChessPage;
