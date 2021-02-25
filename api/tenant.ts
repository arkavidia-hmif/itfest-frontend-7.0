import { AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";
import { LiveTenant } from "interfaces/tenant";

export async function getLiveTenant(
  axios: AxiosInstance
): Promise<ApiResponse<Array<LiveTenant>>> {
  try {
    const response = await axios.get("tenant/live");

    return response.data as ApiResponse<Array<LiveTenant>>;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}