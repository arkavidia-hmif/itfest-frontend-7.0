export interface AuthData {
  jwt: string;
  user: UserData;
}

export interface ProfileData {
  id: number;
  username: string;
  telp: string | null;
  name: string | null;
  role: string | null;
  gender: number | null;
  dob: string | null;
  institute: string | null;
  point: number;
  filled: boolean;
  photo: string | null;
  interest: Array<string>;
}

export interface UserData extends ProfileData {
  createdAt: string;
  updatedAt: string;
  email: string;
}

export enum LoginStatus {
  INVALID_CREDS
}


export enum RegisterStatus {
  USER_EXISTS
}
