import * as React from "react";

interface Props {
  type: string;
}

const Video: React.FC<Props> = ({type}) => {
  return (
    <>
      {type === "main" ?
        <div className="flex-container">
          <video className="video-size-main" controls>
            <source src="" type="video/mp4"/>
            <source src="" type="video/ogg"/>
              Your browser does not support the video tag.
          </video>
        </div>
        :
        <div className="flex-container-alt">
          <video className="video-size" controls>
            <source src="" type="video/mp4"/>
            <source src="" type="video/ogg"/>
            Your browser does not support the video tag.
          </video>
        </div>
      }
      <style jsx>{`
        .flex-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-end;
        }

        .flex-container-alt {
            margin-top: 1%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .video-image {
            max-width: 5rem;
        }

        .video-image-main {
            max-width: 5rem;
            position: absolute;
            right: 10rem;
        }

        .video-size-main {
            min-width: 33rem;
            min-height: 50%;
        }

        .video-size {
            width: 35rem;
            height: 20%;
        }

        .video-flex {
            display: flex;
            margin-left: 7%;
            transform: translateX(-22rem) translateY(-3rem);
        }

        @media only screen and (max-width: 1200px) {
            .video-size-main {
                min-width: 21rem;
                min-height: 15rem;
            }
        }

        @media only screen and (max-width: 1000px) {
            .video-size {
                min-width: 11rem;
                min-height: 10rem;
            }

            .video-size-main {
                min-width: 9rem;
                min-height: 15rem;
            }

            .flex-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }

        @media only screen and (max-width: 768px) {
            .video-size {
                width: 25rem;
                min-height: 16rem;
            }

            .video-size-main {
                width: 25rem;
                min-height: 14rem;
            }

            .flex-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }

        @media only screen and (max-width: 576px) {
            .video-size {
                width: 18.5rem;
                min-height: 14rem;
            }

            .video-size-main {
                width: 20rem;
                min-height: 14rem;
            }

            .flex-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }

        @media only screen and (max-width: 400px) {
            .video-size-main {
                width: 16rem;
                min-height: 12rem;
            }

            .video-size {
                width: 16rem;
                min-height: 12rem;
            }
        }
      `}</style>
    </>
  );
};

export default Video;