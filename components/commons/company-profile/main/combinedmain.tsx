import * as React from "react";
import Video from "./Video/video";
import AboutUs from "./about-us";
import ButtonCombined from "./Buttons/buttonscombined";

interface Props {
    done: boolean;
}

const CombinedComponents: React.FC<Props> = ({done}) => {
  return (
    <>
      <div className="flex-container">
        <div className="margin">
          <AboutUs type="main"/>
          <ButtonCombined type="main" done={done}/>
        </div>
        <Video type="main"/>
      </div>
      <style jsx>{`
        .flex-container {
            display: flex;
            flex-direction: row;
            margin-left: 10%;
            margin-right: 10%;
        }

        .flex-container-alt {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 10%;
            margin-right: 10%;
        }

        .margin {
            margin-right: 2%;
        }

        .description-text {
            text-align: center;
        }

        @media only screen and (max-width: 1000px) {
            .flex-container {
                flex-direction: column-reverse;
                margin-top: 8%;
            }
        }
      `}</style>
    </>
  );
};

export default CombinedComponents;