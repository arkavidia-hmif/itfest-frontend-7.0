import { AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";
import { LeaderboardData, VisitorCount, PointsAndRank } from "interfaces/home";

export async function getGlobalScoreboard(
  axios: AxiosInstance,
): Promise<ApiResponse<LeaderboardData["data"]>> {
  try {
    const response = await axios.get("/scoreboard/global?limit=30&offset=0");

    return response.data as ApiResponse<LeaderboardData["data"]>;
  } catch (e) {

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function getTotalVisitors(
  axios: AxiosInstance,
): Promise<ApiResponse<VisitorCount>> {
  try {
    const response = await axios.get("/visitor/count");

    return response.data as ApiResponse<VisitorCount>;
  } catch (e) {

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}

export async function getPointsAndRank(
  axios: AxiosInstance,
): Promise<ApiResponse<PointsAndRank>> {
  try {
    const response = await axios.get("/visitor/rankpoint");

    return response.data as ApiResponse<PointsAndRank>;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}
