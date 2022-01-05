import React, { useContext } from "react";

export const AuthContext = React.createContext({
  isAuth: "",
  toggleAuth: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState("Login");

  const toggleAuth = () => {
    setIsAuth(isAuth === "Login" ? "Logout" : "Login");
  };
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
