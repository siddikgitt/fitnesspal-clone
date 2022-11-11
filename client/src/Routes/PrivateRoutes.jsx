import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
  let login = true;
  if (login) {
    return children;
  }
  return <Navigate to="/login"/>
  
};

export default PrivateRoutes;
