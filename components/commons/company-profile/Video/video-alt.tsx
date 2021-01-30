import * as React from "react";

const VideoAlt : React.FC = () => {
  return (
    <div className="flex-container-alt">
      <video className="video-size" controls>
        <source src="" type="video/mp4"/>
        <source src="" type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .flex-container-alt {
          margin-top: 1%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }  

        .video-size {
          width: 35rem;
          height: 20%;
        }

        @media only screen and (max-width: 1000px) {
          .video-size {
            min-width: 11rem;
            min-height: 10rem;
          }
        }

        @media only screen and (max-width: 768px) {
          .video-size {
            width: 25rem;
            min-height: 16rem;
          }
        }

        @media only screen and (max-width: 576px) {
          .video-size {
            width: 18.5rem;
            min-height: 14rem;
          }
        }

        @media only screen and (max-width: 400px) {
          .video-size {
            width: 16rem;
            min-height: 12rem;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoAlt;