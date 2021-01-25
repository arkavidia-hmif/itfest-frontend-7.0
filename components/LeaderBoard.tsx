import React from "react";
import LeaderBoardChild from "./LeaderBoardChild";
import ColorfulHeader from "./ColorfulHeader";
import { Theme } from "styles/theme";

const LeaderBoard: React.FC = () => {
  return (
    <div className="container-sm manual-lg-width">
      <div className="row center">
        <div className="col-12">
          <ColorfulHeader headingLevel={1} color={Theme.headerColors.pipl} size="1em">LEADERBOARD</ColorfulHeader>
          <b className="visitor">Visitors: 135182</b>
        </div>
      </div>
      <LeaderBoardChild no={1} name="Jane Doe" score={5000000} />
      <LeaderBoardChild no={2} name="Jane Doe" score={5000000} />
      <LeaderBoardChild no={3} name="John Mayer" score={12000000} />
      <LeaderBoardChild no={4} name="Afif Akromi" score={7000000} />
      <style jsx>{`
        .center {
          text-align: center;
        }

        .visitor {
          background-size: 100%;
          background-image: ${Theme.headerColors.pipl};
          background-clip: text;
          -webkit-background-clip: text;
          text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default LeaderBoard;
