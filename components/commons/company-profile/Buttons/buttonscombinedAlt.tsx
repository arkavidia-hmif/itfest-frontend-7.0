import * as React from "react";
import FilledButton from "../../FilledButton";
import { Theme } from "../../../../styles/theme";

interface Props {
  done: boolean;
  socialMedia: {
    instagram?: string;
    email?: string
    linkedin?: string;
  };
  hiring?: string;
}

const CombinedButtonAlt: React.FC<Props> = ({ done, hiring, socialMedia }) => {
  return (
    <>
      <div className="flex-container-alt">
        <div className="margin-right-button">
          <FilledButton
            color={Theme.buttonColors.pinkButton}
            text="MEET"
            padding="0.75em 1.5em"
            onClick={() => window.open(socialMedia.instagram)}
          />
        </div>
        <FilledButton
          color={(done) ? Theme.buttonColors.lightPurpleButton : Theme.buttonColors.greyButton}
          text="APPLY NOW"
          padding="0.75em 1.5em"
          onClick={() => {
            if (done) {
              window.open(hiring);
            } else {
              null;
            }
          }}
        />
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