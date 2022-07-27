import React, { Suspense, useContext, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Map from "./Pages/Map/Map";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

import { AuthProviders } from "./Contexts/auth";
import Private from "./Contexts/private";
/* import { AuthProviders, AuthContext } from "./contexts/auth.jsx";
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProviders>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/mapa"
            element={
              <Private>
                <Map />
              </Private>
            }
          />
          <Route
            path="/home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </AuthProviders>
    </BrowserRouter>
  );
}
