import * as React from "react";
import Video from "./Video/video";
import AboutUs from "./AboutUs/about-us";
import ButtonCombined from "./Buttons/buttonscombined";

interface Props {
    done: boolean;
    aboutUs: string;
}

const CombinedComponents: React.FC<Props> = ({done, aboutUs}) => {
  return (
    <>
      <div className="flex-container">
        <div className="margin">
          <AboutUs aboutUs={aboutUs}/>
          <ButtonCombined done={done}/>
        </div>
        <div className="grid-item-2">
          <div className="grid-item-2-flex">
            <Video/>
          </div>
        </div>
        <div className="grid-item-2-image">
          <div className="video-flex">
            <img src="/img/company-profile/video-left.png" className="video-image-main"/>
          </div>
        </div>
        <div className="grid-item-3-image">
          <div className="chat-flex">
            <img src="/img/company-profile/chat-button.png" className="chat-image-main"/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flex-container {
            display: grid;
            grid-template-columns: repeat(3, 25%);
        }

        .margin {
            grid-row-start: 1;
            grid-row-end: 4;
            grid-column-start: 1;
            grid-column-end: 3;
            margin-right: 2%;
        }

        .grid-item-2 {
            grid-row-start: 4;
            grid-row-end: 1;
            grid-column-start: 3;
            grid-column-end: 5;
        }

        .grid-item-2-image {
            grid-row-start: 3;
            grid-row-end: 4;
            grid-column-start: 4;
            grid-column-end: 5;
            margin-bottom: 10%;
            margin-left: 2%;
        }

        .grid-item-2-flex {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }

        .grid-item-3-image {
            grid-row-start: 3;
            grid-row-end: 4;
            grid-column-start: 4;
            grid-column-end: 5;
            margin-left: 2%;
        }

        .chat-image-main {
            max-width: 3.6rem;
            position: relative;
            z-index: 3;
            transform: translate(215%,300%);
        }

        .description-text {
            text-align: center;
        }

        .video-image-main {
            max-width: 6rem;
            position: relative;
            z-index: 3;
            transform: translate(30%,60%);
        }

        .video-flex {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            margin-bottom: 2%;
        }

        .chat-flex {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            margin-bottom: 2%;
        }

        @media only screen and (max-width: 1200px) {
            .video-image-main {
                max-width: 5rem;
                transform: translate(15%,40%);
            }

            .chat-image-main {
                max-width: 3.2rem;
                transform: translate(200%,240%);
            }
        }

        @media only screen and (max-width: 1000px) {
            .margin {
                grid-row-start: 3;
                grid-row-end: 4;
                grid-column-start: 1;
                grid-column-end: 5;
                margin-right: 2%;
                margin-top: 4%;
            }

            .grid-item-2 {
                grid-row-start: 1;
                grid-row-end: 3;
                grid-column-start: 1;
                grid-column-end: 5;
            }

            .grid-item-2-image {
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 4;
                grid-column-end: 5;
                margin-bottom: 10%;
                margin-left: 2%;
            }

            .grid-item-2-flex {
                display: flex;
                justify-content: center;
                align-items: flex-end;
                margin-top: 4%;
            }

            .grid-item-3-image {
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 4;
                grid-column-end: 5;
                margin-left: 2%;
            }

            .video-image-main {
                max-width: 4.8rem;
                transform: translate(-90%,50%);
            }

            .chat-image-main {
                max-width: 3.2rem;
                transform: translate(-40%,260%);
            }
        }

        @media only screen and (max-width: 768px) {
            .margin {
                margin-top: 8%;
            }

            .video-image-main {
                max-width: 4.4rem;
                transform: translate(-50%,50%);
            }

            .chat-image-main {
                max-width: 3.2rem;
                transform: translate(0,240%);
            }
        }

        @media only screen and (max-width: 576px) {
            .margin {
                margin-top: 9%;
            }

            .video-image-main {
                max-width: 4.2rem;
                transform: translate(-80%,50%);
            }

            .chat-image-main {
                max-width: 3rem;
                transform: translate(-40%,230%);
            }
        }

        @media only screen and (max-width: 400px) {
            .video-image-main {
                max-width: 4rem;
                transform: translate(-30%,50%);
            }

            .chat-image-main {
                max-width: 2.4rem;
                transform: translate(-10%,270%);
            }
        }
      `}</style>
    </>
  );
};

export default CombinedComponents;