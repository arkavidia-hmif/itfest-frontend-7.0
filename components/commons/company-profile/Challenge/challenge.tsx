import * as React from "react";

interface Props {
  done: boolean;
}

const Challenge: React.FC<Props> = ({done}) => {
  if(done){
    return (
      <>
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
            transform: translate(3rem,-4rem);
        }

        .gameconsole-flex {
            display: flex;
            transform: translate(-3rem,-4rem);
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
                transform: translate(0.5rem,-2.5rem);
            }

            .gameconsole-flex {
                display: flex;
                transform: translate(-0.5rem,-2.5rem);
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
        <style jsx>{`
        .challenge-margin {
            margin-top: 5%;
            margin-bottom: 5rem;
        }

        .challenge-box-undone {
            padding: 1rem;
            background: white;
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
            width: 7.2rem;
            background-color: #FE789A;
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
            transform: translate(3rem,-5rem);
        }

        .gameconsole-flex {
            display: flex;
            transform: translate(-3rem,-4rem);
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
                transform: translate(0.5rem,-2.5rem);
            }
    
            .gameconsole-flex {
                display: flex;
                transform: translate(-0.5rem,-2.5rem);
            }

            .play-image {
                max-width: 3rem;
                max-height: 1.6rem;
                background-color: #FE789A;
                padding: 2%;
                padding-left: 8%;
                padding-right: 8%;
                border-radius: 0.8rem;
                margin-top: 1%;
            }

            .challenge-description {
                font-size: 1rem;
            }
        }
      `}</style>
      </>
    );
  }
};

export default Challenge;