import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3003",
  withCredentials: true,
});

export const getAuth = async (email, senha) => {
  return api.post("/cidadao/login", { email, senha });
};

export const getAllPost = async () => {
  return api.get("/post/")
}