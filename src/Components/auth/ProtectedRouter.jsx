import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { getToken } from "../../utils/manageToken";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user && !getToken()) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRouter;
