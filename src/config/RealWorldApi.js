import axios from "axios";
import { STATUS_SUCCESS, STATUS_FAIL } from "./ResponseStatus";

const baseURL = process.env.NEXT_PUBLIC_REAL_WORLD_API;

const RealWorldApi = {
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    }
}

const axiosInstance = axios.create(RealWorldApi);
axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status === STATUS_SUCCESS) {
            return {
                success: true,
                data: response.data,
            }
        }
        return {
            error: false,
            data: {},
        }
    },
    (error) => {       
        return {
            error: true,
            status: error.response.status,
        }
    }
);

export default axiosInstance;