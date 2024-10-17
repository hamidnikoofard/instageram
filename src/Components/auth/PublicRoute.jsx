import React, { useContext } from "react";
import { getToken } from "../../utils/manageToken";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PublicRoute = ({ children }) => {
  const token = getToken();
  const {user} = useContext(AuthContext)

  if(token && user){
    return <Navigate to={"/home"} />
  }
  return children;
};

export default PublicRoute;
