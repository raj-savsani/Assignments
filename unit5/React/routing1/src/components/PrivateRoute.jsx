import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../context/Auth";

function PrivateRoute({ children }) {
  const { token } = useContext(Authcontext);

  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return  children ;
}

export default PrivateRoute;
