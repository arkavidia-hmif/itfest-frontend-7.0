import { ParsedUrlQuery } from "querystring";
import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Logo from "../../components/commons/company-profile/LogoTitle/logo-title";
import LogoAlt from "../../components/commons/company-profile/LogoTitle/logo-title-alt";
import AboutUsAlt from "../../components/commons/company-profile/AboutUs/about-us-alt";
import ButtonsAlt from "../../components/commons/company-profile/Buttons/buttonscombinedAlt";
import CombinedMain from "../../components/commons/company-profile/combinedmain";
import CombinedAlt from "../../components/commons/company-profile/combinedalt";
import GalleryMain from "../../components/commons/company-profile/Gallery/gallery";
import GalleryAlt from "../../components/commons/company-profile/Gallery/galleryAlt";
import ChallengeDone from "../../components/commons/company-profile/Challenge/challenge";
import Tenants from "../../utils/constants/tenants";
import Layout from "components/commons/Layout";
import { Tenant } from "interfaces/tenant";

const Game = dynamic(() => import("components/game"), {
  ssr: false,
});
interface Props {
  tenant: Tenant;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const CompanyProfile: React.FC<Props> = ({ tenant }) => {
  const [done, setDone] = React.useState<boolean>(false);
  return (
    <Layout title={tenant.name}>
      {tenant.pageType === 0 ? (
        <div className="container pb-4">
          <Logo logo={tenant.logo} title={tenant.name} />
          <div>
            <CombinedMain
              done={!done}
              aboutUs={tenant.aboutUs}
              videoUrl={tenant.videoUrl}
              hiring={tenant.hiring}
              socialMedia={tenant.socialMedia}
            />
          </div>
          <GalleryMain items={tenant.gallery} />
          <ChallengeDone done={!done} />
        </div>
      ) : (
        <div className="container pb-4">
          <LogoAlt logo={tenant.logo} title={tenant.name} />
          <CombinedAlt videoUrl={tenant.videoUrl} />
          <AboutUsAlt aboutUs={tenant.aboutUs} />
          <ButtonsAlt
            done={done}
            hiring={tenant.hiring}
            socialMedia={tenant.socialMedia}
          />
          <GalleryAlt items={tenant.gallery} galleryText={tenant.galleryText} />
          <ChallengeDone done={done} />
        </div>
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Tenants.map((tenant) => ({
    params: { slug: tenant.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const data = Tenants.filter((obj) => {
    return obj.slug === slug;
  });

  return {
    props: {
      tenant: data[0],
    },
  };
};

export default CompanyProfile;
