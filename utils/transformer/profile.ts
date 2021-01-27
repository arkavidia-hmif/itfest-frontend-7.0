import { ProfileData, UserData } from "../../interfaces/auth";
import { isValidDate, isValidString, isEmpty, isValidPhone } from "../validator";

export const checkTruth = async (
  username: string,
  telp: string | null,
  name: string | null,
  gender: number | null,
  dob: string | null,
  institute: string | null,
  point: number,
  photo: string | null,
  profile: UserData
): Promise<ProfileData> => {
  const data: ProfileData = {
    username: "",
    telp: "",
    name: "",
    gender: 0,
    dob: "",
    institute: "",
    point: 0,
    photo: ""
  };
  if (!profile) {
    throw new Error("Masalah koneksi");
  }
  if (isEmpty(username)) {
    if (isValidString(profile?.username, 75)) data.username = profile?.username;
    else throw new Error("Nama tidak valid");
  } else if (isValidString(username, 75)) {
    data.username = username;
  } else throw new Error("Nama tidak valid");

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

  return data;
};