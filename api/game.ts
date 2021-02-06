import { AxiosInstance } from "axios";
import {
  QuizAPIResponseData,
  CrosswordAPIResponseData,
} from "./../interfaces/game";
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
const temp = {
  status: 200,
  code: "ok",
  data: {
    id: 6,
    name: "Capsa",
    difficulty: 1,
    type: 2,
    problem: {
      crosswordType: "quick",
      entries: [
        {
          id: "1-across",
          number: 1,
          humanNumber: "1",
          clue: "Toy on a string (2-2)",
          direction: "across",
          length: 4,
          group: [],
          separatorLocations: {},
          position: {
            x: 0,
            y: 0,
          },
        },
        {
          id: "2-across",
          number: 2,
          humanNumber: "2",
          clue: "Have a rest (3,4)",
          direction: "across",
          length: 7,
          position: {
            x: 0,
            y: 2,
          },
          group: [],
          separatorLocations: {},
        },
        {
          id: "1-down",
          number: 1,
          humanNumber: "1",
          clue: "Colour (6)",
          direction: "down",
          length: 6,
          position: {
            x: 0,
            y: 0,
          },
          group: [],
          separatorLocations: {},
        },
      ],
      dimensions: {
        cols: 7,
        rows: 7,
      },
    },
  },
};

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
