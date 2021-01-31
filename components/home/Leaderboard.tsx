import * as React from "react";
import ColorfulHeader from "../commons/ColorfulHeader";
import { Theme } from "styles/theme";

interface dataProps {
  name: string;
  score: string;
}

const LeaderBoard: React.FC = () => {
  const visitorNumber = 135182;
  const dummyData = 
  [
    {name: "John Doe", score: "10,000,000"},
    {name: "Jane Doe", score: "10,000,000"},
    {name: "John Mayer", score: "10,000,000"},
    {name: "Semangat IT Fest", score: "10,000,000"},
    {name: "Semangat Tim IT", score: "10,000,000"},
  ];
  const leaderboardList = (data: Array<dataProps>) => {
    const resultList = [];
    for(let i=0;i<data.length;i++){
      resultList.push(
        <div className="grid-container">
          <p className="text-number">{i+1}</p>
          <p className="text-name">{data[i].name}</p>
          <p className="text-score">{data[i].score}</p>
          <style jsx>{`
          .grid-container {
              display: grid;
              margin: 0.5% 0%;
              background: linear-gradient(270deg, #FBBCC8 0%, #FFFFFF 53.55%);
              box-shadow: 5px 6px 12px rgba(143, 143, 143, 0.25);
              padding: 1% 3%;
              align-items: center;
              border-radius: 1rem;
              grid-template-columns: 7% 78% 15%;
          }

          .text-number {
              margin-bottom: 0;
              font-weight: bold;
              grid-column: 1 / span 1;
          }

          .text-name {
              margin-bottom: 0;
              font-weight: bold;
              grid-column: 2 / span 1;
          }

          .text-score {
              margin-bottom: 0;
              color: #623FA2;
              grid-column: 3 / span 1;
              text-align: right;
          }

          @media only screen and (max-width: 1000px) {
              .grid-container {
                  border-radius: 0.5rem;
                  margin: 1% 0;
              }
          }

          @media only screen and (max-width: 768px) {
              .grid-container {
                  border-radius: 0.5rem;
                  padding: 2% 4%;
                  margin: 1% 0;
                  grid-template-columns: 7% 47% 46%;
              }
          }

          @media only screen and (max-width: 400px) {
              .grid-container {
                  grid-template-columns: 7% 43% 50%;
              }
          }
        `}</style>
        </div>
      );
    }
    return (
      resultList
    );
  };
  return (
    <>
      <div className="flex-container">
        <div className="title-text">
          <ColorfulHeader
            color={Theme.headerColors.pipl}
            headingLevel={1}
          > LEADERBOARD
          </ColorfulHeader>
          <ColorfulHeader
            color={Theme.headerColors.pipl}
            headingLevel={3}
          > Visitors: {visitorNumber}
          </ColorfulHeader>
        </div>
        {leaderboardList(dummyData)}
      </div>
      <style jsx>{`
          .flex-container {
              display: flex;
              flex-direction: column;
              margin-bottom: 5%;
              margin-top: 5%;
          }

          .title-text {
              text-align: center;
              margin-bottom: 2%;
          }
  
          @media only screen and (max-width: 1000px) {
              .flex-container {
                  justify-content: center;
              }
          }
        `}</style>
    </>
  );
};

export default LeaderBoard;