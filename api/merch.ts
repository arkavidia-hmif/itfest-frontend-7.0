import { AxiosInstance } from "axios";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";
import { MerchStoreItem } from "interfaces/merch-store";
import { Tenant } from "interfaces/tenant";

export function getMerchFromTenantKey(tenant: Tenant): string {
  return `/merchant/${tenant.id}/item`;
}

export async function getMerchFromTenant(
  axios: AxiosInstance,
  merchantId: number
): Promise<ApiResponse<Array<MerchStoreItem>>> {
  try {
    const response = await axios.get(`tenant/${merchantId}/item`);

    return response.data as ApiResponse<Array<MerchStoreItem>>;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}