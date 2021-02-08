import * as React from  "react";
import { useContext, useState } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../utils/context/checkout";
import InputField from "./InputField";
import FilledButton from "components/commons/FilledButton";
import { Theme } from "styles/theme";
import { MerchStoreItem } from "interfaces/merch-store";
import { ApiContext } from "utils/context/api";



const Checkout: React.FC = () => {
  const { data } = useContext(CheckoutBagContext) as CheckoutBagContextType;
  const apiContext = useContext(ApiContext);

  const [whatsapp, setWhatsapp] = useState("");
  const [line, setLine] = useState("");
  const [address, setAddress] = useState("");

  let total = 0;

  data.map(
    (item: MerchStoreItem) => {
      total += item.quantity * item.price;
    }
  );

  const handleSubmit = () => {
    const items = {
      "lineContact": line,
      "waContact": whatsapp,
      "isSent": false,
      "address": address,
      "items": data
    };

    apiContext.axios.post(process.env.API_BASE_URL + "/checkout", items).then(() => {
      // console.log(data);
    }).catch(() => {
      // console.log(err);
    });
  };

  return (
    <div className="checkout-box">
      <h4>SHIPPING DETAILS</h4>
      <hr/>
      <InputField text="Alamat" value={address} setValue={setAddress} />
      <InputField text="WhatsApp" value={whatsapp} setValue={setWhatsapp} />
      <InputField text="LINE" value={line} setValue={setLine} />
      <h4>PAYMENT DETAILS</h4>
      <hr/>
      <h5>SUBTOTAL</h5>
      <h5 style={{float: "right"}}>
        {
          total
        }  
      </h5>
      <div className="btn">
        <FilledButton
          color={Theme.buttonColors.pinkButton}
          text="CHECKOUT"
          padding="0.75rem 8rem"
          onClick={handleSubmit}
        />
      </div>

      <style jsx>
        {`
          .checkout-box {
            border-radius: 1rem;
            box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
            height: 70vh;
            width: 95%;
            margin: auto;
            padding: 2rem 1rem;
            margin-top: 2rem;
          }

          h5 {
            display: inline-block;
            margin-top: 1rem;
          }

          .btn {
            display: block;
            margin: 0 auto;
            position: relative;
            top: 15%;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Checkout;
