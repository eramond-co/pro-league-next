import BASE_URL from "@/constants/baseUrl";
import axios from "axios";

const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default Axios;
