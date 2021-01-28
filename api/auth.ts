import { AxiosInstance } from "axios";
import {
  AuthData,
  LoginStatus,
  RegisterStatus,
} from "interfaces/auth";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";

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

    return response.data as AuthData;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      if (errorCode === "user-not-found" || errorCode === "invalid-auth") {
        throw new ApiError<LoginStatus>(
          LoginStatus.INVALID_CREDS,
          "Email dan/atau password salah"
        );
      }
      else if (errorCode === "unknown-error") {
        throw new ApiError<LoginStatus>(
          LoginStatus.SERVER_ERROR,
          "Server Error"
        );
      }
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function registerVisitor(
  axios: AxiosInstance,
  name: string,
  email: string,
  password: string,
  telp: string, 
  institute: string
): Promise<ApiResponse<AuthData>> {
  try {
    const response = await axios.post("/register/visitor", {
      name,
      email,
      password,
      telp,
      institute
    });

    return response.data as ApiResponse<AuthData>;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      let errorMessage = "no_message";
      if(e.response.data?.data){
        errorMessage = e.response.data?.data[0].message;
      }
      if (errorCode === "user-exists") {
        throw new ApiError<RegisterStatus>(
          RegisterStatus.USER_EXISTS,
          "Email ini sudah terdaftar"
        );
      }
      else if (errorCode === "invalid-input" && errorMessage === "must only contain letter, number, or space") {
        throw new ApiError<RegisterStatus>(
          RegisterStatus.INVALID_NAME,
          "Nama lengkap hanya dapat memuat huruf, angka, atau spasi"
        );
      }
      else if (errorCode === "invalid-input" && errorMessage === "must be a valid email address") {
        throw new ApiError<RegisterStatus>(
          RegisterStatus.INVALID_EMAIL,
          "Email tidak valid"
        );
      }
      else if (errorCode === "unknown-error") {
        throw new ApiError<RegisterStatus>(
          RegisterStatus.SERVER_ERROR,
          "Server Error"
        );
      }
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}