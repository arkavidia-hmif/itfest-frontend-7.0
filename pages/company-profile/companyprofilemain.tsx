import * as React from "react";
import Logo from "../../components/commons/company-profile/main/logo-title";
import CombinedComponent from "../../components/commons/company-profile/main/combinedmain";
import GalleryMain from "../../components/commons/company-profile/main/Gallery/gallery-main";
import ChallengeDone from "../../components/commons/company-profile/main/Challenge/challenge";

const CompanyProfile: React.FC = () => {
  return (
    <div>
      <Logo type="main"/>
      <CombinedComponent/>
      <GalleryMain/>
      <ChallengeDone done={false}/>
      <style jsx>{`
        .grid-container {
            display: grid;
        }
      `}</style>
    </div>
  );
};

export default CompanyProfile;