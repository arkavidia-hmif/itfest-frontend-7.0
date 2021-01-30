import * as React from "react";
import { GetServerSideProps } from "next";
import Logo from "../../components/commons/company-profile/logo-title";
import AboutUs from "../../components/commons/company-profile/about-us";
import Buttons from "../../components/commons/company-profile/Buttons/buttonscombinedAlt";
import CombinedAlt from "../../components/commons/company-profile/combinedalt";
import GalleryAlt from "../../components/commons/company-profile/Gallery/galleryAlt";
import ChallengeDone from "../../components/commons/company-profile/Challenge/challenge";
import Tenants from "../../utils/constants/tenants";
import { Tenant } from "interfaces/tenant";

interface Props {
  tenant: Tenant
}

const CompanyProfile: React.FC<Props> = ({ tenant }) => {
  const done = true;
  return (
    <div className="container pb-4">
      <Logo type="alt" logo={tenant.logo} title={tenant.name} />
      <CombinedAlt/>
      <AboutUs type="alt" aboutUs={tenant.aboutUs} />
      <Buttons done={done}/>
      <GalleryAlt items={tenant.gallery} galleryText={tenant.galleryText} />
      <ChallengeDone done={done}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async(context) => {
  const { slug } = context.query;
  const data = Tenants.filter(obj => {
    return obj.slug === slug;
  });

  return {
    props: {
      tenant: data[0],
    },
  };
};

export default CompanyProfile;