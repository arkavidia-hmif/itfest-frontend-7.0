import Link from "next/link";
import AuthWrapper from "components/auth/AuthWrapper";
import FilledButton from "components/commons/FilledButton";

const RegisterCompletePage: React.FC = () => {
  return (
    <AuthWrapper title="Registrasi Akun">
      <br />
      <p>
        Terima kasih telah mendaftar, silahkan cek email untuk tautan
        konfirmasi
      </p>
      <br />
      <Link href="/login">
        <FilledButton text="LOGIN" padding="0.75em 1.5em" />
      </Link>
      <style jsx>{`
        p { 
          color: #7446a1;
        }  
      `}</style>
    </AuthWrapper>
  );
};

export default RegisterCompletePage;