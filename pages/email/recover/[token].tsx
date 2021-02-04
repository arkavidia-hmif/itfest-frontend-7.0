import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext, useState } from "react";
import { resetPassword } from "api/auth";
import InputField from "components/auth/InputField";
import Alert from "components/commons/Alert";
import FilledButton from "components/commons/FilledButton";
import { EmailResetPasswordStatus } from "interfaces/auth";
import { ApiContext } from "utils/context/api";
import AuthWrapper from "components/auth/AuthWrapper";
import { AuthContext } from "utils/context/auth";

const EmailRecover: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const authContext = useContext(AuthContext);

  const router = useRouter();
  const { token } = router.query;

  if (!token) return null;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    setError(null);

    if (authContext.authenticated) {
      setError("Sedang login dengan akun lain, harap logout terlebih dahulu");
      return;
    }

    if (password.length < 8) {
      setError("Kata sandi minimal 8 karakter");
      return;
    }

    if (password !== confirmPassword) {
      setError("Pengulangan kata sandi harus sama");
      return;
    }

    setLoading(true);

    resetPassword(apiContext.axios, password)
      .then(() => {
        setSuccess(true);
      })
      .catch((e) => {
        if (e.code === EmailResetPasswordStatus.INVALID_INPUT) {
          setError("Masukkan password tidak boleh kosong");
        } else {
          setError(e.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthWrapper title="Ganti Kata Sandi">
      {!success ? (
        <>
          <Alert error={error} />
          <p className="my-3 mb-4">
          Jangan khawatir, masukkan emailmu untuk mendapatkan tautan perubahan
          kata sandi
          </p>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              handleSubmit();
            }}
          >
            <InputField
              name="Kata Sandi"
              type="password"
              value={password}
              setValue={setPassword}
              placeholder="************"
            />
            <InputField
              name="Konfirmasi Kata Sandi"
              type="password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              placeholder="************"
            />
            <br />
            <FilledButton
              text="GANTI"
              loading={loading}
              padding="0.75em 1.5em"
              submit
            />
          </form>
        </>
      ) : (
        <>
          <p className="my-3">
          Sukses, silahkan login dengan kata sandi barumu
          </p>
          <Link href="/login">
            <FilledButton text="KEMBALI KE LOGIN" padding="0.75em 1.5em" />
          </Link>
        </>
      )}
      <style jsx>{`
      p {
        color: #7446a1;
      }
    `}</style>
    </AuthWrapper>
  );
};

export default EmailRecover;