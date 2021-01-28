import * as React from "react";
import Logo from "../../components/commons/company-profile/logo-title";
import CombinedComponent from "../../components/commons/company-profile/combinedmain";
import GalleryMain from "../../components/commons/company-profile/Gallery/gallery";
import ChallengeDone from "../../components/commons/company-profile/Challenge/challenge";
import Tenants from "../../utils/constants/tenants";

const CompanyProfile: React.FC = () => {
  const done = false;
  return (
    <div className="container pb-4">
      <Logo type="main" logo={Tenants[1].logo} title={Tenants[1].name} />
      <div>
        <CombinedComponent done={done} aboutUs={Tenants[1].aboutUs} />
      </div>
      <GalleryMain items={Tenants[1].gallery} />
      <ChallengeDone done={done}/>
    </div>
  );
};

export default CompanyProfile;