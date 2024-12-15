import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const AuthContext = createContext({
  token: null,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(true);

  async function loginHandler(email, password) {
    const url = import.meta.env.VITE_API_URL + "/login";

    setToken(true);
    return true;
    // const response = await axios.post(url, {
    //   email: email,
    //   password: password,
    // });
    // if (response.data.token) {
    //   setToken(response.data.token);
    //   return true;
    // } else {
    //   return false;
    // }
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
