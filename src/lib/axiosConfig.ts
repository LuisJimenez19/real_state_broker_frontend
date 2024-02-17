import { BASE_URL_API } from "@/config";
import Axios from "axios";

const axios = Axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  withXSRFToken: true,
});

/* axios.interceptors.request.use((config)=>{
    
}) */

export default axios;
