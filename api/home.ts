import { AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";
import { LeaderboardData } from "interfaces/home";

export async function getGlobalScoreboard(
  axios: AxiosInstance,
): Promise<ApiResponse<LeaderboardData>> {
  try {
    const response = await axios.get("/scoreboard/global?limit=30&offset=0");

    return response.data as ApiResponse<LeaderboardData>;
  } catch (e) {

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}
