import * as React from "react";

const VideoMain: React.FC = () => {
  return (
    <>
      <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4"/>
        <source src="movie.ogg" type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .button {
            border-radius: 5px;
            border-color: transparent;
            background-color: #FE789A;
            color: white;
            min-width: 6rem;
            margin-right: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default VideoMain;