import { ReactNode, useEffect, useState } from "react";
import { AuthData } from "interfaces/auth";
import { AuthContext, AuthContextType } from "utils/context/auth";

interface Props {
  children: ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [auth, setAuth] = useState<AuthData>();
  const [loaded, setLoaded] = useState(false);

  const authenticatedKey =
    process.env.LOCAL_STORAGE_AUTHENTICATED || "authenticated_dev";
  const authKey = process.env.LOCAL_STORAGE_AUTH || "auth_dev";

  const setAndSaveAuthenticated = (newValue: boolean) => {
    setAuthenticated(newValue);
    localStorage.setItem(authenticatedKey, newValue ? "true" : "false");
  };

  const setAndSaveAuth = (newValue?: AuthData) => {
    setAuth(newValue);
    if (newValue) {
      localStorage.setItem(authKey, JSON.stringify(newValue));
    } else {
      localStorage.removeItem(authKey);
    }
  };

  useEffect(() => {
    setAuthenticated(localStorage.getItem(authenticatedKey) === "true");
    const savedAuth = localStorage.getItem(authKey);
    if (savedAuth) {
      setAuth(JSON.parse(savedAuth));
    }
    setLoaded(true);
  }, []);

  const authContext: AuthContextType = {
    authenticated,
    auth,
    setAuthenticated: setAndSaveAuthenticated,
    setAuth: setAndSaveAuth,
  };

  if (loaded || typeof window === "undefined") {
    return (
      <AuthContext.Provider value={authContext}>
        {children}
      </AuthContext.Provider>
    );
  } else {
    return <></>;
  }
};

export default AuthProvider;
