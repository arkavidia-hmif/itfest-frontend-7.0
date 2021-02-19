import React from "react";

interface Props {
	no: number;
	name: string;
	score: number;
}

const LeaderBoardChild: React.FC<Props> = ({no, name, score}) => {
  return (
    <div className="grid-container">
      <p className="text-number">{no}</p>
      <p className="text-name">{name}</p>
      <p className="text-score">{score}</p>
      <style jsx>{`
          .grid-container {
              display: grid;
              margin: 0.75% 0%;
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
                  margin: 1.5% 0;
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
};

export default LeaderBoardChild;
