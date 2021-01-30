import * as React from "react";

interface Props {
  videoUrl : string;
}

const VideoAlt : React.FC<Props> = ({ videoUrl }) => {
  console.log(videoUrl)
  return (
    <div className="flex-container-alt">
      <iframe 
        src={videoUrl} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      >
      </iframe>
      <style jsx>{`
        iframe {
          width: 560px;
          height: 315px;
        }

        .flex-container-alt {
          margin-top: 1%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }  

        @media only screen and (max-width: 768px) {
          iframe {
            width: 450px;
            height: 253.125px;
          }
        }

        @media only screen and (max-width: 576px) {
          iframe {
            width: 350px;
            height: 196.875px;
          }
        }

        @media only screen and (max-width: 400px) {
          iframe {
            width: 300px;
            height: 168.75px;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoAlt;