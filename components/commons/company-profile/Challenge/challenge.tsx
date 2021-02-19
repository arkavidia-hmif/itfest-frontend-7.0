import * as React from "react";
import Spinner from "components/commons/Spinner";

interface Props {
  done: boolean;
  loading?: boolean;
  startGame?: React.MouseEventHandler<HTMLImageElement>;
  prize: number;
}

const Challenge: React.FC<Props> = ({ done, loading, startGame, prize }) => {
  if (done) {
    return (
      <>
        <div className="challenge-margin">
          <h1 className="challenge-title">Challenge</h1>
          <div className="flag-flex">
            <img src="/img/company-profile/flag.png" className="flag-image" />
          </div>
          <div className="flex-center-box">
            <div className="challenge-box-done">
              <h2 className="challenge-description">
                Kamu telah berhasil menyelesaikan challenge
              </h2>
              <div className="flex-center">
                <img
                  src="/img/company-profile/cilindrical-hologram.png"
                  className="hologram-image"
                />
              </div>
              <div className="flex-center">
                <button className="button">+{prize} Points</button>
              </div>
            </div>
          </div>
          <div className="gameconsole-flex">
            <img
              src="/img/company-profile/game-console.png"
              className="flag-image"
            />
          </div>
        </div>
        <style jsx>{`
          .button {
            border-radius: 4rem;
            border-color: transparent;
            background-color: #441985;
            color: white;
            min-width: 7rem;
            min-height: 2.4rem;
            font-size: 1.2rem;
            margin-top: 2%;
          }

          .challenge-margin {
            margin-top: 8%;
            margin-bottom: 5rem;
            margin-left: 10%;
            margin-right: 10%;
          }

          .challenge-box-done {
            padding: 1rem;
            background: rgba(219, 194, 255, 0.7);
            box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
            border-radius: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5%;
          }

          .flex-center-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
          }

          .flex-center {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .challenge-title {
            text-align: center;
          }

          .challenge-description {
            text-align: center;
            margin-right: 5%;
            margin-left: 5%;
          }

          .hologram-image {
            max-width: 10rem;
          }

          .flag-image {
            max-width: 8rem;
            position: absolute;
          }

          .flag-flex {
            display: flex;
            justify-content: flex-end;
            transform: translate(3rem, -4rem);
          }

          .gameconsole-flex {
            display: flex;
            transform: translate(-3rem, -4rem);
          }

          @media only screen and (max-width: 1000px) {
            .challenge-box-done {
              width: 90%;
            }

            .flex-center-box {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: stretch;
            }

            .flag-image {
              max-width: 4rem;
              position: absolute;
            }

            .flag-flex {
              display: flex;
              justify-content: flex-end;
              transform: translate(0.5rem, -2.5rem);
            }

            .gameconsole-flex {
              display: flex;
              transform: translate(-0.5rem, -2.5rem);
            }

            .challenge-description {
              font-size: 1rem;
            }

            .button {
              border-radius: 3rem;
              min-width: 4rem;
              min-height: 2rem;
              font-size: 1rem;
              margin-top: 5%;
            }

            .hologram-image {
              max-width: 6rem;
            }
          }
        `}</style>
      </>
    );
  } else {
    return (
      <>
        <div className="challenge-margin">
          <h1 className="challenge-title">Challenge</h1>
          <div className="flag-flex">
            <img src="/img/company-profile/flag.png" className="flag-image" />
          </div>
          <div className="flex-center-box">
            <div className="challenge-box-undone">
              <div className="flex-center-undone">
                <h2 className="challenge-description">
                  Kamu belum menyelesaikan challenge
                </h2>
                {loading ? (
                  <Spinner height="50px" />
                ) : (
                  <img
                    src="/img/company-profile/play-polygon.png"
                    className="play-image"
                    onClick={startGame}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="gameconsole-flex">
            <img
              src="/img/company-profile/game-console.png"
              className="flag-image"
            />
          </div>
        </div>
        <style jsx>{`
          .challenge-margin {
            margin-top: 8%;
            margin-bottom: 5rem;
            margin-left: 10%;
            margin-right: 10%;
          }

          .challenge-box-undone {
            padding: 1rem;
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
            border-radius: 0.5rem;
          }

          .flex-center-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
          }

          .flex-center-undone {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10%;
          }

          .challenge-title {
            text-align: center;
          }

          .challenge-description {
            text-align: center;
            margin-right: 5%;
            margin-left: 5%;
          }

          .play-image {
            width: 6rem;
            background-color: #fe789a;
            padding: 1%;
            padding-left: 5.5%;
            padding-right: 5%;
            border-radius: 1vw;
            margin-top: 1%;
          }

          .flag-image {
            max-width: 8rem;
            position: absolute;
          }

          .flag-flex {
            display: flex;
            justify-content: flex-end;
            transform: translate(3rem, -5rem);
          }

          .gameconsole-flex {
            display: flex;
            transform: translate(-3rem, -4rem);
          }

          @media only screen and (max-width: 1200px) {
            .play-image {
              width: 5rem;
            }
          }

          @media only screen and (max-width: 1000px) {
            .flex-center-box {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: stretch;
            }

            .challenge-box-undone {
              width: 90%;
            }

            .flag-image {
              max-width: 4rem;
              position: absolute;
            }

            .flag-flex {
              display: flex;
              justify-content: flex-end;
              transform: translate(0.5rem, -2.5rem);
            }

            .gameconsole-flex {
              display: flex;
              transform: translate(-0.5rem, -2.5rem);
            }

            .play-image {
              width: 3.3rem;
            }

            .challenge-description {
              font-size: 1rem;
            }
          }

          @media only screen and (max-width: 768px) {
            .play-image {
              width: 2.5rem;
            }
          }

          @media only screen and (max-width: 576px) {
            .play-image {
              width: 2.4rem;
            }
          }

          @media only screen and (max-width: 400px) {
            .play-image {
              width: 2.2rem;
              height: 1.2rem;
              border-radius: 0.35rem;
              padding-left: 7.5%;
              padding-right: 7%;
              padding-top: 2%;
              padding-bottom: 2%;
            }
          }
        `}</style>
      </>
    );
  }
};

export default Challenge;
