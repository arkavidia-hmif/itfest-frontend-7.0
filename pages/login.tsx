import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import Alert from "../components/commons/Alert";
import AuthWrapper from "../components/auth/AuthWrapper";
import InputField from "../components/auth/InputField";
import FilledButton from "../components/commons/FilledButton";
import { LoginStatus } from "../interfaces/auth";
import { ApiContext } from "../utils/context/api";
import { AuthContext } from "../utils/context/auth";
import { isValidEmail } from "../utils/validator";
import { ApiError } from "interfaces/api";
import { login } from "api/auth";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const authContext = useContext(AuthContext);
  const apiContext = useContext(ApiContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    setError(null);

    if (!isValidEmail(email)) {
      setError("Alamat email invalid");
      return;
    }

    setLoading(true);
    const redirectTarget = window.location.search;

    login(apiContext.axios, email, password)
      .then((data) => {
        authContext.setAuthenticated(true);
        authContext.setAuth(data);
        if (redirectTarget.startsWith("?continue=")) {
          router.push(redirectTarget.replace("?continue=", ""));
        } else {
          router.push("/dashboard");
        }
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.code === LoginStatus.INVALID_CREDS) {
            setError("Email dan/atau kata sandi salah");
            return;
          } else if (e.code === LoginStatus.EMAIL_NOT_CONFIRMED) {
            setError("Email belum dikonfirmasi");
            return;
          }

          setError(e.message);
        } else {
          setError(e);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthWrapper title="Login ke Dashboard">
      <Alert error={error} />
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
        }}
      >
        <InputField
          name="Alamat Email"
          value={email}
          setValue={setEmail}
          placeholder="johndoe@email.com"
        />
        <InputField
          name="Kata Sandi"
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="***********"
        />
        <br />
        <FilledButton text="LOGIN" loading={loading} padding="0.75em 1.5em" submit />
        <p className="login-link mt-4 mb-0">
          Lupa kata sandi ?{" "}
          <a href="/forget-password">
            <b>Reset</b>
          </a>
        </p>
        <p className="login-link">
          Belum terdaftar ?{" "}
          <a href="/register">
            <b>Daftar</b>
          </a>
        </p>
      </form>
      <style jsx>{`
        .login-link {
          color: #7446a1;
        }

        .login-link a {
          color: #fe789a;
        }
      `}</style>
    </AuthWrapper>
  );
};

export default LoginPage;