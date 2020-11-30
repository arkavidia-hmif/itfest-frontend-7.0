import * as React from "react";
import Logo from "../../components/commons/company-profile/logo-title";
import CombinedComponent from "../../components/commons/company-profile/combinedmain";
import GalleryMain from "../../components/commons/company-profile/Gallery/gallery-main";
import ChallengeDone from "../../components/commons/company-profile/Challenge/challenge";

const CompanyProfile: React.FC = () => {
  const done = true;
  return (
    <div>
      <Logo type="main"/>
      <CombinedComponent done={done}/>
      <GalleryMain/>
      <ChallengeDone done={done}/>
      <style jsx>{`
        .grid-container {
            display: grid;
        }
      `}</style>
    </div>
  );
};

export default CompanyProfile;