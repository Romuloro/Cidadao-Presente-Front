import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import { api, getAuth } from "../api/api";

export const AuthContext = createContext();

export const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  /* async function fetchData() {
    const recovered = await localStorage.getItem("user");
    return recovered
  } */
  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    console.log("Recovered user: " + recoveredUser);
    setUser(recoveredUser);
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await getAuth(email, password);
      console.log(response.data);
      console.log(document.cookie)
      /* const cookie = response.get("token");
      console.log(cookie); */
      /* console.log(lingua); */

      /* if (response) {
        const response_token = await getTokenValues(response.data.token);

        const complet_name = `${response_token.data.name}_${response_token.data.last_name}`;

        localStorage.setItem("user", complet_name);
        localStorage.setItem("id", response_token.data.id);
        localStorage.setItem("token", JSON.stringify(response.data.token));

        api.defaults.headers.Authorization = `bearer ${response.data.token}`;
        api.defaults.headers.common = {
          Authorization: `Bearer ${response.data.token}`,
        };

        setUser(complet_name);
        navigate(`/home/${lingua}?name=${complet_name}`);
      } */
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    console.log("vai ralar!");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    api.defaults.headers.Authorization = null;
    setUser(null);
    setLoading(false);
    navigate("/");
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: Boolean(user), user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
