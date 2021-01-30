import * as React from "react";

const Video: React.FC = () => {
  return (
    <div className="flex-container">
      <video className="video-size-main" controls>
        <source src="" type="video/mp4"/>
        <source src="" type="video/ogg"/>
          Your browser does not support the video tag.
      </video>
      {/* <iframe width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe> */}
      <style jsx>{`
        .flex-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
        }

        .video-size-main {
          min-width: 33rem;
          min-height: 50%;
        }

        @media only screen and (max-width: 1200px) {
          .video-size-main {
            min-width: 21rem;
            min-height: 15rem;
          }
        }

        @media only screen and (max-width: 1000px) {
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
        }
      `}</style>
    </div>
  );
};

export default Video;