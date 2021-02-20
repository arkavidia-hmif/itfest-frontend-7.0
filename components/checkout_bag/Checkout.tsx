import * as React from "react";
import { useContext, useState } from "react";
import CheckoutBagContextType from "../../utils/constants/checkout-bag";
import { CheckoutBagContext } from "../../utils/context/checkout";
import InputField from "./InputField";
import FilledButton from "components/commons/FilledButton";
import { Theme } from "styles/theme";
import { MerchStoreItem } from "interfaces/merch-store";
import { ApiContext } from "utils/context/api";
import Alert from "components/commons/Alert";
import { checkout } from "api/checkout";
import { AuthContext } from "utils/context/auth";



const Checkout: React.FC = () => {
  const { data, clearItem } = useContext(CheckoutBagContext) as CheckoutBagContextType;
  const apiContext = useContext(ApiContext);
  const authContext = useContext(AuthContext);

  const [whatsapp, setWhatsapp] = useState("");
  const [line, setLine] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [success, setSucess] = useState(false);
  const [buy, setBuy] = useState(false);

  let total = 0;

  data.map(
    (item: MerchStoreItem) => {
      total += item.quantity * item.price;
    }
  );

  const handleSubmit = () => {
    setBuy(true);

    checkout(apiContext.axios, line, whatsapp, address, data).then(() => {
      setStatus("Pembelian berhasil");
      setSucess(true);

      clearItem();
    }).catch((err) => {
      setStatus(err.msg);
      setSucess(false);
    });
  };

  return (
    <div className="checkout-box">
      <h4>SHIPPING DETAILS</h4>
      <hr />
      <InputField text="Alamat" value={address} setValue={setAddress} />
      <InputField text="WhatsApp" value={whatsapp} setValue={setWhatsapp} />
      <InputField text="LINE" value={line} setValue={setLine} />
      <h4>PAYMENT DETAILS</h4>
      <hr />
      <h5>POINT</h5>
      <h5 style={{ float: "right" }}>
        {
          authContext.profile?.point || 0
        }
      </h5>
      <br />
      <h5 className="mt-0" >SUBTOTAL</h5>
      <h5 className="mt-0" style={{ float: "right" }}>
        {
          total
        }
      </h5>
      { buy ? <Alert error={status} color={success ? Theme.alertColors.greenAlert : Theme.alertColors.redAlert} /> : null}
      <div className="btn">
        <FilledButton
          disabled={total === 0}
          color={Theme.buttonColors.pinkButton}
          text="CHECKOUT"
          onClick={handleSubmit}
          fullWidth
        />
      </div>

      <style jsx>
        {`
          .checkout-box {
            border-radius: 1rem;
            box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.25);
            width: 95%;
            margin: auto;
            padding: 2rem;
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
            margin-top: 1rem;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Checkout;
