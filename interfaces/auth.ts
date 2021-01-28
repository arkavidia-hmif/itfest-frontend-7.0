export interface AuthData {
  jwt: string;
  user: UserData;
}

export interface ProfileData {
  username: string;
  telp: string | null;
  name: string | null;
  gender: number | null;
  dob: string | null;
  institute: string | null;
  point: number;
  photo: string | null;
}

export interface UserData extends ProfileData {
  dateJoined: string;
  email: string;
}

export enum LoginStatus {
  INVALID_CREDS
}


export enum RegisterStatus {
  USER_EXISTS
}
