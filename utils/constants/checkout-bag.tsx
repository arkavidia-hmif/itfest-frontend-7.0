import { MerchStoreItem } from "interfaces/merch-store";


type CheckoutBagContextType = {
  data: Array<MerchStoreItem>;
  show: boolean;
  addData: (item: MerchStoreItem) => void;
  deleteData: () => void;
  showBag: (status: boolean) => void;
  deleteItem: (item: MerchStoreItem) => void;
  addQuantity: (item: MerchStoreItem) => void;
  subQuantity: (item: MerchStoreItem) => void;
  clearItem: () => void;
}

export default CheckoutBagContextType;