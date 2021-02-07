import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import Alert from "components/commons/Alert";
import AuthWrapper from "components/auth/AuthWrapper";
import InputField from "components/commons/InputField";
import FilledButton from "components/commons/FilledButton";
import { ApiContext } from "utils/context/api";
import { AuthContext } from "utils/context/auth";
import { isValidEmail } from "utils/validator";
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
        authContext.setAuth(data.data);
        if (redirectTarget.startsWith("?continue=")) {
          router.push(redirectTarget.replace("?continue=", ""));
        } else {
          router.push("/dashboard");
        }
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthWrapper title="Login IT FEST">
      <Alert error={error} />
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