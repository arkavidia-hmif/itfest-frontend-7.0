import React from "react";
import LeaderBoardChild from "./LeaderBoardChild";
import ColorfulHeader from "./ColorfulHeader";
import { Theme } from "styles/theme";

const LeaderBoard: React.FC = () => {
  return (
    <div className="leaderboard">
      <div className="header">
        <ColorfulHeader headingLevel={1} color={Theme.headerColors.pipi} size="1em">LEADERBOARD</ColorfulHeader>
        <p className="visitor">Visitors: 135182</p>
      </div>
      <LeaderBoardChild no={1} name="John Doe" score={10000000} />
      <LeaderBoardChild no={2} name="Jane Doe" score={5000000} />
      <LeaderBoardChild no={3} name="John Mayer" score={12000000} />
      <LeaderBoardChild no={4} name="Afif Akromi" score={7000000} />

      <style jsx>{`
        .leaderboard {
          width: 50%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 40vh;
          text-align: center;
        }

        .visitor {
          background-size: 100%;
          background-image: ${Theme.headerColors.pipi};
          background-clip: text;
          -webkit-background-clip: text;
          text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
        }

        p {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default LeaderBoard;
