import * as React from "react";
import MeetButton from "./meetButton";
import ApplyButton from "./applyButton";

interface Props {
  type: string;
}
const CombinedButton: React.FC<Props> = ({type}) => {
  return (
    <>
      {type === "main" ?
        <div className="flex-container">
          <MeetButton/>
          <ApplyButton/>
        </div>
        :
        <div className="flex-container-alt">
          <MeetButton/>
          <ApplyButton/>
        </div>
      }
      <style jsx>{`
        .flex-container {
            display: flex;
            flex-direction: row;
        }

        .meet-button {
            margin-right: 2rem;
        }

        .flex-container-alt {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
      `}</style>
    </>
  );
};

export default CombinedButton;