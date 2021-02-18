import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import InputField from "components/commons/InputField";
import { editPrimaryData, getPrimaryData, PROFILE_URL } from "api/profile";
import { ApiContext } from "utils/context/api";
import { Theme } from "styles/theme";
import FilledButton from "components/commons/FilledButton";
import profileAttributes from "utils/constants/profile-attributes";
import { checkTruthPrimary } from "utils/transformer/profile";
import { PrimaryData } from "interfaces/auth";
import { AuthContext } from "utils/context/auth";
import useFormInput from "utils/hooks/useFormInput";
import Alert from "components/commons/Alert";
import Spinner from "components/commons/Spinner";
import useStringFormInput from "utils/hooks/useStringFormInput";

const PrimaryField: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const { profile, setProfile } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);
  const email = useStringFormInput("");
  const telp = useFormInput("");
  const name = useFormInput("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    isEdit ? setSuccess(false) : setError("");
  }, [setError, setSuccess, isEdit]);

  const { data: primary, error: errorPrimary, mutate } = useSWR(
    PROFILE_URL,
    () => getPrimaryData(apiContext.axios)
  );

  useEffect(() => {
    if (primary !== undefined) {
      if (primary.email && primary.email !== "") {
        email.setValue(primary.email);
      }
      if (primary.telp && primary.telp !== "") {
        telp.setValue(primary.telp);
      }
      if (primary.name && primary.name !== "") {
        name.setValue(primary.name);
      }
    }
  }, [
    primary
  ]);

  if (errorPrimary) return <Alert error="Masalah koneksi" />;
  if (!primary) return <Spinner height="200px" />;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const truth = await checkTruthPrimary(
        name.value,
        telp.value,
        email.value,
        primary
      );
      const res = await editPrimaryData(apiContext.axios, truth);
      mutate(res);
      setSuccess(true);
      setIsEdit(false);
      setError(null);
      if (res) {
        if (name.value && profile) {
          const newProfile = { ...profile };
          newProfile.name = name.value;
          setProfile(newProfile);
        }
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
      <Alert error={success ? "Update sukses" : error} color={success ? Theme.alertColors.greenAlert : Theme.alertColors.redAlert} />
      <div className="mt-3">
        {[
          { state: email, key: "email" },
          { state: telp, key: "telp" },
          { state: name, key: "name" },
        ].map((data) => {
          const label = profileAttributes[data.key];
          const value = primary[data.key as keyof PrimaryData] || "";
          return (
            <div key={label} className="row mt-3">
              <div className="col-md-6 col-sm-12"><h2>{label}</h2></div>
              <div className="col-md-6 col-sm-12">
                {!(isEdit && data.key !== "email") ? (
                  <h2 className="value">{value ?? "-"}</h2>
                ) :
                  (
                    <InputField
                      type="text"
                      value={data.state.value}
                      setValue={data.state.setValue}
                    />
                  )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3">
        {isEdit ? (
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <FilledButton
                color={Theme.buttonColors.pinkButton}
                loading={loading}
                text="Submit"
                padding="0.75rem 2rem"
                onClick={handleSubmit}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <FilledButton
                color={Theme.buttonColors.darkPinkButton}
                loading={loading}
                text="Cancel"
                padding="0.75rem 2rem"
                onClick={() => setIsEdit(false)}
              />
            </div>
          </div>
        ) :
          (
            <FilledButton
              color={Theme.buttonColors.pinkButton}
              loading={loading}
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
        .value {
          color: #0f2f2f;
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