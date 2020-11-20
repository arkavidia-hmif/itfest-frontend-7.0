import React from "react";

interface Props {
	no: number;
	name: string;
	score: number;
}

const LeaderBoardChild: React.FC<Props> = ({no, name, score}) => {
  return (
    <div className="leaderboard">
      <p>{no}</p>
      <p>{name}</p>
      <p className="score">{score}</p>
      <style jsx>{`
        .leaderboard {
          padding: 0.5rem 2rem 0.5rem 2rem;
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          background: linear-gradient(270deg, #FBBCC8 0%, #FFFFFF 53.55%);
          box-shadow: 5px 6px 12px rgba(143, 143, 143, 0.25);
          border-radius: 0.5rem;
        }

        p {
          vertical-align: middle;
          margin-bottom: 0;
          font-weight: bold;
        }

        .score {
          color: #623FA2;
        }
      `}</style>
    </div>
  );
};

export default LeaderBoardChild;
