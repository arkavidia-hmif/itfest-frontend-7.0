import { useContext } from "react";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import Quiz from "./Quiz";
// import Spinner from "components/commons/Spinner";
import { ApiContext } from "utils/context/api";
import { getGame, playGame, GET_GAME_URL } from "api/game";
import Alert from "components/commons/Alert";
import { QuizData } from "interfaces/game";

const CrosswordPage: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const router = useRouter();
  const { id } = router.query;
  //   const { data: game, error } = useSWR(
  //     id !== undefined ? `${GET_GAME_URL}${id}` : null,
  //     () => playGame(apiContext.axios, String(id))
  //   );
  const { data: game, error } = useSWR(
    id !== undefined ? `${GET_GAME_URL}${id}` : null,
    () => getGame(apiContext.axios, String(id))
  );
  if (error) return <Alert error={error.message} />;
  // if (!game) return <Spinner height="200px" />;

  const data: QuizData = {
    ITB: {
      text: "ITB?",
      choice: ["institute", "teknologi", "bandung"],
    },
    NTB: {
      text: "ITB?",
      choice: ["institute", "teknologi", "bandung"],
    },
    BTB: {
      text: "ITB?",
      choice: ["institute", "teknologi", "bandung"],
    },
  };

  return (
    <div className="">
      <Quiz gameData={data} quizId={String(id)} />
    </div>
  );
};

export default CrosswordPage;
