import { AxiosError, AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";
import { ProfileData, UserData } from "interfaces/auth";


export const PROFILE_URL = "/user/me";

export const getProfile = async (
  axios: AxiosInstance
): Promise<UserData> => {
  return axios
    .get<ApiResponse<UserData>>(PROFILE_URL)
    .then((response) => {
      return response.data.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const editProfile = async (
  axios: AxiosInstance,
  truth: ProfileData
): Promise<UserData> => {
  return axios
    .put<ApiResponse<UserData>>(PROFILE_URL, truth)
    .then((response) => {
      return response.data.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};