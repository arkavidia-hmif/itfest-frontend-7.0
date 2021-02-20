import { useContext, useState } from "react";
import useSWR from "swr";
import ProfileSidebar from "./sidebar/ProfileSidebar";
import PrimaryField from "./PrimaryField";
import PersonalField from "./PersonalField";
import ColorfulHeader from "components/commons/ColorfulHeader";
import { Theme } from "styles/theme";
import { ApiContext } from "utils/context/api";
import { getProfile, PROFILE_URL } from "api/profile";
import Alert from "components/commons/Alert";
import Spinner from "components/commons/Spinner";

const ProfileWrapper: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const [selection, setSelection] = useState(0);
  const getComponent = () => {
    if (selection === 0) {
      return <PrimaryField />;
    }
    if (selection === 1) {
      return <PersonalField />;
    }
  };

  const { data: profile, error: errorProfile } = useSWR(PROFILE_URL, () =>
    getProfile(apiContext.axios)
  );

  if (errorProfile) return <Alert error="Masalah koneksi" />;
  if (!profile) return <Spinner height="200px" />;

  return (
    <div className="container main-profile">
      <div className="row">
        <div className="col-12">
          <ColorfulHeader
            color={Theme.headerColors.pipl}
            headingLevel={6}
            size="2rem"
          >
            Hi, {profile?.name}!
          </ColorfulHeader>
        </div>
        <div className="col-1 points mr-1">
          <h2 id="point">
            Points<div className="indicator"></div>
          </h2>
        </div>
        <div className="col-9">
          <h2>{profile?.point}</h2>
        </div>
        <div className="col-lg-4 col-xs-12 mt-4">
          <ProfileSidebar setSelection={setSelection} selection={selection} />
        </div>
        <div className="col-lg-8 col-xs-12 mt-4">{getComponent()}</div>
      </div>
      <style jsx>{`
        .main-profile {
          height: 90vh;
          background: url(/img/bg-white.png);
          background-position: center 13em;
          background-repeat: no-repeat;
          background-size: 60%;
        }
        .points {
          max-width: 4.5em;
        }
        #point {
          color: #441985;
        }
        h2 {
          color: #441985;
        }
        .indicator {
          position: absolute;
          width: 100%;
          height: 0.25em;
          background: linear-gradient(90deg, #fe789a 0%, #623fa2 100%);
        }
        @media screen and (max-width: 991px) {
          .main-profile {
            background: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileWrapper;
