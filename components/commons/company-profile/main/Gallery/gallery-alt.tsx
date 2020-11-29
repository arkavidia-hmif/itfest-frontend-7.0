import * as React from "react";
import GalleryAltContent from "../../../../../utils/context/constants/company-profile/gallery-text";

const GalleryAlt: React.FC = () => {
  return (
    <>
      <div className="flex-container">
        <h1>Gallery</h1>
        <p>{GalleryAltContent[0].content}</p>
      </div>
      <style jsx>{`
        .flex-container {
            display: flex;
            flex-direction: column;
            margin-left: 10%;
            margin-right: 10%;
            margin-top: 1%;
        }
      `}</style>
    </>
  );
};

export default GalleryAlt;