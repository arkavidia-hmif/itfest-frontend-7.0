import React from "react";

interface Props {
	no: number;
	name: string;
	score: number;
}

const LeaderBoardChild: React.FC<Props> = ({no, name, score}) => {
  return (
    <div className="leaderboard">
      <p className="number">{no}</p>
      <p className="name">{name}</p>
      <p className="score">{score}</p>
      <style jsx>{`
        .leaderboard {
          margin-top: 0.7rem;
          padding: 0.5rem 2rem 0.5rem 2rem;
          width: 100%;
          background: linear-gradient(270deg, #FBBCC8 0%, #FFFFFF 53.55%);
          box-shadow: 5px 6px 12px rgba(143, 143, 143, 0.25);
          border-radius: 0.5rem;
        }

        p {
          margin-bottom: 0;
          font-weight: bold;
          display: inline-block;
        }

        .score {
          color: #623FA2;
          float: right;
        }

        .number {
          float: left;
          margin-right: 7rem;
        }

        .name {
          float: left;
        }

        @media (max-width: 1000px) {
          .number {
            margin-right: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LeaderBoardChild;
