import { useContext } from "react";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import Layout from "components/commons/Layout";
import { ApiContext } from "utils/context/api";
import { getGame, GET_GAME_URL } from "api/game";
import Alert from "components/commons/Alert";

const CrosswordPage: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const router = useRouter();
  const { id } = router.query;
  const { data: game, error } = useSWR(
    id !== undefined ? `${GET_GAME_URL}${id}` : null,
    () => getGame(apiContext.axios, String(id))
  );

  if (error) return <Alert error={String(error)} />;

  return (
    <Layout title="Crossword Puzzle">
      <div className="container my-5">
        defr
        {game ? "f" : "no"}
      </div>
    </Layout>
  );
};

export default CrosswordPage;
