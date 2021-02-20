import { useEffect } from "react";

interface Props {
  open : boolean;
  setOpen: (input: boolean) => void;
}

const SnackBar : React.FC<Props> = ({open, setOpen}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 1400);

    return () => clearTimeout(timer);
  });

  return (
    <div id="snackbar">
      Barang ditambahkan ke keranjang
      <style jsx>{`
        #snackbar {
          min-width: 250px;
          margin-left: -125px;
          background-color: #333;
          color: #fff;
          text-align: center;
          border-radius: 2px;
          padding: 16px;
          position: fixed;
          z-index: 1;
          left: 50%;
          bottom: 30px;
          font-size: 17px;
        }  
      `}</style>
      <style jsx>{`
        #snackbar {
          visibility: ${open ? "visible" : "hidden"};
          -webkit-animation: fadein 0.5s, fadeout 0.5s 1s;
          animation: fadein 0.5s, fadeout 0.5s 1s;
        }

        @-webkit-keyframes fadein {
          from {bottom: 0; opacity: 0;} 
          to {bottom: 30px; opacity: 1;}
        }

        @keyframes fadein {
          from {bottom: 0; opacity: 0;}
          to {bottom: 30px; opacity: 1;}
        }

        @-webkit-keyframes fadeout {
          from {bottom: 30px; opacity: 1;} 
          to {bottom: 0; opacity: 0;}
        }

        @keyframes fadeout {
          from {bottom: 30px; opacity: 1;}
          to {bottom: 0; opacity: 0;}
        }  
      `}</style>
    </div>
  );
}

export default SnackBar;