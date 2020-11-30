import * as React from "react";
import Logo from "../../components/commons/company-profile/logo-title";
import AboutUs from "../../components/commons/company-profile/about-us";
import Buttons from "../../components/commons/company-profile/Buttons/buttonscombined";
import Video from "../../components/commons/company-profile/Video/video";
import GalleryAlt from "../../components/commons/company-profile/Gallery/gallery-alt";
import ChallengeDone from "../../components/commons/company-profile/Challenge/challenge";

const CompanyProfile: React.FC = () => {
  const done = true;
  return (
    <div>
      <Logo type="alt"/>
      <Video type="alt"/>
      <AboutUs type="alt"/>
      <Buttons type="alt" done={done}/>
      <GalleryAlt/>
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