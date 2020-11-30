import * as React from "react";

interface Props {
  type: string;
}

const VideoMain: React.FC<Props> = ({type}) => {
  return (
    <>
      {type === "main" ?
        <div className="flex-container">
          <video className="video-size-main" controls>
            <source src="movie.mp4" type="video/mp4"/>
            <source src="movie.ogg" type="video/ogg"/>
              Your browser does not support the video tag.
          </video>
          {/*<img src="/img/company-profile/video-right.png" className="video-image-main"/>*/}
        </div>
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

        .video-size-main {
            min-width: 35rem;
            min-weight: 50%;
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

        @media only screen and (max-width: 1000px) {
            .video-size {
                width: 25rem;
                height: 16rem;
            }

            .video-size-main {
                min-width: 0;
                min-height: 0;
                width: 25rem;
                height: 16rem;
            }

            .flex-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
      `}</style>
    </>
  );
};

export default VideoMain;