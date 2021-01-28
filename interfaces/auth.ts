export interface AuthData {
  jwt: string;
}

export enum LoginStatus {
  INVALID_CREDS,
  EMAIL_NOT_CONFIRMED,
  SERVER_ERROR
}


export enum RegisterStatus {
  USER_EXISTS,
  EMAIL_USED,
  INVALID_EMAIL,
  INVALID_NAME,
  SERVER_ERROR
}