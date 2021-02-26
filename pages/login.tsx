import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Alert from "components/commons/Alert";
import AuthWrapper from "components/auth/AuthWrapper";
import InputField from "components/commons/InputField";
import FilledButton from "components/commons/FilledButton";
import { ApiContext } from "utils/context/api";
import { AuthContext } from "utils/context/auth";
import { isValidEmail } from "utils/validator";
import { login } from "api/auth";
import { getProfile } from "api/profile";
import { Theme } from "styles/theme";
import { ApiError } from "interfaces/api";
import { LoginStatus } from "interfaces/auth";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const authContext = useContext(AuthContext);
  const apiContext = useContext(ApiContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verifSuccess, setVerifSuccess] = useState<string | null>(null);
  const [showVerif, setShowVerif] = useState<boolean>(false);

  useEffect(() => {
    if (authContext.authenticated) {
      router.push("/profile");
    }

    if (window.location.hash === "#verif") {
      setVerifSuccess("Verifikasi sukses, silahkan login");
    }

    const redirectTarget = window.location.search;
    if (redirectTarget.startsWith("?continue=")) {
      setError("Harap login dulu");
    }
  }, []);

  const handleSubmit = async () => {
    setError(null);
    setShowVerif(false);

    if (!isValidEmail(email)) {
      setError("Alamat email invalid");
      return;
    }

    setLoading(true);
    const redirectTarget = window.location.search;

    try {
      const loginResult = await login(apiContext.axios, email, password);
      const profileResult = await getProfile(apiContext.axios, loginResult.jwt);

      authContext.login(loginResult, profileResult);

      if (redirectTarget.startsWith("?continue=")) {
        router.push(redirectTarget.replace("?continue=", ""));
      } else {
        router.push("/profile");
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);

      if (e instanceof ApiError && e.code === LoginStatus.EMAIL_NOT_CONFIRMED) {
        setShowVerif(true);
      }
    }
  };

  return (
    <AuthWrapper title="Login">
      <Alert error={error} />
      <Alert error={verifSuccess} color={Theme.alertColors.greenAlert} />
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
        }}
      >
        <label>Alamat Email</label>
        <InputField
          value={email}
          setValue={setEmail}
          placeholder="johndoe@email.com"
        />
        {showVerif && <Link href={`/register-complete?email=${email}`}><a><br /><b>(Klik untuk verifikasi)</b></a></Link>}
        <div className="mb-4" />
        <label>Kata Sandi</label>
        <InputField
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="***********"
        />
        <br />
        <FilledButton text="LOGIN" loading={loading} padding="0.75em 1.5em" submit />
        {/* <p className="login-link mt-4 mb-0">
          Lupa kata sandi ?{" "}
          <a href="/forget-password">
            <b>Reset</b>
          </a>
        </p> */}
        <p className="login-link mt-4 mb-0">
          Belum terdaftar ?{" "}
          <Link href="/register">
            <a>
              <b>Daftar</b>
            </a>
          </Link>
        </p>
      </form>
      <style jsx>{`
        .login-link {
          color: #7446a1;
        }

        a {
          color: #fe789a;
        }

        label {
          font-style: normal;
          font-weight: bold;
          font-size: 1.2rem;
          line-height: .7rem;
          display: block;
          color: #000000;
          margin-top: 0.8rem;
          margin-bottom: .9rem;
        }
      `}</style>
    </AuthWrapper>
  );
};

export default LoginPage;