import { AxiosInstance } from "axios";
import {
  AuthData,
  EmailResetPasswordStatus,
  LoginStatus,
  RegisterStatus,
} from "interfaces/auth";
import { ApiError } from "interfaces/api";

export async function login(
  axios: AxiosInstance,
  email: string,
  password: string
): Promise<AuthData> {
  try {
    const response = await axios.post("/login", {
      email,
      password,
    });

    return response.data.data as AuthData;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      if (errorCode === "user-not-found" || errorCode === "invalid-auth") {
        throw new ApiError<LoginStatus>(
          LoginStatus.INVALID_CREDS,
          "Email dan/atau password salah"
        );
      }
    }

    throw new ApiError<RegisterStatus>(RegisterStatus.UNKNOWN, e.message);
  }
}

export async function registerVisitor(
  axios: AxiosInstance,
  name: string,
  email: string,
  password: string,
  telp: string
): Promise<void> {
  try {
    await axios.post("/register/visitor", {
      name,
      email,
      password,
      telp
    });
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      if (errorCode === "user-exists") {
        throw new ApiError<RegisterStatus>(
          RegisterStatus.USER_EXISTS,
          "Email ini sudah terdaftar"
        );
      }
    }

    throw new ApiError<RegisterStatus>(RegisterStatus.UNKNOWN, e.message);
  }
}

export async function resetPassword(
  axios: AxiosInstance,
  token: string,
  password: string
): Promise<void> {
  try {
    await axios.post(`/validation/${token}`, {
      password,
    });
  } catch(e) {
    throw new ApiError<EmailResetPasswordStatus>(EmailResetPasswordStatus.ERROR, e);
  }
}