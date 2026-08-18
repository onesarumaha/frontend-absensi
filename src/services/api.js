import axios from "axios";

const api = axios.create({
  baseURL: "https://api-absensi.onesarumaha.my.id/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
