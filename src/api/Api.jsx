import axios from "axios";

const api = axios.create({
  baseURL: "https://64c2afe3eb7fd5d6ebd037ee.mockapi.io/",
});

const Api = {
  getHouses: () => api.get("house"),
  deleteHouse: (id) => api.delete("house/" + id),
  createHouse: (data) => api.post("house", data),
  getHouseById: (id) => api.get("house/" + id),
};

export default Api;
