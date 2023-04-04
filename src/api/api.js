import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:6789/api/v1/`,
});

export default api;
