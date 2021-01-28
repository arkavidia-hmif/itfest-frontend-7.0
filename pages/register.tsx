import Link from "next/link";
import { useContext, useState } from "react";
import Alert from "../components/commons/Alert";
import AuthWrapper from "../components/auth/AuthWrapper";
import InputField from "../components/auth/InputField";
import FilledButton from "../components/commons/FilledButton";
import { RegisterStatus } from "../interfaces/auth";
import { ApiContext } from "../utils/context/api";
import { ApiError } from "interfaces/api";
import { registerVisitor } from "api/auth";

const RegisterPage: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [telp, setTelp] = useState("");
  const [institute, setInstitute] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setError(null);

    if (email === "") {
      setError("Email tidak boleh kosong");
      return;
    }

    if (name === "") {
      setError("Nama lengkap tidak boleh kosong");
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

    if (telp === "") {
      setError("Nomor telepon tidak boleh kosong");
      return;
    }

    if (institute === "") {
      setError("Institusi tidak boleh kosong");
      return;
    }
  
    setLoading(true);

    registerVisitor(apiContext.axios, name, email, password, telp, institute)
      .then(() => {
        setSuccess(true);
      })
      .catch((e) => {
        if (e instanceof ApiError && e.code === RegisterStatus.EMAIL_USED) {
          setError("Email sudah digunakan");
          return;
        }
        else if (e instanceof ApiError && e.code === RegisterStatus.INVALID_NAME) {
          setError("Nama lengkap hanya dapat memuat huruf, angka, atau spasi");
          return;
        }
        else if (e instanceof ApiError && e.code === RegisterStatus.INVALID_EMAIL) {
          setError("Email tidak valid");
          return;
        }
        else if (e instanceof ApiError && e.code === RegisterStatus.SERVER_ERROR) {
          setError("Server Error");
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
          {(typeof error === "string") ?
            <Alert error={error} />
            : null}
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
              name="Nama Lengkap"
              value={name}
              setValue={setName}
              placeholder="John Doe"
            />
            <InputField
              type={"password"}
              name="Kata Sandi"
              value={password}
              setValue={setPassword}
              placeholder="********"
            />
            <InputField
              name="Nomor Telpon"
              value={telp}
              setValue={setTelp}
              placeholder="081234567890"
            />
            <InputField
              name="Institusi"
              value={institute}
              setValue={setInstitute}
              placeholder="John University"
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
