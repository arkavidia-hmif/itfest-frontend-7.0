import * as React from "react";
import Link from "next/link";

interface Props {
  open: boolean;
  top?: string;
  left?: string;
  imageURL: string;
  title: string;
  setOpen: (input: boolean) => void;
}

const Popup : React.FC<Props> = ({open, setOpen, top, left, imageURL, title}) => {
  return (
    <div id="popup-container" style={{top: top, left: left}}>
      <a className="close" onClick={() => setOpen(false)}>
        &times;
      </a>
      <div id="popup-body">
        <div className="image">
          <img src={imageURL} alt="friendly-dino"/>
        </div>
        <div className="name">
          <p>{title}</p>
        </div>
        <div className="info">
          <Link href="#"><a><p>more &gt; &gt; &gt;</p></a></Link>
        </div>
      </div>
      <style jsx>{`
        #popup-container {
          position: absolute;
          align-items: center;
          padding: 1rem;
          background: #FFFF;
          min-width: 100px;
          width: 15%;
          height: 15%;
          border-radius: 10px;
          transition: visibility 0.2s, opacity 0.2s linear;
          box-shadow: 2px 4px 8px 0px #000000;
        }  

        #popup-body {
          width: 100%;
          display: flex; 
          align-items: center;
          flex-wrap: wrap;
        }

        .close {
          float: right;
          font-size: 1.5rem;
          cursor: pointer;
          text-decoration: none;
          margin: 0;
          color: #000000;
        }

        .image {
          width: 20%;
        }

        img {
          min-width: 20px;
          width: 100%;
        }

        .name {
          margin-left: 1rem;
        }

        .name p {
          color: #000000;
          font-size: 1.2rem;
          margin: 0;
        }

        .info {
          cursor: pointer;
          margin-left: auto;
        }
        
        .info a {
          text-decoration: none;
        }
        
        .info p {
          color: #FE5982;
          margin: 0;
        }

        @media (max-width: 600px){
          #popup-container {
            padding: 0.5rem;
          }
          
          #popup-body {
            flex-direction: column;
          }

          .name {
            margin-left: 0;
          }
        }
      `}</style>
      <style jsx>{`
        #popup-container {
          visibility: ${open ? "visible" : "hidden"};
          opacity: ${open ? 1 : 0};
        }  
      `}</style>
    </div>
  )
};

export default Popup;