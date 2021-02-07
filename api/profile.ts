import { AxiosError, AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";
import { PersonalData, PrimaryData, ProfileData, UserData } from "interfaces/auth";


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

export const getPrimaryData = async (
  axios: AxiosInstance
): Promise<PrimaryData> => {
  return axios
    .get<ApiResponse<PrimaryData>>(PROFILE_URL)
    .then((response) => {
      return response.data.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const getPersonalData = async (
  axios: AxiosInstance
): Promise<PersonalData> => {
  return axios
    .get<ApiResponse<PersonalData>>(PROFILE_URL)
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

export const editPrimaryData = async (
  axios: AxiosInstance,
  truth: PrimaryData
): Promise<PrimaryData> => {
  return axios
    .put<ApiResponse<PrimaryData>>(PROFILE_URL, truth)
    .then((response) => {
      return response.data.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const editPersonalData = async (
  axios: AxiosInstance,
  truth: PersonalData
): Promise<PersonalData> => {
  return axios
    .put<ApiResponse<PersonalData>>(PROFILE_URL, truth)
    .then((response) => {
      return response.data.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};