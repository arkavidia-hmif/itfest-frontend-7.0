import { PersonalData, PrimaryData, ProfileData, UserData } from "../../interfaces/auth";
import { isValidDate, isValidString, isEmpty, isValidPhone, isValidEmail, isValidName } from "../validator";

export const checkTruth = async (
  name: string | null,
  gender: number | null,
  telp: string | null,
  dob: string | null,
  photo: string | null,
  institute: string | null,
  field: string,
  profile: UserData
): Promise<ProfileData> => {
  const data: ProfileData = {
    id: profile?.id,
    username: profile?.username,
    telp: profile?.telp,
    name: profile?.name,
    role: profile?.role,
    gender: profile?.gender,
    dob: profile?.dob,
    institute: profile?.institute,
    point: profile?.point,
    filled: profile?.filled,
    photo: profile?.photo,
    interest: profile?.interest
  };
  if (!profile) {
    throw new Error("Masalah koneksi");
  }

  if (field === "primary") {
    if (isEmpty(telp)) {
      if (isValidPhone(profile?.telp)) {
        data.telp = profile?.telp;
      } else throw new Error("Nomor telepon tidak valid");
    } else if (isValidPhone(telp)) {
      data.telp = telp;
    } else throw new Error("Nomor telepon tidak valid");
  
    if (isEmpty(name)) {
      if (isValidString(profile?.name, 75)) data.name = profile?.name;
      else throw new Error("Nama tidak valid");
    } else if (isValidString(name, 75)) {
      data.name = name;
    } else throw new Error("Nama tidak valid");
  } else if (field === "personal") {
    if (isEmpty(dob)) {
      if (isValidDate(profile?.dob)) data.dob = profile?.dob;
      else throw new Error("Tanggal lahir tidak valid");
    } else if (isValidDate(dob)) {
      data.dob = dob;
    } else throw new Error("Tanggal lahir tidak valid");
  
    if (isEmpty(institute)) {
      if (isValidString(profile?.institute, 75)) {
        data.institute = profile?.institute;
      } else throw new Error("Asal sekolah/universitas tidak valid");
    } else if (isValidString(institute, 75)) {
      data.institute = institute;
    } else throw new Error("Asal sekolah/universitas tidak valid");
  
    if (gender){
      data.gender = Number(gender);
    } else data.gender = Number(profile?.gender);
  }

  if (isEmpty(photo)) {
    if (isValidString(profile?.photo, 75)) {
      data.photo = profile?.photo;
    } else throw new Error("Alamat photo tidak valid");
  } else if (isValidString(photo, 75)) {
    data.photo = photo;
  } else throw new Error("Alamat photo tidak valid");

  return data;
};

export const checkTruthPrimary = async (
  name: string | null,
  telp: string | null,
  email: string,
  primary: PrimaryData
): Promise<PrimaryData> => {
  const data: PrimaryData = {
    name: primary?.name,
    telp: primary?.telp,
    email: primary?.email
  };
  if (!primary) {
    throw new Error("Masalah koneksi");
  }

  if (isEmpty(telp)) {
    if (isValidPhone(primary?.telp)) {
      data.telp = primary?.telp;
    } else throw new Error("Nomor telepon tidak valid");
  } else if (isValidPhone(telp)) {
    data.telp = telp;
  } else throw new Error("Nomor telepon tidak valid");

  if (isEmpty(name)) {
    if (isValidString(primary?.name, 75) && isValidName(primary?.name)) data.name = primary?.name;
    else throw new Error("Nama tidak valid");
  } else if (isValidString(name, 75) && isValidName(name)) {
    data.name = name;
  } else throw new Error("Nama tidak valid");

  if (isEmpty(email)){
    if (isValidEmail(primary?.email)) data.email = primary?.email;
    else throw new Error("Email tidak valid");
  } else if (isValidEmail(email)) {
    data.email = email;
  } else throw new Error("Email tidak valid");

  return data;
};

export const checkTruthPersonal = async (
  gender: number | null,
  dob: string | null,
  institute: string | null,
  personal: PersonalData
): Promise<PersonalData> => {
  const data: PersonalData = {
    gender: personal?.gender,
    dob: personal?.dob,
    institute: personal?.institute
  };
  if (!personal) {
    throw new Error("Masalah koneksi");
  }

  if (isEmpty(dob)) {
    if (isValidDate(personal?.dob)) data.dob = personal?.dob;
    else throw new Error("Tanggal lahir tidak valid");
  } else if (isValidDate(dob)) {
    data.dob = dob;
  } else throw new Error("Tanggal lahir tidak valid");

  if (isEmpty(institute)) {
    if (isValidString(personal?.institute, 75)) {
      data.institute = personal?.institute;
    } else throw new Error("Asal sekolah/universitas tidak valid");
  } else if (isValidString(institute, 75)) {
    data.institute = institute;
  } else throw new Error("Asal sekolah/universitas tidak valid");

  if (gender){
    data.gender = Number(gender);
  } else data.gender = Number(personal?.gender);

  return data;
};