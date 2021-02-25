import * as React from "react";
import FilledButton from "../../FilledButton";
import SocialMediaRow from "./SocialMediaRow";
import { TenatSocmed } from "interfaces/tenant";

interface Props {
  done: boolean;
  socialMedia: TenatSocmed;
  hiring?: string;
}

const CombinedButtonAlt: React.FC<Props> = ({ done, hiring, socialMedia }) => {
  return (
    <>
      <div className="flex-container-alt">
        <div className="margin-right-button">
          <FilledButton
            disabled={!done}
            text="APPLY NOW"
            padding="0.75em 1.5em"
            onClick={() => {
              if (done) {
                window.open(hiring);
              }
            }}
          />
        </div>
        <SocialMediaRow socmed={socialMedia} />

      </div>
      <style jsx>{`
        .flex-container-alt {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .margin-right-button {
            margin-right: 3%;
        }
      `}</style>
    </>
  );
};

export default CombinedButtonAlt;