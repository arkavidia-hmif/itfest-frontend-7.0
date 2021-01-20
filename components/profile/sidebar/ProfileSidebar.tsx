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
      <div className="row">
        <div className="col-lg-11 col-md-12 side-item">
          <SidebarSection
            data={sidebarData}
            selection={selection}
            setSelection={setSelection}
          />
          <a>Logout</a>
        </div>
        <div id="right-roller">
        </div>
      </div>
      <style jsx>{`
        .side-item {
          text-align: center;
        }
        #right-roller {
          position: absolute;
          background: linear-gradient(45deg, #623FA2 0%, #fe789a 100%);
          border-radius: 0.2em;
          width: 0.4em;
          height: 100%;
          right: 1em;
        }
        a {
          color: #ac0b3d;
          font-family: viga;
          font-size: 1.3rem;
          text-decoration: none;
        }
        @media screen and (max-width: 991px) {
          #right-roller {
            display: none;
          }
        }
        @media screen and (max-width: 767px) {
          a {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileSidebar;