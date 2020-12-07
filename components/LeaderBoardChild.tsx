import React from "react";

interface Props {
	no: number;
	name: string;
	score: number;
}

const LeaderBoardChild: React.FC<Props> = ({no, name, score}) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="leaderboard-child py-2 px-lg-5">
          <div className="row">
            <div className="col-4">
              <b>{no}</b>
            </div>
            <div className="col-4">
              <p>{name}</p>
            </div>
            <div className="col-4 left">
              <b className="score">{score}</b>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .leaderboard-child {
            padding: 0.5rem;
            margin-top: 0.7rem;
            width: 100%;
            background: linear-gradient(270deg, #FBBCC8 0%, #FFFFFF 53.55%);
            box-shadow: 5px 6px 12px rgba(143, 143, 143, 0.25);
            border-radius: 0.5rem;
          }

          p {
            display: inline-block;
            margin-block-start: 0;
            margin-block-end: 0;
          }

          .score {
            color: #623FA2;
          }

          .left {
            text-align: right;
          }
        `}
      </style>
    </div>
  );
};

export default LeaderBoardChild;
