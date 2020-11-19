export interface AuthData {
  token: string;
  exp: number;
  user: UserData;
}

export interface ProfileData {
  fullName: string;
  currentEducation: string | null;
  institution: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
  address: string | null;
}

export interface UserData extends ProfileData {
  dateJoined: string;
  email: string;
}

export enum LoginStatus {
  ERROR,
  INVALID_CREDS,
  EMAIL_NOT_CONFIRMED,
}

export enum EmailResetPasswordStatus {
  ERROR,
  INVALID_TOKEN,
}

export enum EmailVerifyStatus {
  ERROR,
  INVALID_TOKEN,
}

export enum RegisterStatus {
  EMAIL_USED,
}
