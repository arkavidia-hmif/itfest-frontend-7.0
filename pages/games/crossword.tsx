import dynamic from "next/dynamic";
import Layout from "components/commons/Layout";
// import CrossWord from "components/games/Crossword";

const CrossWord = dynamic(() => import("components/games/Crossword"), {
  ssr: false,
});

const MerchStorePage: React.FC = () => {
  return (
    <Layout title="Crossword Puzzle">
      <div className="container my-5">
        <CrossWord />
      </div>
    </Layout>
  );
};

export default MerchStorePage;
