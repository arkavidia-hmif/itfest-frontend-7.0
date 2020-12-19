import * as React from "react";
import MeetButton from "./meetButton";
import ApplyButton from "./applyButton";

interface Props {
  type: string;
  done: boolean;
}
const CombinedButton: React.FC<Props> = ({type, done}) => {
  if(type === "main"){
    return (
      <>
        <div className="flex-container">
          <MeetButton/>
          <ApplyButton done={done}/>
        </div>
        <style jsx>{`
          .flex-container {
              display: flex;
              flex-direction: row;
          }
  
          @media only screen and (max-width: 1000px) {
              .flex-container {
                  justify-content: center;
              }
        }
        `}</style>
      </>
    );
  }else{
    return (
      <>
        <div className="flex-container-alt">
          <MeetButton/>
          <ApplyButton done={done}/>
        </div>
        <style jsx>{`
        .flex-container-alt {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
      `}</style>
      </>
    );
  }
};

export default CombinedButton;