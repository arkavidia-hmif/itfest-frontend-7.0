import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import Success from "components/commons/Success";
import Alert from "components/commons/Alert";
import { QuizData, QuizResponse } from "interfaces/game";
import FilledButton from "components/commons/FilledButton";
import { submitGame } from "api/game";
import { ApiContext } from "utils/context/api";

interface Props {
  gameId: string;
  gameData: QuizData;
  setAttempted: Dispatch<SetStateAction<number>>;
  setPrize: Dispatch<SetStateAction<number>>;
}

const Quiz: React.FC<Props> = ({
  gameId,
  gameData,
  setAttempted,
  setPrize,
}) => {
  const apiContext = useContext(ApiContext);
  const [submission, setSubmission] = useState<QuizResponse>({});

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (answer: string | null, question: string) =>
    setSubmission((answers) => {
      return {
        ...answers,
        ...JSON.parse(
          `{${JSON.stringify(question)}: ${JSON.stringify(answer)}}`
        ),
      };
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (Object?.keys(submission)?.length < Object?.keys(gameData)?.length) {
        throw new Error("Game belum terisi semua");
      }
      const res = await submitGame(apiContext.axios, gameId, submission);
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

  return (
    <>
      <div className="w-100 merch-store-container">
        {error && <Alert error={error} />}
        {success && <Success message="Successfully submitted" />}
        <form onSubmit={handleSubmit}>
          {gameData &&
            Object?.entries(gameData)?.map((datum, i) => (
              <div key={i} className="one-question">
                <div className="quest">{datum[1].text}</div>
                <div className="choices">
                  {datum[1]?.choice.map((ans, j) => (
                    <div key={j} className="choice">
                      <input
                        required
                        type="radio"
                        value={ans}
                        id={`answer-${String(i)}-${String(j)}`}
                        checked={String(ans) === String(submission[datum[0]])}
                        onChange={(e) => handleChange(e.target.value, datum[0])}
                      />
                      <label htmlFor={`answer-${String(i)}-${String(j)}`}>
                        {" "}
                        {ans}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          <FilledButton text="Submit" submit={true} loading={loading} />
        </form>
      </div>
      <style jsx>{`
        .one-question {
          margin: 1rem 0 0.5rem;
        }
        .quest {
          font-size: 1.5rem;
        }
        .choices {
          margin: 0.75rem 0 1rem;
        }
        .choices .choice {
          font-size: 1.3rem;
        }
      `}</style>
    </>
  );
};

export default Quiz;
