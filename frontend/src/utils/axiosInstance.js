import axios from "axios";
import { serverURL } from "./constants";

const axiosInstance = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});

export default axiosInstance;
