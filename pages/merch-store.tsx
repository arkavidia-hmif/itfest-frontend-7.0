import CheckoutBagProvider from "../provider/CheckoutBagProvider";
import MerchStoreExpanded from "components/merchstore/MerchStoreExpanded";
import BagButton from "components/checkout_bag/BagButton";
import Layout from "components/commons/Layout";
import ShoppingBagContainer from "components/checkout_bag/ShoppingBagContainer";


const MerchStorePage: React.FC = () => {
  return (
    <Layout title="Merch Store">
      <CheckoutBagProvider>
        <BagButton />
        <ShoppingBagContainer />
        <div className="container my-5">
          <MerchStoreExpanded />
        </div>
      </CheckoutBagProvider>
    </Layout>
  );
};

export default MerchStorePage;
