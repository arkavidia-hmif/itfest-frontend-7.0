interface Props {
  open : boolean;
}

const SnackBar : React.FC<Props> = ({ open }) => {

  return (
    <div id="snackbar">
      Barang ditambahkan ke keranjang
      <style jsx>{`
        #snackbar {
          position: fixed;
          min-width: 250px;
          margin-left: -125px;
          left: 50%;
          bottom: 30px;
          z-index: 1;
          background-color: #441985;
          color: #fff;
          text-align: center;
          border-radius: 2px;
          padding: 1rem;
          font-size: 1rem;
        }  

        @media (max-width: 400px) {
          #snackbar {
            margin-left: -135px;
          }
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
};

export default SnackBar;