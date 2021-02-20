import { AxiosInstance } from "axios";
import { AuthData } from "interfaces/auth";
import { MerchStoreItem } from "interfaces/merch-store";
import { ApiError, ApiResponse, StandardError } from "interfaces/api";
import {
  CheckoutGeneralStatus,
  CheckoutPointStatus,
  CheckoutQuantityStatus,
} from "interfaces/checkout";

export async function checkout(
  axios: AxiosInstance,
  line: string,
  whatsapp: string,
  address: string,
  items: Array<MerchStoreItem>
): Promise<ApiResponse<AuthData>> {
  try {
    const data = {
      "lineContact": line,
      "waContact": whatsapp,
      "isSent": false,
      "address": address,
      "items": items
    };

    const response = await axios.post("/checkout", data);

    return response.data;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      if (errorCode === "insufficient-quantity") {
        throw new ApiError<CheckoutQuantityStatus>(
          CheckoutQuantityStatus.InsufficientQuantity,
          "Stok barang habis"
        );
      } else if (errorCode === "insufficient-point") {
        throw new ApiError<CheckoutPointStatus>(
          CheckoutPointStatus.InsufficientPoint,
          "Point tidak cukup"
        );
      } else if (errorCode === "no-fill-contact") {
        throw new ApiError<CheckoutGeneralStatus>(
          CheckoutGeneralStatus.CheckAllData,
          "Pastikan data anda benar"
        );
      } else if (errorCode === "item-not-found") {
        throw new ApiError<CheckoutQuantityStatus>(
          CheckoutQuantityStatus.InsufficientQuantity,
          "Stok barang habis"
        );
      }
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}