import { AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";


export async function givePoint (
  axios: AxiosInstance,
  id?: number,
  amount?: string,
): Promise<ApiResponse<void>> {
  try {
    const data = {
      "amount" : amount
    };

    const response = await axios.post(`user/${id}/give`, data);

    return response.data;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}