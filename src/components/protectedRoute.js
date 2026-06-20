import React from "react";
import { Navigate } from "react-router-dom";

import Cookies from "js-cookie";

export const ProtectedRoute = (props) => {
  const { children } = props;
  const token = Cookies.get("jwt_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const AuthRoute = (props) => {
  const { children } = props;

  const token = Cookies.get("jwt_token");
  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};
