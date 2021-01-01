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
        
        <img src={entry.image} className="mr-3" />
        <p>{entry.text}</p>
      </li>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
        li {
          color: #161f24;
          cursor: pointer;
          padding: 0.75rem;
          position: relative;
          font-size: 1.1rem;
          font-family: viga;
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
          padding: 0.75rem calc(0.75rem + 15px);
          padding-right: 0rem;
          border-radius: 1rem;
        }
        @media screen and (max-width: 767px) {
          li {
            font-size: 1rem;
          }
          img {
            max-height: 1.25rem;
            max-width: 1.25rem;
          }
        }
      `}</style>
    </a>
  );
};

export default SidebarItem;