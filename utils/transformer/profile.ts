import { ProfileData, UserData } from "../../interfaces/auth";
import { isValidDate, isValidString, isEmpty, isValidPhone } from "../validator";

export const checkTruth = async (
  name: string | null,
  gender: number | null,
  telp: string | null,
  dob: string | null,
  photo: string | null,
  institute: string | null,
  profile: UserData
): Promise<ProfileData> => {
  const data: ProfileData = {
    id: 0,
    username: "",
    telp: "",
    name: "",
    role: "",
    gender: 0,
    dob: "",
    institute: "",
    point: 0,
    filled: false,
    photo: "",
    interest: []
  };
  if (!profile) {
    throw new Error("Masalah koneksi");
  }

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

  if (isEmpty(photo)) {
    if (isValidString(profile?.photo, 75)) {
      data.photo = profile?.photo;
    } else throw new Error("Alamat photo tidak valid");
  } else if (isValidString(photo, 75)) {
    data.photo = photo;
  } else throw new Error("Alamat photo tidak valid");

  return data;
};