import { createContext, useState } from "react";

export const Authcontext = createContext({ token: "", handelToken: () => {} });

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handelToken = (token) => {
    setToken(token);
  };
  return (
    <Authcontext.Provider value={{ token, handelToken }}>
      {children}
    </Authcontext.Provider>
  );
};
