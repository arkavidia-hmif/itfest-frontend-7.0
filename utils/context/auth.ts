import { createContext } from "react";
import { AuthData, VisitorProfileData } from "interfaces/auth";

export interface AuthContextType {
  authenticated: boolean;
  auth?: AuthData;
  profile?: VisitorProfileData;
  setAuthenticated: (newValue: boolean) => void;
  setAuth: (newValue?: AuthData) => void;
  setProfile: (newValue?: VisitorProfileData) => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
