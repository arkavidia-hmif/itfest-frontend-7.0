import { AxiosInstance } from "axios";
import {
  QuizAPIResponseData,
  CrosswordAPIResponseData,
  QuizResponse,
} from "./../interfaces/game";

import { ApiError, ApiResponse, StandardError } from "interfaces/api";

export const GET_GAME_URL = "/game/";
interface OKData {
  code: string;
  status: number;
  data?: { gameid: number; attempt: number };
}

interface SubmitOKData {
  code: string;
  status: number;
  data?: { prize: number };
}

export async function getGameByTenant(
  axios: AxiosInstance,
  id: string
): Promise<OKData> {
  try {
    const response = await axios.get(`${GET_GAME_URL}tenant/${id}`);
    return response.data as OKData;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      if (errorCode === "no-game") {
        throw new ApiError<StandardError>(
          StandardError.ERROR,
          "Tenant tidak ada game"
        );
      }
    }
    if (e.response.data.status === 401) {
      throw new ApiError<StandardError>(
        StandardError.ERROR,
        "Login terlebih dahulu"
      );
    }
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function playGame(
  axios: AxiosInstance,
  id: string
): Promise<ApiResponse<OKData>> {
  try {
    const response = await axios.post(`${GET_GAME_URL}${id}/play`);
    return response.data as ApiResponse<OKData>;
  } catch (e) {
    if (e.response.data.status === 401) {
      throw new ApiError<StandardError>(
        StandardError.ERROR,
        "Login terlebih dahulu"
      );
    }
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function getGame(
  axios: AxiosInstance,
  id: string
): Promise<ApiResponse<QuizAPIResponseData | CrosswordAPIResponseData>> {
  try {
    const response = await axios.get(`${GET_GAME_URL}${id}`);
    return response.data as ApiResponse<
      QuizAPIResponseData | CrosswordAPIResponseData
    >;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      if (errorCode === "game-not-found") {
        throw new ApiError<StandardError>(
          StandardError.ERROR,
          "Game tidak ditemukan"
        );
      }
      if (errorCode === "game-havent-started") {
        throw new ApiError<StandardError>(
          StandardError.ERROR,
          "Game belum dimulai"
        );
      }
      if (errorCode === "user-already-play") {
        throw new ApiError<StandardError>(
          StandardError.ERROR,
          "Game telah dimainkan"
        );
      }
    }
    if (e.response.data.status === 401) {
      throw new ApiError<StandardError>(
        StandardError.ERROR,
        "Login terlebih dahulu"
      );
    }
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function submitGame(
  axios: AxiosInstance,
  id: string,
  body: QuizResponse
): Promise<SubmitOKData> {
  try {
    const response = await axios.post(`${GET_GAME_URL}${id}/submit`, {
      answer: body,
    });
    return response.data as SubmitOKData;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      if (errorCode === "game-not-found") {
        throw new ApiError<StandardError>(
          StandardError.ERROR,
          "Game tidak ditemukan"
        );
      }
    }
    if (e.response.data.status === 401) {
      throw new ApiError<StandardError>(
        StandardError.ERROR,
        "Login terlebih dahulu"
      );
    }
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}
