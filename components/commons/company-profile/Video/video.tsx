import * as React from "react";

interface Props {
  videoUrl : string;
}

const Video: React.FC<Props> = ({ videoUrl }) => {
  console.log(videoUrl)
  return (
    <div className="flex-container">
      <iframe 
        src={videoUrl}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      >
      </iframe>
      <style jsx>{`
        iframe {
          width: 520px;
          height: 292.5px;
        }
        .flex-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
        }

        @media only screen and (max-width: 1000px) {
          .flex-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }

        @media only screen and (max-width: 768px) {
          iframe {
            width: 430px;
            height: 241.875px;
          }

          .flex-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }

        @media only screen and (max-width: 576px) {
          iframe {
            width: 350px;
            height: 196.875px;
          }

          .flex-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }

        @media only screen and (max-width: 400px) {
          iframe {
            width: 280px;
            height: 157.5px;
          }
        }
      `}</style>
    </div>
  );
};

export default Video;