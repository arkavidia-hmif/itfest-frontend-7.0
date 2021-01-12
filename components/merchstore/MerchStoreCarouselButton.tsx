import { RenderArrowProps } from "react-elastic-carousel";
import { Dimen } from "styles/dimen";

const MerchStoreCarouselButton: React.FC<RenderArrowProps> = ({ type, onClick, isEdge }) => {
  const buttonImgSrc = `/img/merchstore/${type.toLowerCase()}_button.png`;

  return (
    <div className="d-flex flex-column justify-content-center next-btn-container">
      <button onClick={onClick} disabled={isEdge} className="carousel-btn">
        <img
          src={buttonImgSrc}
          className="carousel-icon"
        />
      </button>
      <style jsx>{`
        .carousel-btn {
          width: 2.5rem;
          height: 2.5rem;
          padding: 0;
          background: none;
          border: none;
        }

        .carousel-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
          transition: box-shadow 200ms ease-out;
          transition: opacity 200ms ease-out;
          padding: 0.5rem;
        }

        .carousel-btn:disabled .carousel-icon{
          opacity: 0;
        }

        .carousel-btn:not([disabled]) .carousel-icon:hover {
          box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: ${Dimen.mdBreakpoint}){
          .carousel-icon {
            width: 1rem;
            height: 2rem;
            border-radius: 0;
            box-shadow: none;
            padding: 0;
          }

          .carousel-icon:hover{
            box-shadow: none !important;
          }

          .carousel-btn {
            width: 1rem;
            height: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MerchStoreCarouselButton;