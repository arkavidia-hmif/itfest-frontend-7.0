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
            align-items: center;
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
                margin-top: 4.5%;
                justify-content: center;
            }
        }
      `}</style>
    </>
  );
};

export default CombinedComponents;