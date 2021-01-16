import Layout from "components/commons/Layout";
import ProfileWrapper from "components/profile/ProfileWrapper";
import { Theme } from "styles/theme";

const Home: React.FC = () => {
  return (
    <Layout background={Theme.bgColors.whpipl} title="Profile">
      <ProfileWrapper />
    </Layout>
  );
};

export default Home;
