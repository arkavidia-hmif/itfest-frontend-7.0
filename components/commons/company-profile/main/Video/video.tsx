import * as React from "react";

interface Props {
  type: string;
}

const VideoMain: React.FC<Props> = ({type}) => {
  return (
    <>
      {type === "main" ?
        <video width="100%" height="20%" controls>
          <source src="movie.mp4" type="video/mp4"/>
          <source src="movie.ogg" type="video/ogg"/>
            Your browser does not support the video tag.
        </video>
        :
        <div className="flex-container-alt">
          <video width="30%" height="20%" controls>
            <source src="movie.mp4" type="video/mp4"/>
            <source src="movie.ogg" type="video/ogg"/>
            Your browser does not support the video tag.
          </video>
          <div className="video-flex">
            <img src="/img/company-profile/video-right.png" className="video-image"/>
          </div>
        </div>
      }
      <style jsx>{`
        .button {
            border-radius: 5px;
            border-color: transparent;
            background-color: #FE789A;
            color: white;
            min-width: 6rem;
            margin-right: 1.5rem;
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

        .video-flex {
            display: flex;
            margin-left: 7%;
            transform: translateX(-22rem) translateY(-3rem);
        }
      `}</style>
    </>
  );
};

export default VideoMain;