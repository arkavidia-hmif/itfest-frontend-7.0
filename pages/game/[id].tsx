import dynamic from "next/dynamic";
import Layout from "components/commons/Layout";
const Game = dynamic(() => import("components/game"), {
  ssr: false,
});

const GamePage: React.FC = () => {
  return (
    <Layout title="Crossword Puzzle">
      <div className="container my-5">
        <Game />
      </div>
    </Layout>
  );
};

export default GamePage;
