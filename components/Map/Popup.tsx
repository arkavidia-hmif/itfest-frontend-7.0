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
    <div id="popup-container" className="p-2" style={{top: top, left: left}}>
      <a className="close" onClick={() => setOpen(false)}>
        &times;
      </a>
      <div id="popup-body" className="container">
        <div className="row">
          <div className="image col-5">
            <img src={imageURL}/>
          </div>
          <div className="name col-7 align-self-center justify-content-center">
            <p>{title}</p>
          </div>
        </div>
        <div className="row py-2">
          <div className="info col">
            <Link href="#"><a><p>more &gt; &gt; &gt;</p></a></Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        #popup-container {
          position: absolute;
          width: 15%;
          height: auto;
          min-width: 120px;
          background: #FFFF;
          border-radius: 10px;
          transition: visibility 0.2s, opacity 0.2s linear;
          box-shadow: 2px 4px 8px 0px #000000;
        }  

        #popup-body {
          width: 100%;
          display: flex; 
          align-items: center;
          justify-content: center;
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

        img {
          min-width: 30px;
          width: 100%;
        }

        .name {
          text-align: center;
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
      `}</style>
      <style jsx>{`
        #popup-container {
          visibility: ${open ? "visible" : "hidden"};
          opacity: ${open ? 1 : 0};
        }  
      `}</style>
    </div>
  );
};

export default Popup;