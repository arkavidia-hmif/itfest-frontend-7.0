import BagContainer from "../components/checkout_bag/BagContainer";
import CheckoutBagProvider from "../provider/CheckoutBagProvider";
import MerchStoreExpanded from "components/merchstore/MerchStoreExpanded";
import BagButton from "components/checkout_bag/BagButton";
import Layout from "components/commons/Layout";
import Checkout from "components/checkout_bag/Checkout";
import {MerchStorePlaceholderItems} from "../utils/constants/merch-store-placeholder";


const MerchStorePage: React.FC = () => {
  return (
    <Layout title="Merch Store">
      <CheckoutBagProvider>
        <BagButton />
        <BagContainer />
        <Checkout item={MerchStorePlaceholderItems} />
        <div className="container my-5">
          <MerchStoreExpanded />
        </div>
      </CheckoutBagProvider>
    </Layout>
  );
};

export default MerchStorePage;
