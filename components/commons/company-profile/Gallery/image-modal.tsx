import * as React from "react";

interface Props {
  show: boolean;
  image: string;
  setShow: (input: boolean) => void;
}

const ImageModal: React.FC<Props> = ({show, setShow, image}) => {
  return (
    <div id="modal-background" onClick={() => setShow(false)}>
      <div className="image-container">
        <img src={image} alt="Foto Gallery"/>
      </div>
      <style jsx>{`
        #modal-background {
          display: ${show ? "flex" : "none"};
          position: fixed;
          justify-content: center;
          align-items: center;
          z-index: 20;
          padding: 5% 2%;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgb(0,0,0);
          background-color: rgba(0,0,0,0.4);
        }

        img {
          max-width: 100%;
          max-height: 100%;
        }

        .image-container {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }

      `}</style>
    </div>
  );
};

export default ImageModal;