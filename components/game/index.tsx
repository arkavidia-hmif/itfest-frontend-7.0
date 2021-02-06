import { useContext } from "react";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import Quiz from "./Quiz";
import CrossWord from "./Crossword";
import { ApiContext } from "utils/context/api";
import { getGame, GET_GAME_URL } from "api/game";
import Spinner from "components/commons/Spinner";
import Alert from "components/commons/Alert";
import {
  CrosswordAPIResponseData,
  CrosswordData,
  QuizAPIResponseData,
  QuizData,
} from "interfaces/game";

const isQuiz = (
  tbd: QuizAPIResponseData | CrosswordAPIResponseData | undefined
): tbd is QuizAPIResponseData => {
  if ((tbd as QuizAPIResponseData)?.type === 1) return true;
  return false;
};

const CrosswordPage: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const router = useRouter();
  const { id } = router.query;
  const { data: game, error } = useSWR(
    id !== undefined ? `${GET_GAME_URL}${id}` : null,
    () => getGame(apiContext.axios, String(id))
  );
  if (error) return <Alert error={error.message} />;
  if (!game) return <Spinner height="200px" />;

  return (
    <div className="">
      {isQuiz(game?.data) && game?.data.type === 1 && (
        <Quiz gameData={game?.data.question as QuizData} quizId={String(id)} />
      )}
      {!isQuiz(game?.data) && game?.data.type === 2 && (
        <CrossWord
          gameData={game?.data.problem as CrosswordData}
          quizId={String(id)}
        />
      )}
    </div>
  );
};

export default CrosswordPage;
