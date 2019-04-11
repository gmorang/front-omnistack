import axios from "axios";

const api = axios.create({
  baseURL: "https://api-omnistack.herokuapp.com"
});

export default api;
