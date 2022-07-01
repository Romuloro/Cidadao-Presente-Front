import React, { Suspense, useContext, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Map from "./Pages/Map/Map";
import Login from "./Pages/Login/Login";

/* import { AuthProviders, AuthContext } from "./contexts/auth.jsx";
 */
export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mapa" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}
