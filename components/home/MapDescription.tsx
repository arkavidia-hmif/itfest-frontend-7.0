import React, { useState, useEffect, useContext } from "react";
import { ApiContext } from "utils/context/api";
import ColorfulHeader from "components/commons/ColorfulHeader";
import { Theme } from "styles/theme";
import { getGlobalScoreboard, getPointsAndRank } from "api/home";
import { AuthContext } from "utils/context/auth";

const MapDescription: React.FC = () => {
  const authContext = useContext(AuthContext);
  const apiContext = useContext(ApiContext);
  const [points, setPoints] = useState(0);
  const [rank, setRank] = useState(-1);
  const [numberRanked, setNumberRanked] = useState(0);

  let rankText;
  if (rank === -1) {
    rankText = "Belum Tersedia";
  } else {
    rankText = `${rank} of ${numberRanked}`;
  }

  useEffect(() => {
    getGlobalScoreboard(apiContext.axios)
      .then((res) => {
        setNumberRanked(res.data.length);
      });

    if (authContext.authenticated) {
      getPointsAndRank(apiContext.axios)
        .then((res) => {
          setPoints(res.data.score);
          setRank(res.data.rank);
        });
    }
  }, [authContext.authenticated]);

  return (
    <>
      <div className="flex-container">
        <div className="journey-text">
          <div className="title-text">
            <ColorfulHeader
              color={Theme.headerColors.plpi}
              headingLevel={1}
            > <span id="title-size">START&nbsp;YOUR&nbsp;JOURNEY!</span>
            </ColorfulHeader>
          </div>
          <img src="img/home/email-icon.png" className="email-img" />
        </div>
        <h1 className="journey-text"></h1>
        <div className="description-container">
          <div className="grid-left">
            <div className="border-left"></div>
            <div className="text-left">
              <p className="text-bold-left-up">Points</p>
              <p className="text-bold-left-down">Rank</p>
            </div>
            <div>
              <p className="text-bold-left-up-value">{points}</p>
              <p className="text-bold-left-down-value">{rankText}</p>
            </div>
          </div>
          <div className="grid-right">
            <div className="text-right">
              <a href="https://link.arkavidia.id/itfest_guidebook"><p className="text-bold-right-up" >Download Guidebook</p></a>
              <a href="https://link.arkavidia.id/itfest_booklet"><p className="text-bold-right-down" >Download Booklet</p></a>
            </div>
            <div className="border-right"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
          .flex-container {
              display: flex;
              flex-direction: column;
              margin-top: 10%;
          }

          .journey-text {
              text-align: center;
              display: flex;
              flex-direction: row;
              justify-content: center;
              margin-left: 6%;
          }

          .grid-left {
              display: grid;
              padding: 1% 3%;
              align-items: center;
              border-radius: 1rem;
              grid-template-columns: 1rem 1rem 4rem 8rem;
          }

          .grid-right {
              display: grid;
              padding: 1% 3%;
              align-items: center;
              border-radius: 1rem;
              grid-template-columns: 12rem 1rem 1rem;
          }

          .border-left {
              width: 10px;
              background: linear-gradient(90deg, #FE789A 0%, #623FA2 100%);
              height: 100%;
          }

          .border-right {
              width: 10px;
              background: linear-gradient(90deg, #FE789A 0%, #623FA2 100%);
              height: 100%;
              grid-column: 3 / span 1;
          }

          .description-container {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin: 0 2% 0 2%;
          }

          .text-bold-left-up {
              font-weight: bold;
              color: #441985;
          }

          .text-bold-left-down {
              font-weight: bold;
              margin-top: 1rem;
              margin-bottom: 0;
              color: #441985;
          }

          .text-bold-left-up-value {
              color: #441985;
          }

          .text-bold-left-down-value {
              margin-top: 1rem;
              margin-bottom: 0;
              color: #441985;
          }

          .text-bold-right-up {
              font-weight: bold;
              text-align: right;
              color: #441985;
          }

          .text-bold-right-down {
              font-weight: bold;
              margin-top: 1rem;
              margin-bottom: 0;
              text-align: right;
              color: #441985;
          }

          .text-left {
              grid-column: 3 / span 1;
          }

          .text-right {
              grid-column: 1 / span 1;
          }

          .email-img {
              width: 75px;
              height: 100px;
          }

          .title-text {
              margin-top: 1.2%;
              margin-right: 1%;
          }
  
          @media only screen and (max-width: 1000px) {
              .email-img {
                  width: 50px;
                  height: 75px;
              }

              .border-left {
                  width: 6px;
              }
    
              .border-right {
                  width: 6px;
              }

              .grid-left {
                  grid-template-columns: 1rem 1rem 3.4rem 7rem;
              }
          }

          @media only screen and (max-width: 576px) {
              .flex-container {
                  margin-bottom: 5%;
              }

              .description-container {
                  flex-direction: column;
              }

              .journey-text {
                  text-align: center;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
              }

              .title-text {
                  position: relative;
                  z-index: 1;
                  margin-bottom: 5%;
              }

              .email-img {
                  width: 50px;
                  height: 75px;
                  margin: auto;
              }

              .border-left {
                  width: 6px;
              }
    
              .border-right {
                  width: 6px;
              }

              .email-img {
                  width: 50px;
                  height: 75px;
                  margin: auto;
                  position: absolute;
                  left: 84%;
                  transform: translateY(20%);
              }

              .border-left {
                  width: 6px;
              }
    
              .border-right {
                  width: 6px;
              }

              .grid-left {
                  display: grid;
                  padding: 1% 3%;
                  align-items: center;
                  border-radius: 1rem;
                  grid-template-columns: 2% 3% 3.5rem 60%;
              }

              .grid-right {
                  display: grid;
                  padding: 1% 3%;
                  align-items: center;
                  border-radius: 1rem;
                  grid-template-columns: 97% 3%;
                  margin-top: 3%;
              }

              .description-flex {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  margin: 0 2% 0 2%;
              }
          }

          @media only screen and (max-width: 400px) {
            #title-size {
                font-size: 1.6rem;
            }
        }
        `}</style>
    </>
  );
};

export default MapDescription;