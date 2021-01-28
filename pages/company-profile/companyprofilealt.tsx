import * as React from "react";
import Logo from "../../components/commons/company-profile/logo-title";
import AboutUs from "../../components/commons/company-profile/about-us";
import Buttons from "../../components/commons/company-profile/Buttons/buttonscombinedAlt";
import CombinedAlt from "../../components/commons/company-profile/combinedalt";
import GalleryAlt from "../../components/commons/company-profile/Gallery/galleryAlt";
import ChallengeDone from "../../components/commons/company-profile/Challenge/challenge";
import Tenants from "../../utils/constants/tenants";

const CompanyProfile: React.FC = () => {
  const done = true;
  return (
    <div className="container pb-4">
      <Logo type="alt" logo={Tenants[0].logo} title={Tenants[0].name} />
      <CombinedAlt/>
      <AboutUs type="alt" aboutUs={Tenants[0].aboutUs} />
      <Buttons done={done}/>
      <GalleryAlt items={Tenants[0].gallery} galleryText={Tenants[0].galleryText} />
      <ChallengeDone done={done}/>
    </div>
  );
};

export default CompanyProfile;