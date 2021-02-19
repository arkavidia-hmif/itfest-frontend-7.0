import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import Layout from "components/commons/Layout";
import ProfileWrapper from "components/profile/ProfileWrapper";
import { Theme } from "styles/theme";
import { AuthContext } from "utils/context/auth";

const Profile: React.FC = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authContext.authenticated) {
      router.push("/login?continue=/profile");
    }
  });

  return (
    <Layout background={Theme.bgColors.whpipl} title="Profile">
      <ProfileWrapper />
    </Layout>
  );
};

export default Profile;
