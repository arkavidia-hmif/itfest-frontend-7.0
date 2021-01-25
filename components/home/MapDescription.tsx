import * as React from "react";
import ColorfulHeader from "../commons/ColorfulHeader";
import { Theme } from "styles/theme";

// interface Props {
//   type: string;
//   done: boolean;
// }
const MapDescription: React.FC = () => {
  const points = 1000;
  const rank = "1 of 9999";
  return (
    <>
      <div className="flex-container">
        <div className="journey-text">
          <div className="title-text">
            <ColorfulHeader
              color={Theme.headerColors.plpi}
              headingLevel={1}
            > START YOUR JOURNEY!
            </ColorfulHeader>
          </div>
          <img src="img/home/email-icon.png" className="email-img"/>
        </div>
        <h1 className="journey-text"></h1>
        <div className="description-flex">
          <div className="grid-left">
            <div className="border-left"></div>
            <div className="text-left">
              <p className="text-bold-left-up">Points</p>
              <p className="text-bold-left-down">Rank</p>
            </div>
            <div>
              <p className="text-bold-left-up-value">{points}</p>
              <p className="text-bold-left-down-value">{rank}</p>
            </div>
          </div>
          <div className="grid-right">
            <div className="text-right">
              <p className="text-bold-right-up">Download Guidebook</p>
              <p className="text-bold-right-down">Download Booklet</p>
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
              grid-template-columns: 1rem 1rem 4rem 6rem;
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

          .description-flex {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin: 0 10% 0 10%;
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
                  grid-template-columns: 1rem 1rem 3.4rem 5rem;
              }
          }

          @media only screen and (max-width: 400px) {
              .journey-text {
                  text-align: center;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  margin-left: 6%;
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

              .grid-left {
                  display: grid;
                  padding: 1% 3%;
                  align-items: center;
                  border-radius: 1rem;
                  grid-template-columns: 0.3rem 0.6rem 2.7rem 5rem;
                  margin-inline-end: 0;
              }

              .grid-right {
                  display: grid;
                  padding: 1% 3%;
                  align-items: center;
                  border-radius: 1rem;
                  grid-template-columns: 7.8rem 0.3rem 0.3rem;
              }

              .text-bold-left-up {
                  font-size: .8rem;
              }
  
              .text-bold-left-down {
                  font-size: .8rem;
              }
    
              .text-bold-left-up-value {
                  font-size: .8rem;
              }
    
              .text-bold-left-down-value {
                  font-size: .8rem;
              }
    
              .text-bold-right-up {
                  font-size: .8rem;
              }
    
              .text-bold-right-down {
                  font-size: .8rem;
              }
          }
        `}</style>
    </>
  );
};

export default MapDescription;