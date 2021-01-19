import Link from "next/link";
import { useContext, useState } from "react";
import Alert from "../components/commons/Alert";
import AuthWrapper from "../components/auth/AuthWrapper";
import InputField from "../components/auth/InputField";
import FilledButton from "../components/commons/FilledButton";
import { RegisterStatus } from "../interfaces/auth";
import { ApiContext } from "../utils/context/api";
import { ApiError } from "interfaces/api";
import { register } from "api/auth";

const RegisterPage: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setError(null);

    if (name === "") {
      setError("Nama tidak boleh kosong");
      return;
    }

    if (email === "") {
      setError("Email tidak boleh kosong");
      return;
    }

    if (password === "") {
      setError("Password tidak boleh kosong");
      return;
    }

    if (password.length < 8) {
      setError("Password harus lebih dari 8 karakter");
      return;
    }

    setLoading(true);

    register(apiContext.axios, name, email, password)
      .then(() => {
        setSuccess(true);
      })
      .catch((e) => {
        if (e instanceof ApiError && e.code === RegisterStatus.EMAIL_USED) {
          setError("Email sudah digunakan");
          return;
        }
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthWrapper title="Registrasi Akun">
      {success ? (
        <>
          <br />
          <p>
            Terima kasih telah mendaftar, silahkan cek email untuk tautan
            konfirmasi
          </p>
          <Link href="/login">
            <FilledButton text="LOGIN" padding="0.75em 1.5em" />
          </Link>
        </>
      ) : (
        <>
          <Alert error={error} />
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              handleSubmit();
            }}
          >
            <InputField
              name="Nama Lengkap"
              value={name}
              setValue={setName}
              placeholder="John Doe"
            />
            <InputField
              name="Alamat Email"
              value={email}
              setValue={setEmail}
              placeholder="John Doe"
            />
            <InputField
              type={"password"}
              name="Kata Sandi"
              value={password}
              setValue={setPassword}
              placeholder="********"
            />
            <br />
            <div className="row">
              <div className="col-6">
                <FilledButton
                  text="DAFTAR"
                  padding="0.75em 1.5em"
                  loading={loading}
                  submit
                />
              </div>
              <div className="col-6" style={{ textAlign: "right" }}>
                <a href="/login">
                  <b>Sudah punya akun ?</b>
                </a>
              </div>
            </div>
          </form>
        </>
      )}
      <style jsx>{`
        .row {
          align-items: center;
        }
        form {
          margin-bottom: 3.5rem;
        }
        a {
          color: #7446a1;
        }

        p {
          color: #7446a1;
        }
      `}</style>
    </AuthWrapper>
  );
};

export default RegisterPage;
