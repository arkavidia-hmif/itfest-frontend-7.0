export interface AuthData {
  jwt: string;
}

export enum LoginStatus {
  INVALID_CREDS,
  EMAIL_NOT_CONFIRMED
}


export enum RegisterStatus {
  USER_EXISTS,
  EMAIL_USED
}