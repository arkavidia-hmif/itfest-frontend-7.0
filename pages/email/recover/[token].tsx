import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext, useState } from "react";
import { resetPassword } from "api/auth";
import InputField from "components/auth/InputField";
import Alert from "components/commons/Alert";
import FilledButton from "components/commons/FilledButton";
import { EmailResetPasswordStatus } from "interfaces/auth";
import { ApiContext } from "utils/context/api";

const EmailRecover: React.FC = () => {
  const apiContext = useContext(ApiContext);

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
    <>
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
    </>
  );
};

export default EmailRecover;