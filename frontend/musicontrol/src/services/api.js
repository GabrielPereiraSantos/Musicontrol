import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // endereço do backend
});

export default API;
