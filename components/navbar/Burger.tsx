import { Dimen } from "styles/dimen";

interface Props {
  open: boolean;
  setOpen: (input: boolean) => void;
}

const Burger: React.FC<Props> = ({ open, setOpen }) => (
  <div className="floating">
    <button className="burger mr-3" onClick={() => setOpen(!open)}>
      <div className="lines" />
      <div className="lines" />
      <div className="lines" />
    </button>

    <style jsx>{`
      .floating {
        position: absolute;
        left: 2rem;
      }
      .burger {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
      }

      .burger:focus {
        outline: none;
      }

      .lines {
        height: 0.2rem;
        background: #000;
        border-radius: 10px;
        transition: all 0.3s linear;
        transform-origin: 1px;
      }

      .lines:first-child {
        width: ${open ? "1rem" : "2rem"};
      }

      .lines:nth-child(2) {
        width: ${open ? "1.5rem" : "1.5rem"};
      }

      .lines:nth-child(3) {
        width: ${open ? "2rem" : "1rem"};
      }

      @media (max-width: ${Dimen.navbarBreakpoint}) {
        .floating {
          position: absolute;
          left: 1rem;
        }
      }
    `}</style>
  </div>
);

export default Burger;
