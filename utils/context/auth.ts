import { createContext } from "react";
import { AuthData, VisitorProfileData } from "interfaces/auth";

export interface AuthContextType {
  authenticated: boolean;
  auth?: AuthData;
  profile?: VisitorProfileData;
  setProfile: (newValue?: VisitorProfileData) => void;
  login: (auth: AuthData, profile: VisitorProfileData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
