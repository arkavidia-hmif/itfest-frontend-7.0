import * as React from "react";
import Video from "./Video/video";

const CombinedComponents: React.FC = () => {
  return (
    <>
      <div className="flex-container">
        <div className="grid-item-2">
          <div className="video-flex">
            <Video type="alt"/>
          </div>
        </div>
        <div className="grid-item-2-image">
          <div className="video-icon-flex">
            <img src="/img/company-profile/video-right.png" className="video-image-alt"/>
          </div>
        </div>
        <div className="grid-item-3-image">
          <div className="chat-button-flex">
            <img src="/img/company-profile/chat-button.png" className="chat-image-alt"/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flex-container {
            display: grid;
            grid-template-columns: repeat(3, 25%);
        }

        .video-flex {
            display: flex; 
            justify-content: center;
            align-items: center;
        }

        .video-icon-flex {
            display: flex;
            justify-content: flex-start; 
            align-items: center;
            margin-bottom: 2%;
        }

        .chat-button-flex {
            display: flex;
            justify-content: center; 
            align-items: flex-end; 
            margin-bottom: 2%;
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
            grid-column-start: 1;
            grid-column-end: 5;
        }

        .grid-item-2-image {
            grid-row-start: 3;
            grid-row-end: 4;
            grid-column-start: 2;
            grid-column-end: 3;
            margin-bottom: 10%;
            margin-left: 2%;
        }

        .grid-item-3-image {
            grid-row-start: 3;
            grid-row-end: 4;
            grid-column-start: 4;
            grid-column-end: 5;
            margin-left: 2%;
        }

        .description-text {
            text-align: center;
        }

        .video-image-alt {
            max-width: 6rem;
            position: relative;
            z-index: 3;
            transform: translate(-50%,60%);
        }

        .chat-image-alt {
            max-width: 4rem;
            position: relative;
            z-index: 3;
            transform: translate(-50%,200%);
        }

        @media only screen and (max-width: 1200px) {
            .video-image-alt {
                max-width: 5rem;
                transform: translate(-120%,60%);
            }

            .chat-image-alt {
                max-width: 4rem;
                transform: translate(10%,150%);
            }
        }

        @media only screen and (max-width: 992px) {
            .video-image-alt {
                max-width: 4.8rem;
                transform: translate(-210%,60%);
            }

            .chat-image-alt {
                max-width: 4rem;
                transform: translate(30%,150%);
            }
        }

        @media only screen and (max-width: 768px) {
            .video-image-alt {
                max-width: 4.4rem;
                transform: translate(-160%,60%);
            }

            .chat-image-alt {
                max-width: 3.8rem;
                transform: translate(10%,150%);
            }
        }

        @media only screen and (max-width: 576px) {
            .video-image-alt {
                max-width: 3.6rem;
                position: relative;
                z-index: 3;
                transform: translate(-110%,60%);
            }

            .chat-image-alt {
                max-width: 3rem;
                position: relative;
                z-index: 3;
                transform: translate(30%,130%);
            }
        }

        @media only screen and (max-width: 400px) {
            .video-image-alt {
                max-width: 3.6rem;
                transform: translate(-120%,60%);
            }

            .chat-image-alt {
                max-width: 3rem;
                transform: translate(20%,120%);
            }
        }
      `}</style>
    </>
  );
};

export default CombinedComponents;