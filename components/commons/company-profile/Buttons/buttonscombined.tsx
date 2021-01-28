import * as React from "react";
import FilledButton from "../../FilledButton";
import { Theme } from "../../../../styles/theme";

interface Props {
  done: boolean;
}
const CombinedButton: React.FC<Props> = ({done}) => {
  return (
    <>
      <div className="flex-container">
        <div className="margin-right-button">
          <FilledButton
            color={Theme.buttonColors.pinkButton}
            text="MEET"
            padding="0.75em 1.5em"
          />
        </div>
        <FilledButton
          color={(done) ? Theme.buttonColors.lightPurpleButton : Theme.buttonColors.greyButton}
          text="APPLY NOW"
          padding="0.75em 1.5em"
        />
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