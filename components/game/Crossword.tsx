import {
  Dispatch,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import Crossword from "react-crossword";
import FilledButton from "components/commons/FilledButton";
import { ApiContext } from "utils/context/api";
import Success from "components/commons/Success";
import Alert from "components/commons/Alert";
import { submitGame } from "api/game";
import { CrosswordData, QuizResponse } from "interfaces/game";

interface Props {
  gameId: string;
  gameData: CrosswordData;
  setAttempted: Dispatch<SetStateAction<number>>;
  setPrize: Dispatch<SetStateAction<number>>;
}

const CrossWordItem: React.FC<Props> = ({
  gameId,
  gameData,
  setAttempted,
  setPrize,
}) => {
  const data = gameData;
  const apiContext = useContext(ApiContext);
  const [local, setLocal] = useState<QuizResponse>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useLayoutEffect(() => {
    const className = "crossword__controls ";
    const items = Array.from(
      document.getElementsByClassName(
        className
      ) as HTMLCollectionOf<HTMLElement>
    );
    if (items) {
      for (const item of items) {
        item.style.display = "none";
      }
    }
    const none = ".crossword__hidden-input";
    const noneItems = Array.from(
      document.getElementsByClassName(none) as HTMLCollectionOf<HTMLElement>
    );
    if (noneItems) {
      for (const item of noneItems) {
        item.style.outline = "none";
      }
    }
  });

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const totalInitLength = data.entries
        .map((datum) => datum.length)
        .reduce((a, b) => a + b);
      const arrayedLocal = Object.values(local);
      const totalLocalLength =
        arrayedLocal.length !== 0
          ? arrayedLocal?.map((val) => val.length).reduce((a, b) => a + b)
          : 0;

      if (totalInitLength > totalLocalLength) {
        throw new Error("Fill all board first");
      }
      const res = await submitGame(apiContext.axios, gameId, local);
      if (res?.data) {
        setSuccess(true);
        setPrize(res?.data?.prize);
        setAttempted(2);
        setError(null);
      }
    } catch (e) {
      setSuccess(false);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGrid = (grid: string[][]) => {
    const temp: { [key: string]: string } = {};
    for (const datum of data?.entries) {
      const entry = datum.direction;
      const x = datum.position.x;
      const y = datum.position.y;
      const len = datum.length;
      const word = [];
      if (entry === "across") {
        for (let j = x; j < x + len; j++) {
          word.push(grid[j][y]);
        }
      }
      if (entry === "down") {
        for (let i = y; i < y + len; i++) {
          word.push(grid[x][i]);
        }
      }
      const finalWord = word.join("");
      temp[datum.id] = finalWord;
    }
    setLocal(temp);
  };

  return (
    <>
      <div className="mb-5">
        {error && <Alert error={error} />}
        {success && <Success message="Successfully submitted" />}
        <div className="mt-3">
          <Crossword
            data={data}
            saveGrid={(_: undefined, grid: string[][]) => handleGrid(grid)}
          />
        </div>
        <div className="clear">
          <FilledButton
            text="Submit"
            padding=".75rem 1.5rem"
            onClick={handleSubmit}
            loading={loading}
          />
        </div>
      </div>

      <style jsx>{`
        .crossword * {
          font-family: Roboto !important;
        }
        .clear {
          margin: 1rem 0;
          clear: both;
          float: left;
        }
      `}</style>
    </>
  );
};

export default CrossWordItem;
