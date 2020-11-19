import { AxiosInstance } from "axios";
import { createContext } from "react";

export interface ApiContextType {
  axios: AxiosInstance;
}

export const ApiContext = createContext<ApiContextType>({} as ApiContextType);
