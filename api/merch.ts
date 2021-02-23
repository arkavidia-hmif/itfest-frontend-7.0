import { AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";
import { MerchStoreItem } from "interfaces/merch-store";

export async function getMerchFromTenant(
  axios: AxiosInstance
): Promise<ApiResponse<Array<MerchStoreItem>>> {
  try {
    const response = await axios.get("/scoreboard/global?limit=30&offset=0");

    return response.data as ApiResponse<Array<MerchStoreItem>>;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}