const { default: axios } = require("axios");
const url = "https://strapi-store-server.onrender.com/api";
export const customFetch = axios.create({
  baseURL: url,
});
