import React, { useContext } from "react";
import useSWR from "swr";
import { ApiContext } from "../utils/context/api";
import LeaderBoardChild from "./LeaderBoardChild";
import Alert from "./commons/Alert";
import ColorfulHeader from "./ColorfulHeader";
import { Theme } from "styles/theme";
import { getGlobalScoreboard, getTotalVisitors } from "api/home";

const LeaderBoard: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const { data: leaderboardData, error: leaderboardErr } = useSWR("/global-scoreboard", () => getGlobalScoreboard(apiContext.axios));
  const { data: visitorData, error: visitorErr } = useSWR("/visitor-count", () => getTotalVisitors(apiContext.axios));

  return (
    <div className="container-sm manual-lg-width margin-bot">
      <div className="row center">
        <div className="col-12">
          <ColorfulHeader headingLevel={1} color={Theme.headerColors.pipl} size="1em">LEADERBOARD</ColorfulHeader>
          <b className="visitor">Visitors: <span>{visitorData?.data.count}</span></b>
        </div>
      </div>
      <Alert error={(leaderboardErr || visitorErr) ? "Masalah koneksi" : null} />
      {(leaderboardData) ? leaderboardData.data.map((item, index) => {
        return <LeaderBoardChild no={(index + 1)} name={item.user.name} score={item.score} key={index} />;
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
