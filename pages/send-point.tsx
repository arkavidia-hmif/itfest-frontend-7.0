import { useRouter } from "next/dist/client/router";
import { useContext, useState, useEffect } from "react";
import { UserData } from "../interfaces/auth";
import { givePoint } from "../api/point";
import AuthWrapper from "../components/auth/AuthWrapper";
import InputField from "../components/auth/InputField";
import FilledButton from "../components/commons/FilledButton";
import { ApiContext } from "utils/context/api";
import { AuthContext } from "utils/context/auth";
import { Theme } from "styles/theme";
import { ApiResponse } from "interfaces/api";
import Alert from "components/commons/Alert";

const SendPoint: React.FC = () => {

  const authContext = useContext(AuthContext);
  const apiContext = useContext(ApiContext);

  const router = useRouter();
  const [visitor, setVisitor] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [point, setPoint] = useState("");

  // Jika tidak admin tidak bisa akses page
  useEffect(() => {
    if (!authContext.authenticated || authContext.auth?.user.role !== "admin") {
      router.push("/");
    }
  });

  // Ambil data all visitor dan masukkan ke state visitor
  useEffect(() => {
    apiContext.axios
      .get("user/visitor")
      .then((data) => {
        setVisitor(data.data.data.array);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const findId = (visitor: Array<UserData>, email: string) => {
    const user = visitor.find(object => object.email === email);

    if (user !== undefined) {
      return user.id;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const id = findId(visitor, email);

    if (id !== undefined && point !== undefined) {
      const givePromise: Promise<ApiResponse<void>> = givePoint(apiContext.axios, id, point);

      givePromise.then(() => {
        setSuccess(true);
        setLoading(false);
      }).catch((err) => {
        setError(err.message);
        setSuccess(false);
        setLoading(false);
      });
    } else {
      setError("Input tidak valid");
      setSuccess(false);
      setLoading(false);
    }
  };

  return (
    <AuthWrapper title="Send Point">
      <Alert error={success ? "Poin berhasil dikirim" : error} color={success ? Theme.alertColors.greenAlert : Theme.alertColors.redAlert} />
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
        }}
      >
        <InputField
          name="Email"
          value={email}
          setValue={setEmail}
          placeholder="Email Penerima"
        />
        <InputField
          name="Jumlah Poin"
          value={point}
          setValue={setPoint}
          placeholder="Jumlah Poin Dikirim"
        />
        <FilledButton text="KIRIM" loading={loading} padding="0.75em 1.5em" submit />
      </form>
    </AuthWrapper>
  );
};

export default SendPoint;