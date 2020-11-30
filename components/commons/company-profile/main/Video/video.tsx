import * as React from "react";

interface Props {
  type: string;
}

const VideoMain: React.FC<Props> = ({type}) => {
  return (
    <>
      {type === "main" ?
        <>
          <video width="100%" height="20%" controls>
            <source src="movie.mp4" type="video/mp4"/>
            <source src="movie.ogg" type="video/ogg"/>
            Your browser does not support the video tag.
          </video>
          {/*<img src="/img/company-profile/video-right.png" className="video-image-main"/>*/}
        </>
        :
        <div className="flex-container-alt">
          <video className="video-size" controls>
            <source src="movie.mp4" type="video/mp4"/>
            <source src="movie.ogg" type="video/ogg"/>
            Your browser does not support the video tag.
          </video>
          {/* <div className="video-flex">
            <img src="/img/company-profile/video-right.png" className="video-image"/>
          </div> */}
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

        .video-image-main {
            max-width: 5rem;
            position: absolute;
        }

        .video-size {
            width: 30%;
            height: 20%;
        }

        .video-flex {
            display: flex;
            margin-left: 7%;
            transform: translateX(-22rem) translateY(-3rem);
        }

        @media only screen and (max-width: 1000px) {
            .video-size {
                width: 70%;
                height: 16rem;
            }
        }
      `}</style>
    </>
  );
};

export default VideoMain;