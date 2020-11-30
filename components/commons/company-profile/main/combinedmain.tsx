import * as React from "react";
import Video from "./Video/video";
import AboutUs from "./about-us";
import ButtonCombined from "./Buttons/buttonscombined";

const CombinedComponents: React.FC = () => {
  return (
    <>
      <div className="flex-container">
        <div>
          <AboutUs type="main"/>
          <ButtonCombined type="main"/>
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

        .description-text {
            text-align: center;
        }
      `}</style>
    </>
  );
};

export default CombinedComponents;