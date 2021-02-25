import * as React from "react";
import FilledButton from "../../FilledButton";
import SocialMediaRow from "./SocialMediaRow";

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
  return (
    <>
      <div className="flex-container">
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
    </>
  );
};

export default CombinedButton;