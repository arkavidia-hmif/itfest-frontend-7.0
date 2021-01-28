import * as React from "react";
import FilledButton from "../../FilledButton";
import { Theme } from "../../../../styles/theme";

interface Props {
  done: boolean;
}
const CombinedButtonAlt: React.FC<Props> = ({done}) => {
  return (
    <>
      <div className="flex-container-alt">
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