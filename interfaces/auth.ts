export interface AuthData {
  jwt: string;
  user: {
    id: number;
    email?: string;
    username: string;
    role: string;
    isVerified: boolean;
  };
}

export interface VisitorProfileData {
  id: number;
  role: string;
  username: string;
  point: number;
  name: string;
  filled: boolean;
  telp: string | null;
  gender: number | null;
  dob: string | null;
  institute: string | null;
}

export interface UserData extends VisitorProfileData {
  createdAt: string;
  updatedAt: string;
  email: string;
}

export interface PrimaryData {
  telp: string | null;
  name: string | null;
  email: string;
}

export interface PersonalData {
  gender: number | null;
  dob: string | null;
  institute: string | null;
  filled: boolean;
}

export enum LoginStatus {
  UNKNOWN,
  INVALID_CREDS,
  EMAIL_NOT_CONFIRMED,
}


export enum RegisterStatus {
  UNKNOWN,
  USER_EXISTS,
  EMAIL_USED,
  INVALID_EMAIL,
  INVALID_NAME,
}