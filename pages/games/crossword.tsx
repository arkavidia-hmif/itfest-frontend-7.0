import dynamic from "next/dynamic";
import Layout from "components/commons/Layout";

const CrossWord = dynamic(() => import("components/games/Crossword"), {
  ssr: false,
});

const CrosswordPage: React.FC = () => {
  return (
    <Layout title="Crossword Puzzle">
      <div className="container my-5">
        <CrossWord />
      </div>
    </Layout>
  );
};

export default CrosswordPage;
