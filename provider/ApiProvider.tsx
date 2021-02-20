import * as React from "react";
import Axios from "axios";
import { ApiContext, ApiContextType } from "utils/context/api";
import { AuthContext } from "utils/context/auth";

interface Props {
  children: React.ReactNode;
}

const ApiProvider: React.FC<Props> = ({ children }) => {
  const authContext = React.useContext(AuthContext);

  const apiClient = Axios.create({
    baseURL: process.env.API_BASE_URL,
    withCredentials: false,
  });

  apiClient.interceptors.request.use((config) => {
    if (authContext.authenticated && authContext.auth) {
      config.headers.common["Authorization"] = `Bearer ${authContext.auth.jwt}`;
    }
    return config;
  });

  const contextValue: ApiContextType = {
    axios: apiClient,
  };

  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};

export default ApiProvider;
