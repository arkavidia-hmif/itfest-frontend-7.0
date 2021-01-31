import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import InputField from "./InputField";
import ColorfulHeader from "components/commons/ColorfulHeader";
import { Theme } from "styles/theme";
import FilledButton from "components/commons/FilledButton";
import { ApiContext } from "utils/context/api";
import { AuthContext } from "utils/context/auth";
import useFormInput from "utils/hooks/useFormInput";
import { editPersonalData, getPersonalData, PROFILE_URL } from "api/profile";
import Alert from "components/commons/Alert";
import Spinner from "components/commons/Spinner";
import { checkTruthPersonal } from "utils/transformer/profile";
import Success from "components/commons/Success";
import profileAttributes, { genderList } from "utils/constants/profile-attributes";
import { PersonalData } from "interfaces/auth";

const PersonalField: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const { auth, setAuth } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);
  const gender = useFormInput("");
  const dob = useFormInput("");
  const institute = useFormInput("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    isEdit ? setSuccess(false) : setError("");
  }, [setError, setSuccess, isEdit]);

  const { data: personal, error: errorPersonal, mutate } = useSWR(
    PROFILE_URL,
    () => getPersonalData(apiContext.axios)
  );

  useEffect(() => {
    if (personal !== undefined) {
      if (personal.gender && personal.gender !== 0){
        gender.setValue(String(personal.gender));
      }
      if (personal.dob && personal.dob !== "") {
        dob.setValue(personal.dob);
      }
      if (personal.institute && personal.institute !== "") {
        institute.setValue(personal.institute);
      }
    }
  }, [
    personal,
    gender.setValue,
    dob.setValue,
    institute.setValue,
  ]);

  if (errorPersonal) return <Alert error="Masalah koneksi" />;
  if (!personal) return <Spinner height="200px" />;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const truth = await checkTruthPersonal(
        Number(gender.value),
        dob.value,
        institute.value,
        personal
      );
      const res = await editPersonalData(apiContext.axios, truth);
      mutate(res);
      setSuccess(true);
      setIsEdit(false);
      setError(null);
      if (res) {
        if (auth) {
          setAuth({jwt: auth?.jwt, personal: res});
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
      {error && isEdit && <Alert error={error}/>}
      {success && !isEdit && <Success message="Successfully update" />}
      <div>
        <ColorfulHeader
          color={Theme.headerColors.pipl}
          headingLevel={6}
          size="1.5rem"
        > Fill these data to get extra points! (Optional) 
        </ColorfulHeader>
      </div>
      <div className="mt-3">
        {[
          { state: gender, key: "gender", choices:genderList },
          { state: dob, key: "dob" },
          { state: institute, key: "institute" },
        ].map((data) => {
          const label = profileAttributes[data.key];
          const value = personal[data.key as keyof PersonalData] || "";
          return (
            <div key={label} className="d-flex justify-content-between">
              <h2>{label}</h2>
              {!(isEdit) ? (
                <h2>{data.key === "gender" ? genderList[Number(gender.value)-1] : value}</h2>
              ) : (
                <InputField
                  type={data.key === "dob" ? "date" : "text"}
                  value={String(data.state.value)}
                  setValue={data.state.setValue}
                  choices={data.choices ?? []}
                />
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
            padding="0.75rem 2rem"
            onClick={handleSubmit}
          />
        ) : (
          <FilledButton
            color={Theme.buttonColors.pinkButton}
            text="Edit"
            padding="0.75rem 1.5rem"
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

export default PersonalField;