import { Dispatch, SetStateAction, useContext } from "react";
import useSWR from "swr";
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

interface Props {
  setDone: Dispatch<SetStateAction<boolean>>;
  gameId: number;
}

const Game: React.FC<Props> = ({ setDone, gameId }) => {
  const apiContext = useContext(ApiContext);
  const { data: game, error } = useSWR(
    gameId !== undefined ? `${GET_GAME_URL}${gameId}` : null,
    () => getGame(apiContext.axios, String(gameId))
  );
  if (error) return <Alert error={error.message} />;
  if (!game) return <Spinner height="200px" />;

  return (
    <div className="">
      {isQuiz(game?.data) && game?.data.type === 1 && (
        <Quiz
          gameData={game?.data.question as QuizData}
          gameId={String(gameId)}
          setDone={setDone}
        />
      )}
      {!isQuiz(game?.data) && game?.data.type === 2 && (
        <CrossWord
          gameData={game?.data.problem as CrosswordData}
          gameId={String(gameId)}
          setDone={setDone}
        />
      )}
    </div>
  );
};

export default Game;
