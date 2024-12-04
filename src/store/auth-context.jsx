import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
  token: null,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  function loginHandler(email, password) {
    if (email == "admin@ucc.edu.jm" && password == "admin") {
      setToken("abc");
      return true;
    } else {
      return false;
    }
  }

  function logoutHandler() {
    setToken(null);
  }

  const ctxValue = {
    token: token,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  };

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}
