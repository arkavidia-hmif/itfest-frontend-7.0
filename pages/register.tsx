import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import Alert from "../components/commons/Alert";
import AuthWrapper from "../components/auth/AuthWrapper";
import InputField from "../components/commons/InputField";
import FilledButton from "../components/commons/FilledButton";
import { RegisterStatus } from "../interfaces/auth";
import { ApiContext } from "../utils/context/api";
import { isValidName, isValidPhone, isValidEmail, isValidString } from "../utils/validator";
import { ApiError, StandardError } from "interfaces/api";
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
  const [errorStatus, setErrorStatus] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setError(null);

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
        else if (e instanceof ApiError && e.code === StandardError.ERROR) {
          setError("Server Error");
          return;
        }
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isValidString(email) && !isValidEmail(email)) {
      setError("Email tidak valid");
      setErrorStatus(true);
      return;
    } else if (isValidString(name) && !isValidName(name)) {
      setError("Nama lengkap hanya dapat memuat huruf, angka, atau spasi");
      setErrorStatus(true);
      return;
    } else if (isValidString(telp) && !isValidPhone(telp)) {
      setError("Nomor telepon tidak valid");
      setErrorStatus(true);
      return;
    } else if (isValidString(password) && password.length < 8) {
      setError("Password harus lebih dari 8 karakter");
      setErrorStatus(true);
      return;
    } else if (!isValidString(email) || !isValidString(name) || !isValidString(password) || !isValidString(telp) || !isValidString(institute)) {
      setErrorStatus(true);
      setError(null);
    } else if (isValidString(email) && isValidString(name) && isValidString(password) && isValidString(telp) && isValidString(institute)){
      setError(null);
      setErrorStatus(false);
    } else {
      setError(null);
    }
  },[email, name, telp, password, institute]);

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
            <label>Alamat Email</label>
            <InputField
              value={email}
              setValue={setEmail}
              placeholder="johndoe@email.com"
            />
            <label>Nama Lengkap</label>
            <InputField
              value={name}
              setValue={setName}
              placeholder="John Doe"
            />
            <label>Kata Sandi</label>
            <InputField
              type={"password"}
              value={password}
              setValue={setPassword}
              placeholder="********"
            />
            <label>Nomor Telepon</label>
            <InputField
              value={telp}
              setValue={setTelp}
              placeholder="081234567890"
            />
            <label>Institusi</label>
            <InputField
              value={institute}
              setValue={setInstitute}
              placeholder="John University"
            />
            <br />
            <div className="row">
              <div className="col-6">
                {(errorStatus) ?
                  <b className="error-text">MASIH ADA KESALAHAN/BELUM TERISI</b>
                  : <FilledButton
                    text="DAFTAR"
                    padding="0.75em 1.5em"
                    loading={loading}
                    submit
                  />
                }
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

        .error-text {
          color: #B41A83;
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

export default RegisterPage;
