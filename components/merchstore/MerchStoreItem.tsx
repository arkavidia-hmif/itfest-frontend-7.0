export interface Props {
  name: string;
  image: string;
  price: string;
}

const MerchStoreItem: React.SFC<Props> = ({ name, image, price }) => {
  return (
    <div>
      <div className="store-item">
        <div className="item-image">
          <img src={image} />
          <button>Buy</button>
        </div>

        <h4 className="mt-2 mb-2">{name}</h4>
        <p className="mt-4 mb-2">{price}</p>
      </div>
      <style jsx>
        {`
          .store-item {
            width: 6.75rem;
          }

          .store-item button {
            display: none;
          }

          .item-image {
            position: relative;
            display: flex;
            justify-content: center;
          }

          .store-item:hover button {
            position: absolute;
            top: 40%;
            border: none;
            border-radius: 15px;
            display: block;
            color: white;
            font-size: 1rem;
            font-family: Viga;
            font-style: normal;
            font-weight: normal;
            background: #fe789a;
            padding: 0.5rem 2rem;
          }

          .store-item:hover button:focus {
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default MerchStoreItem;
