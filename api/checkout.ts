import { AxiosInstance } from "axios";
import { MerchStoreItem } from "interfaces/merch-store";
import { ApiError, ApiResponse } from "interfaces/api";
import {
  CheckoutErrorStatus,
} from "interfaces/checkout";

export async function checkout(
  axios: AxiosInstance,
  items: Array<MerchStoreItem>,
  line?: string,
  whatsapp?: string,
  address?: string
): Promise<ApiResponse<void>> {
  try {
    const data = {
      "lineContact": line,
      "waContact": whatsapp,
      "address": address,
      "items": items
    };

    const response = await axios.post("/checkout", data);

    return response.data;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data?.code;
      if (errorCode === "insufficient-quantity") {
        throw new ApiError<CheckoutErrorStatus>(
          CheckoutErrorStatus.INSUFFICIENT_QUANTITY,
          "Stok barang habis"
        );
      } else if (errorCode === "insufficient-point") {
        throw new ApiError<CheckoutErrorStatus>(
          CheckoutErrorStatus.INSUFFICIENT_POINT,
          "Point tidak cukup"
        );
      } else if (errorCode === "incomplete-contact" || errorCode === "invalid-input") {
        throw new ApiError<CheckoutErrorStatus>(
          CheckoutErrorStatus.DATA_INCOMPLETE,
          "Pastikan data anda benar"
        );
      } else if (errorCode === "item-not-found") {
        throw new ApiError<CheckoutErrorStatus>(
          CheckoutErrorStatus.INSUFFICIENT_QUANTITY,
          "Stok barang habis"
        );
      }
    }

    throw new ApiError<CheckoutErrorStatus>(CheckoutErrorStatus.ERROR, e.message);
  }
}