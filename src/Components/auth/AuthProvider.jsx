import React, { createContext, useEffect, useState } from "react";
import { getUser } from "../../utils/manageUser&Id";
import { getToken } from "../../utils/manageToken";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isUserLogin , setIsUserLogin] = useState(false)

  useEffect(() => {
    const storedUser = getUser() 
    const token = getToken()
    if (storedUser && token) {
        setUser(storedUser);
        setIsUserLogin(true)
      }
  } , [])

  return (
    <AuthContext.Provider value={{ user , isUserLogin , setIsUserLogin , setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
