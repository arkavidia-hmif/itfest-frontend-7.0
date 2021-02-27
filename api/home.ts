import { AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";
import { VisitorCount, PointsAndRank, GlobalLeaderboardData } from "interfaces/home";

export async function getGlobalScoreboard(
  axios: AxiosInstance
): Promise<ApiResponse<Array<GlobalLeaderboardData>>> {
  try {
    const response = await axios.get("/scoreboard/global?limit=20&offset=0");

    return response.data as ApiResponse<Array<GlobalLeaderboardData>>;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function getTotalVisitors(
  axios: AxiosInstance
): Promise<ApiResponse<VisitorCount>> {
  try {
    const response = await axios.get("/visitor/count");

    return response.data as ApiResponse<VisitorCount>;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function getPointsAndRank(
  axios: AxiosInstance
): Promise<ApiResponse<PointsAndRank>> {
  try {
    const response = await axios.get("/visitor/rankpoint");

    return response.data as ApiResponse<PointsAndRank>;
  } catch (e) {
    if (e.response.data.status === 401) {
      throw new ApiError<StandardError>(
        StandardError.ERROR,
        "Login untuk melihat rank dan point Anda"
      );
    }
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}
