import * as React from "react";
import FilledButton from "../../FilledButton";
import SocialMediaRow from "./SocialMediaRow";
import { TenatSocmed } from "interfaces/tenant";
import { Theme } from "styles/theme";

interface Props {
  done: boolean;
  socialMedia: TenatSocmed;
  hiring?: string;
}

const CombinedButtonAlt: React.FC<Props> = ({ done, hiring, socialMedia }) => {
  const [showHint, setShowHint] = React.useState(false);

  React.useEffect(() => {
    if (showHint) {
      setTimeout(() => {
        setShowHint(false);
      }, 3000);
    }
  }, [showHint]);

  return (
    <>
      <div className="flex-container-alt">
        <div className="margin-right-button">
          <FilledButton
            color={done ? Theme.buttonColors.pinkButton : Theme.buttonColors.greyButton}
            text="APPLY NOW"
            padding="0.75em 1.5em"
            onClick={() => {
              if (done) {
                window.open(hiring);
              } else {
                setShowHint(true);
              }
            }}
          />
          <p className="play-hint">Mainkan challenge untuk membuka link ini</p>
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
      <style jsx>{`
        .play-hint {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          
          transition: opacity 0.2s ease-out;
          opacity:${showHint ? 255 : 0}
        }
      `}</style>
    </>
  );
};

export default CombinedButtonAlt;