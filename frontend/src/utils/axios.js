import axios from "axios";

const api = new axios.create({
  baseURL: "http://localhost:5000/api",
});

export default api;
