import SidebarSection from "./SidebarSection";
import { SidebarEntry } from "interfaces/sidebar";

const sidebarTop = {
  item: [
    {
      text: "Primary Data",
      image: "/img/profile/primary.png",
    },
    {
      text: "Personal Data",
      image: "/img/profile/personal.png",
    },
  ] as SidebarEntry[],
};

interface props {
  selection: number;
  setSelection: (selection: number) => void;
}

const ProfileSidebar: React.FC<props> = ({selection, setSelection}) => {
  const sidebarData = [sidebarTop];

  return (
    <div className="container">
      <SidebarSection
        data={sidebarData}
        selection={selection}
        setSelection={setSelection}
      />
      <p>logout</p>
    </div>
  );
};

export default ProfileSidebar;