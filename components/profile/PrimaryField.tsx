import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import InputField from "./InputField";
import { editProfile, getProfile, PROFILE_URL } from "api/profile";
import { ApiContext } from "utils/context/api";
import { Theme } from "styles/theme";
import FilledButton from "components/commons/FilledButton";
import profileAttributes from "utils/constants/profile-attributes";
import { checkTruth } from "utils/transformer/profile";
import { UserData } from "interfaces/auth";
import { AuthContext } from "utils/context/auth";
import useFormInput from "utils/hooks/useFormInput";
import Alert from "components/commons/Alert";
import Success from "components/commons/Success";
import Spinner from "components/commons/Spinner";

const PrimaryField: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const { auth, setAuth } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);
  const email = useFormInput("");
  const telp = useFormInput("");
  const name = useFormInput("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    isEdit ? setSuccess(false) : setError("");
  }, [setError, setSuccess, isEdit]);

  const { data: profile, error: errorProfile, mutate } = useSWR(
    PROFILE_URL,
    () => getProfile(apiContext.axios)
  );

  useEffect(() => {
    if (profile !== undefined) {
      if (profile.email && profile.email !== ""){
        email.setValue(profile.email);
      }
      if (profile.telp && profile.telp !== "") {
        telp.setValue(profile.telp);
      }
      if (profile.name && profile.name !== "") {
        name.setValue(profile.name);
      }
    }
  }, [
    profile,
    email.setValue,
    telp.setValue,
    name.setValue,
  ]);

  if (errorProfile) return <Alert error="Masalah koneksi" />;
  if (!profile) return <Spinner height="200px" />;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const truth = await checkTruth(
        name.value,
        profile.gender,
        telp.value,
        profile.dob,
        profile.institute,
        profile.photo,
        profile
      );
      const res = await editProfile(apiContext.axios, truth);
      mutate(res);
      if (res) {
        if (auth) {
          setAuth({jwt: auth?.jwt, user: res});
        }
        setSuccess(true);
        setIsEdit(false);
        setError(null);
      }
    } catch (e) {
      setSuccess(false);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-3">
        {error && isEdit && <Alert error={error}/>}
        {success && !isEdit && <Success message="Successfully update" />}
        {[
          { state: email, key: "email" },
          { state: telp, key: "telp" },
          { state: name, key: "name" },
        ].map((data, index) => {
          const label = profileAttributes[data.key];
          const value = profile[data.key as keyof UserData] || "";
          return (
            <div key={label} className="d-flex justify-content-between">
              <h2>{label}</h2>
              { isEdit && data.key !== "email" ? (
                <InputField
                  shouldRef={index === 0}
                  type={data.key === "dob" ? "date" : "text"}
                  value={String(data.state.value)}
                  setValue={data.state.setValue}
                />
              ) : (
                <h2>{value ?? "-"}</h2>
              )}
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center mt-3">
        {isEdit ? (
          <FilledButton
            color={Theme.buttonColors.pinkButton}
            loading={loading}
            text="Submit"
            padding="0.75rem 3rem"
            onClick={handleSubmit}
          />
        ) : (
          <FilledButton
            color={Theme.buttonColors.pinkButton}
            text="Edit"
            padding="0.75em 1.5em"
            onClick={() => setIsEdit(true)}
          />
        )}
      </div>
      <style jsx>{`
        h2 {
          font: viga;
          font-size: 1.3rem;
          color: #441985;
        }
        @media only screen and (max-width: 767px) {
          h2{
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default PrimaryField;