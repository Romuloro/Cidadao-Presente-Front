import React, { useContext } from "react";

import { AuthContext } from "./auth";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
  const { authenticated } = useContext(AuthContext);
  if (!authenticated) {
    console.log("volta lá", authenticated);
    return <Navigate to="/home" />;
  }
  console.log(authenticated);
  return children;
}
