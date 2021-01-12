import { RenderArrowProps } from "react-elastic-carousel";

const MerchStoreCarouselButton: React.FC<RenderArrowProps> = ({ type, onClick, isEdge }) => {
  const buttonImgSrc = `/img/merchstore/${type.toLowerCase()}_button.png`;

  return (
    <div className="next-btn-container">
      <button onClick={onClick} disabled={isEdge}>
        <img
          src={buttonImgSrc}
          className="next-icon"
        />
      </button>
      <style jsx>{`
        .next-btn-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .next-btn-container button {
          background: none;
          border: none;
        }

        .next-btn-container button:focus {
          outline: none;
        }

        .next-icon {
          width: 2rem;
          border-radius: 50%;
          box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default MerchStoreCarouselButton;