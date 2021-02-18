import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "components/commons/Layout";
import ProfileWrapper from "components/profile/ProfileWrapper";
import { Theme } from "styles/theme";
import { AuthContext } from "utils/context/auth";

const Home: React.FC = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();
  if (!authContext.authenticated) {
    router.push("/login?continue=/profile");
  }

  return (
    <Layout background={Theme.bgColors.whpipl} title="Profile">
      <ProfileWrapper />
    </Layout>
  );
};

export default Home;
