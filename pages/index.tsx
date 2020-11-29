import * as React from "react";
import CompanyProfile from "./company-profile/companyprofilealt";
import Layout from "components/commons/Layout";

const Home: React.FC = () => {
  return (
    <>
      <Layout title="Home">
        <CompanyProfile/>
      </Layout>;
    </>
  );
};

export default Home;
