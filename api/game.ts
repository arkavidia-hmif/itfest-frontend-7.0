import { AxiosInstance } from "axios";
import { QuizAPIResponseData } from "./../interfaces/game";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";

export const GET_GAME_URL = "/game/";
interface OKData {
  code: string;
  status: number;
}

export async function playGame(
  axios: AxiosInstance,
  id: string
): Promise<ApiResponse<OKData>> {
  try {
    const response = await axios.post(`${GET_GAME_URL}${id}/play`);
    return response.data as ApiResponse<OKData>;
  } catch (e) {
    // if (e.response) {
    //   const errorCode = e.response.data?.code;
    //   console.log(errorCode);
    // }
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function getGame(
  axios: AxiosInstance,
  id: string
): Promise<ApiResponse<QuizAPIResponseData>> {
  try {
    const response = await axios.get(`${GET_GAME_URL}${id}`);
    console.log(response.data);
    return response.data as ApiResponse<QuizAPIResponseData>;
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

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function submitGame(
  axios: AxiosInstance,
  id: string,
  body: string
): Promise<ApiResponse<string>> {
  try {
    const response = await axios.post(`${GET_GAME_URL}${id}/submit`, body);
    // console.log(response);
    return response.data as ApiResponse<string>;
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

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function getAllGames(
  axios: AxiosInstance
): Promise<ApiResponse<string>> {
  try {
    const response = await axios.get(GET_GAME_URL);
    // console.log(response);
    return response.data as ApiResponse<string>;
  } catch (e) {
    if (e.response) {
      // const errorCode = e.response.data?.code;
      // console.log(errorCode);
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}
