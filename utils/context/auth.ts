import { createContext } from "react";
import { AuthData } from "interfaces/auth";

export interface AuthContextType {
  authenticated: boolean;
  auth?: AuthData;
  setAuthenticated: (newValue: boolean) => void;
  setAuth: (newValue?: AuthData) => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
