import BagContainer from "../components/checkout_bag/BagContainer";
import CheckoutBagProvider from "../provider/CheckoutBagProvider";
import MerchStoreExpanded from "components/merchstore/MerchStoreExpanded";
import BagButton from "components/checkout_bag/BagButton";
import Layout from "components/commons/Layout";


const MerchStorePage: React.FC = () => {
  return (
    <Layout title="Merch Store">
      <CheckoutBagProvider>
        <BagButton />
        <BagContainer />
        <div className="container my-5">
          <MerchStoreExpanded />
        </div>
      </CheckoutBagProvider>
    </Layout>
  );
};

export default MerchStorePage;
