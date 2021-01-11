import * as React from "react";
import Logo from "../../components/commons/company-profile/logo-title";
import CombinedComponent from "../../components/commons/company-profile/combinedmain";
import GalleryMain from "../../components/commons/company-profile/Gallery/gallery";
import ChallengeDone from "../../components/commons/company-profile/Challenge/challenge";

const CompanyProfile: React.FC = () => {
  const done = false;
  return (
    <div className="container pb-4">
      <Logo type="main"/>
      <div>
        <CombinedComponent done={done}/>
      </div>
      <GalleryMain main={true}/>
      <ChallengeDone done={done}/>
    </div>
  );
};

export default CompanyProfile;