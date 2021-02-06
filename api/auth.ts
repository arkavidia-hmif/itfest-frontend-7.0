import { AxiosInstance } from "axios";
import { AuthData, LoginStatus, RegisterStatus } from "interfaces/auth";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";

export async function login(
  axios: AxiosInstance,
  email: string,
  password: string
): Promise<ApiResponse<AuthData>> {
  try {
    const response = await axios.post("/login", {
      email,
      password,
    });

    return response.data as ApiResponse<AuthData>;
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

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function registerVisitor(
  axios: AxiosInstance,
  email: string,
  password: string
): Promise<ApiResponse<AuthData>> {
  try {
    const response = await axios.post("/register/visitor/", {
      email,
      password,
    });

    return response.data as ApiResponse<AuthData>;
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

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}
