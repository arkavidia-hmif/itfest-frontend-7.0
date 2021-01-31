import { AxiosInstance } from "axios";
import {
  AuthData,
  EmailResetPasswordStatus,
  EmailVerifyStatus,
  LoginStatus,
  RegisterStatus,
} from "interfaces/auth";
import { ApiError, StandardError } from "interfaces/api";

export async function getGlobalScoreboard(
  axios: AxiosInstance,
): Promise<AuthData> {
  try {
    const response = await axios.post("/auth/login/", {
    });

    return response.data as AuthData;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data.code;
      if (errorCode === "login_failed" || errorCode === "unknown_error") {
        throw new ApiError<LoginStatus>(
          LoginStatus.INVALID_CREDS,
          e.response.data.detail
        );
      } else if (errorCode === "account_email_not_confirmed") {
        throw new ApiError<LoginStatus>(
          LoginStatus.EMAIL_NOT_CONFIRMED,
          e.response.data.detail
        );
      }
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function register(
  axios: AxiosInstance,
  fullName: string,
  email: string,
  password: string
): Promise<AuthData> {
  try {
    const response = await axios.post("/auth/register/", {
      fullName,
      email,
      password,
    });

    return response.data as AuthData;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data.code;
      if (errorCode === "registration_failed_email_used") {
        throw new ApiError<RegisterStatus>(
          RegisterStatus.EMAIL_USED,
          e.response.data.detail
        );
      }
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e);
  }
}

export async function requestResetPassword(
  axios: AxiosInstance,
  email: string
): Promise<void> {
  try {
    await axios.post("/auth/password-reset/", {
      email,
    });
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e);
  }
}

export async function resetPassword(
  axios: AxiosInstance,
  token: string,
  newPassword: string
): Promise<void> {
  try {
    await axios.post("/auth/confirm-password-reset/", {
      token,
      newPassword,
    });
  } catch (e) {
    if (e.response) {
      if (
        e.response.data.code === "invalid_token" ||
        e.response.data.code === "token_used"
      ) {
        throw new ApiError<EmailResetPasswordStatus>(
          EmailResetPasswordStatus.INVALID_TOKEN,
          e.response.data.detail
        );
      }
    }
    throw new ApiError<EmailResetPasswordStatus>(
      EmailResetPasswordStatus.ERROR,
      e
    );
  }
}

export async function confirmEmailAddress(
  axios: AxiosInstance,
  token: string
): Promise<void> {
  try {
    await axios.post("/auth/confirm-registration/", { token });
  } catch (e) {
    if (e.response) {
      if (e.response.data.code === "invalid_token") {
        throw new ApiError<EmailVerifyStatus>(
          EmailVerifyStatus.INVALID_TOKEN,
          e.response.data.detail
        );
      }
    }

    throw new ApiError<EmailVerifyStatus>(EmailVerifyStatus.ERROR, e);
  }
}
