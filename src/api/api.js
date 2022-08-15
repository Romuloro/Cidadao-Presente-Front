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

export const createLocalidade = async (coord, descricao, nickName) => {
  const latitude = String(coord.lat);
  const longitude = String(coord.lng);
  return api.post(`/localidade/${nickName}`, {
    latitude,
    longitude,
    descricao,
  });
}

export const createPost = async (anomino, descricao, status, localidade_id, cidadao_id, problemas_) => {
  return api.post("/post/", {
    anomino,
    descricao,
    status,
    localidade_id,
    cidadao_id,
    problemas_
  });
}
