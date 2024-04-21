import BASE_URL from "@/constants/baseUrl";
import axios from "axios";

const AxiosServer = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

AxiosServer.interceptors.request.use(function (confige) {

  return confige;
});

AxiosServer.interceptors.response.use(function (confige) {

  return confige;
});

export default AxiosServer;
