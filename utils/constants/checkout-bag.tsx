import { MerchStoreItem } from "interfaces/merch-store";


type CheckoutBagContextType = {
  data: Array<MerchStoreItem>;
  show: boolean;
  addData: (item: MerchStoreItem) => void;
  deleteData: () => void;
  showBag: (status: boolean) => void;
}

export default CheckoutBagContextType;