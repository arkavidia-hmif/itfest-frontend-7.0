import Layout from "components/commons/Layout";
// import dynamic from "next/dynamic";
// const Game = dynamic(() => import("components/game"), {
//   ssr: false,
// });

const GamePage: React.FC = () => {
  return (
    <Layout title="Crossword Puzzle">
      <div className="container my-5"></div>
    </Layout>
  );
};

export default GamePage;
