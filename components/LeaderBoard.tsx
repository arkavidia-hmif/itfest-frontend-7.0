import React, { useEffect, useContext, useState } from "react";
import { ApiContext } from "../utils/context/api";
import LeaderBoardChild from "./LeaderBoardChild";
import ColorfulHeader from "./ColorfulHeader";
import { Theme } from "styles/theme";
import { getGlobalScoreboard } from "api/home";
import { LeaderboardData } from "interfaces/home";

const LeaderBoard: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData["data"] | null>(null);

  useEffect(() => {
    getGlobalScoreboard(apiContext.axios)
      .then((res) => {
        setLeaderboardData(res.data);
      });
  },[]);
  
  return (
    <div className="container-sm manual-lg-width margin-bot">
      <div className="row center">
        <div className="col-12">
          <ColorfulHeader headingLevel={1} color={Theme.headerColors.pipl} size="1em">LEADERBOARD</ColorfulHeader>
          <b className="visitor">Visitors: 135182</b>
        </div>
      </div>
      {(leaderboardData) ? leaderboardData.map((item, index) => {
        return <LeaderBoardChild no={(index + 1)} name={item.user.name} score={item.score} key={index}/>;
      }) : null}
      <style jsx>{`
        .margin-bot {
          margin-bottom: 5%;
        }

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

        @media only screen and (max-width: 576px) {
          .margin-bot {
            margin-top: 5%;
          }

          .center {
            margin-bottom: 4%;
          }
        }
      `}</style>
    </div>
  );
};

export default LeaderBoard;
