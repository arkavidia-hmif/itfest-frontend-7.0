import { useContext } from "react";
import useSWR from "swr";
import ColorfulHeader from "components/commons/ColorfulHeader";
import { Theme } from "styles/theme";
import { ApiContext } from "utils/context/api";
import { getProfile, PROFILE_URL } from "api/profile";
import Alert from "components/commons/Alert";
import Spinner from "components/commons/Spinner";

const ProfileHeader: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const { data: profile, error: errorProfile } = useSWR(PROFILE_URL, () =>
    getProfile(apiContext.axios)
  );

  if (errorProfile) return <Alert error="Masalah koneksi" />;
  if (!profile) return <Spinner height="200px" />;

  return (
    <>
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
      <style jsx>{`
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
    </>
  );
};

export default ProfileHeader;
