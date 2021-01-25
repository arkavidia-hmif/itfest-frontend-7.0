import { AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";

export const GET_GAME_URL = "/game/";

export async function playGame(
  axios: AxiosInstance,
  id: string
): Promise<ApiResponse<string>> {
  try {
    const response = await axios.post(`${GET_GAME_URL}${id}/play`);
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
      if (errorCode === "game-havent-started") {
        throw new ApiError<StandardError>(
          StandardError.ERROR,
          "Game belum dimulai"
        );
      }
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function getGame(
  axios: AxiosInstance,
  id: string
): Promise<ApiResponse<string>> {
  try {
    const response = await axios.get(`${GET_GAME_URL}${id}`);
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
      if (errorCode === "game-havent-started") {
        throw new ApiError<StandardError>(
          StandardError.ERROR,
          "Game belum dimulai"
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
    const response = await axios.get(GET_ALL_GAMES_URL);
    console.log(response);
    return response.data as ApiResponse<string>;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      console.log(errorCode);
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}
