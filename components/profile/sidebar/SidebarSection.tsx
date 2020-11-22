import SidebarItem from "./SidebarItem";
import { SidebarGroup } from "interfaces/sidebar";

interface Props {
  selection: number;
  setSelection: (value: number) => void;
  data: SidebarGroup[];
}

const SidebarSection: React.FC<Props> = ({ data, selection, setSelection }) => {
  let i = -1;
  return (
    <>
      {data.map((entry) => {
        return (
          <div className="dropdown">
            <ul className="list">
              {entry.item.map((item) => {
                i += 1;
                return (
                  <SidebarItem
                    key={i}
                    entry={item}
                    index={i}
                    selection={selection}
                    setSelection={setSelection}
                  />
                );
              })}
            </ul>
            <style jsx>{`
              ul {
                list-style: none;
              }
              .dropdown {
                padding: 0;
              }
              .list {
                padding: 0;
              }
              .title {
                color: rgba(0, 0, 0, 0.6);
                font-size: 1.2rem;
                line-height: 1.4rem;
              }
            `}</style>
          </div>
        );
      })}
    </>
  );
};

export default SidebarSection;