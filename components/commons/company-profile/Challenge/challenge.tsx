import * as React from "react";

interface Props {
  done: boolean;
}

const Challenge: React.FC<Props> = ({done}) => {
  return (
    <>
      {(done) ?
        <div className="challenge-margin">
          <h1 className="challenge-title">Challenge</h1>
          <div className="flag-flex">
            <img src="/img/company-profile/flag.png" className="flag-image"/>
          </div>
          <div className="flex-center-box">
            <div className="challenge-box-done">
              <h2 className="challenge-description">Kamu telah berhasil menyelesaikan challenge</h2>
              <div className="flex-center">
                <img src="/img/company-profile/cilindrical-hologram.png" className="hologram-image"/>
              </div>
              <div className="flex-center">
                <button className="button">+100 Points</button>
              </div>
            </div>
          </div>
          <div className="gameconsole-flex">
            <img src="/img/company-profile/game-console.png" className="flag-image"/>
          </div>
        </div>
        :
        <div className="challenge-margin">
          <h1 className="challenge-title">Challenge</h1>
          <div className="flag-flex">
            <img src="/img/company-profile/flag.png" className="flag-image"/>
          </div>
          <div className="flex-center-box">
            <div className="challenge-box-undone"> 
              <div className="flex-center-undone">
                <h2 className="challenge-description">Kamu belum menyelesaikan challenge</h2>
                <img src="/img/company-profile/play-polygon.png" className="play-image"/>
              </div>
            </div>
          </div>
          <div className="gameconsole-flex">
            <img src="/img/company-profile/game-console.png" className="flag-image"/>
          </div>
        </div>
      }
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
            margin-top: 5%;
            margin-bottom: 5rem;
        }

        .challenge-box-done {
            padding: 1rem;
            background: rgba(219, 194, 255, 0.8);
            box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
            border-radius: 1.5rem;
        }

        .challenge-box-undone {
            padding: 1rem;
            background: white;
            box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
            border-radius: 1.5rem;
        }

        .flex-center-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            margin-left: 15%;
            margin-right: 15%;
        }

        .flex-center {
            display: flex;
            justify-content: center;
        }

        .flex-center-undone {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5%;
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

        .play-image {
            width: 6.5vw;
            background-color: #FE789A;
            padding: 1%;
            padding-left: 3.5%;
            padding-right: 3%;
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
            margin-right: 12%;
            transform: translateY(-4rem);
        }

        .gameconsole-flex {
            display: flex;
            margin-left: 12%;
            transform: translateY(-4rem);
        }

        @media only screen and (max-width: 1000px) {
            .flex-container {
                flex-direction: column-reverse;
                margin-top: 8%;
            }

            .flag-image {
                max-width: 5.3rem;
                position: absolute;
            }
    
            .flag-flex {
                display: flex;
                justify-content: flex-end;
                margin-right: 6.5%;
                transform: translateY(-3rem);
            }
    
            .gameconsole-flex {
                display: flex;
                margin-left: 6.5%;
                transform: translateY(-3rem);
            }

            .play-image {
                width: 12vw;
                background-color: #FE789A;
                padding: 2%;
                padding-left: 6.5%;
                padding-right: 6%;
                border-radius: 0.8rem;
                margin-top: 1%;
            }

            .challenge-description {
                font-size: 3vw;
            }
        }
      `}</style>
    </>
  );
};

export default Challenge;