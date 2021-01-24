export interface AuthData {
  jwt: string;
}

export enum LoginStatus {
  INVALID_CREDS
}


export enum RegisterStatus {
  USER_EXISTS
}
