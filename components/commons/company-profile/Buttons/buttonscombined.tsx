import * as React from "react";
import FilledButton from "../../FilledButton";
import SocialMediaRow from "./SocialMediaRow";
import { Theme } from "styles/theme";

interface Props {
  done: boolean;
  hiring?: string;
  socialMedia: {
    instagram?: string;
    email?: string
    linkedin?: string;
  };
}

const CombinedButton: React.FC<Props> = ({ done, hiring, socialMedia }) => {
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
      <div className="flex-container">
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
        .flex-container {
            display: flex;
            flex-direction: row;
        }

        .margin-right-button {
            margin-right: 3%;
        }

        @media only screen and (max-width: 1000px) {
            .flex-container {
                justify-content: center;
            }
      }
      `}</style>
      <style jsx>{`
        .play-hint {
          position: absolute;
          transition: opacity 0.2s ease-out;
          opacity:${showHint ? 255 : 0}
        }
      `}</style>
    </>
  );
};

export default CombinedButton;