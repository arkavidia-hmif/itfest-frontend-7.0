import VerifEmail from "./verif-email/VerifEmail";
import GradientSeparator from "components/auth/GradientSeparator";
import ColorfulHeader from "components/ColorfulHeader";
import Layout from "components/commons/Layout";
import { Theme } from "styles/theme";

const RegisterCompletePage: React.FC = () => {
  const title = "Registrasi Akun";
  return (
    <Layout title={title}>
      <div className="container">
        <ColorfulHeader color={Theme.headerColors.pipl} headingLevel={1} size="3rem">{title}</ColorfulHeader>
        <GradientSeparator />
        <br />
        <br />
        <p>
          Terima kasih telah mendaftar, silahkan cek email untuk tautan
          konfirmasi
      </p>
      <br />
        <VerifEmail />
      </div>
      <style jsx>{`
        p { 
          color: #7446a1;
        }  
      `}</style>
    </Layout>
  );
};

export default RegisterCompletePage;