import { useContext } from "react";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import Quiz from "./Quiz";
import CrossWord from "./Crossword";
import { ApiContext } from "utils/context/api";
import { getGame, playGame, GET_GAME_URL } from "api/game";
import Spinner from "components/commons/Spinner";
import Alert from "components/commons/Alert";
import { CrosswordData, QuizAPIResponseData, QuizData } from "interfaces/game";

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

const crossData: CrosswordData = {
  crosswordType: "quick",
  entries: [
    {
      id: "1-across",
      number: 1,
      humanNumber: "1",
      clue: "Toy on a string (2-2)",
      direction: "across",
      length: 4,
      group: [],
      separatorLocations: {},
      position: { x: 0, y: 0 },
    },
    {
      id: "2-across",
      number: 2,
      humanNumber: "2",
      clue: "Have a rest (3,4)",
      direction: "across",
      length: 7,
      group: [],
      position: { x: 0, y: 2 },
      separatorLocations: {},
    },
    {
      id: "1-down",
      number: 1,
      humanNumber: "1",
      clue: "Colour (6)",
      direction: "down",
      length: 6,
      position: { x: 0, y: 0 },
      group: [],
      separatorLocations: {},
    },
  ],
  dimensions: { cols: 13, rows: 13 },
};

const CrosswordPage: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const router = useRouter();
  const { id } = router.query;
  // const { data: game, error } = useSWR(
  //   id !== undefined ? `${GET_GAME_URL}${id}` : null,
  //   () => playGame(apiContext.axios, String(id))
  // );
  const { data: game, error } = useSWR(
    id !== undefined ? `${GET_GAME_URL}${id}` : null,
    () => getGame(apiContext.axios, String(id))
  );
  if (error) return <Alert error={error.message} />;
  if (!game) return <Spinner height="200px" />;

  // const quizData: QuizData = game.data.question;
  console.log(game.data);
  // const crosswordData: CrosswordData = game.data.question;
  return (
    <div className="">
      {/* <Quiz gameData={quizData} quizId={String(id)} /> */}
      {/* <CrossWord gameData={crosswordData} quizId={String(id)} /> */}
    </div>
  );
};

export default CrosswordPage;
