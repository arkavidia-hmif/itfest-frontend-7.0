import { SidebarEntry } from "interfaces/sidebar";
import SidebarSection from "./SidebarSection";

const sidebarTop = {
  name: "Tim",
  item: [
    {
      text: "Primary Data",
      image: "/img/dashboard/submission/tim.png",
    },
    {
      text: "Personal Data",
      image: "/img/dashboard/submission/anggota.png",
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
  )
}

export default ProfileSidebar;