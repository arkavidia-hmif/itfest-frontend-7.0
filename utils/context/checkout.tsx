import { createContext } from "react";
import CheckoutBagContextType from "../constants/checkout-bag";

export const CheckoutBagContext = createContext<CheckoutBagContextType | undefined>(undefined);