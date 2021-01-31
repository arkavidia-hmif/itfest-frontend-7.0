import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from 'querystring';
import Logo from "../../components/commons/company-profile/LogoTitle/logo-title-alt";
import AboutUs from "../../components/commons/company-profile/AboutUs/about-us-alt";
import Buttons from "../../components/commons/company-profile/Buttons/buttonscombinedAlt";
import CombinedAlt from "../../components/commons/company-profile/combinedalt";
import GalleryAlt from "../../components/commons/company-profile/Gallery/galleryAlt";
import ChallengeDone from "../../components/commons/company-profile/Challenge/challenge";
import Tenants from "../../utils/constants/tenants";
import Layout from "components/commons/Layout";
import { Tenant } from "interfaces/tenant";

interface Props {
  tenant: Tenant
}

interface Params extends ParsedUrlQuery {
  slug: string,
}

const CompanyProfile: React.FC<Props> = ({ tenant }) => {
  const done = true;
  return (
    <Layout title={tenant.name}>
      <div className="container pb-4">
        <Logo logo={tenant.logo} title={tenant.name} />
        <CombinedAlt videoUrl={tenant.videoUrl} />
        <AboutUs aboutUs={tenant.aboutUs} />
        <Buttons done={done}/>
        <GalleryAlt items={tenant.gallery} galleryText={tenant.galleryText} />
        <ChallengeDone done={done}/>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async() => {
  const paths = Tenants.map((tenant) => ({
    params : { slug: tenant.slug }
  }));

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const { slug } = context.params as Params;
  const data = Tenants.filter(obj => {
    return obj.slug === slug;
  });

  return {
    props: {
      tenant: data[0],
    },
  };
}

export default CompanyProfile;