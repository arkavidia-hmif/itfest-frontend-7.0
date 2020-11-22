import { SidebarEntry } from "interfaces/sidebar";

interface Props {
  entry: SidebarEntry;
  index: number;
  selection: number;
  setSelection: (value: number) => void;
}

const SidebarItem: React.FC<Props> = ({
  entry,
  index,
  selection,
  setSelection,
}) => {
  return (
    <a>
      <li
        onClick={() => setSelection(index)}
        className={selection === index ? "active" : ""}
      >
        {selection === index && <span id="right-roller"></span>}
        <img src={entry.image} className="mr-3" />
        <p>{entry.text}</p>
      </li>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        img {
          width: 1rem;
          height: 1rem;
        }
        li {
          color: #161f24;
          cursor: pointer;
          padding: 0.5rem;
          padding-right: 0rem;
          position: relative;
          font-size: 0.875rem;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        li p {
          margin: 0;
          line-height: 1.5rem;
        }
        li.active {
          background: rgba(251, 188, 200, 0.3);
          margin: 0 -10px 0 -15px;
          padding: 0.5rem calc(0.5rem + 15px);
          padding-right: 0rem;
        }
        #right-roller {
          position: absolute;
          background: #fe94ab;
          opacity: 0.5;
          border-radius: 10px;
          width: 10px;
          height: 100%;
          top: 0;
          right: -5px;
        }
      `}</style>
    </a>
  );
};

export default SidebarItem;