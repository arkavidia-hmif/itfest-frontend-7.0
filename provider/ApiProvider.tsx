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
    // if (authContext.authenticated && authContext.auth) {
    config.headers.common["Authorization"] = `Bearer ${
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJqcmFuZGlueSIsImVtYWlsIjoianJhbmRpbnlAZ21haWwuY29tIiwicm9sZSI6InZpc2l0b3IiLCJpYXQiOjE2MTE1NTgxNTB9.WgIprOZ6AjrfI76dcl-5zW9Uz8vFcJHSucBndjzPyr0"
      // authContext.auth.jwt ??
    }`;
    // }

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
