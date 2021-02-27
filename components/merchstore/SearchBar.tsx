
interface Props {
  value : string,
  OnChange: (newValue: string) => void,
}

const SearchBar : React.FC<Props> = ({ value, OnChange }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Cari Startup" 
        value={value}
        onChange={(e) => OnChange(e.target.value)}
      />
      <style jsx>{`
        input {
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
          border-radius: 51px;
          width: 100%;
          position: relative;
          padding: .8rem 2.5rem;
          background: white;
          font-size: 1rem;
          outline: none;
          border: 3px solid white;
        }

        img {
          width: 2rem;
          float: right;
        }

        p {
          margin-block-start: 0;
          margin-block-end: 0;
        }

        @media only screen and (max-width: 576px) {
          .main {
            width: 90%;
          }
        }

      `}</style>
    </div> 
  ); 
};

export default SearchBar;