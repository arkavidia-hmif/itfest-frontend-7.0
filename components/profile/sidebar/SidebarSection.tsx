import SidebarItem from "./SidebarItem";
import { SidebarGroup } from "interfaces/sidebar";

interface Props {
  selection: number;
  setSelection: (value: number) => void;
  data: SidebarGroup[];
}

const SidebarSection: React.FC<Props> = ({ data, selection, setSelection }) => {
  let i = -1;
  let j = -1;
  return (
    <>
      {data.map((entry) => {
        j += 1;
        return (
          <div className="dropdown" key={j}>
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
            `}</style>
          </div>
        );
      })}
    </>
  );
};

export default SidebarSection;