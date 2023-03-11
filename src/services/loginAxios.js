import axios from "axios";
import Api1Config from "@/config/Api1Config";

const axiosInstance = axios.create(Api1Config);

const LoginService = {
    login: (params= {}) => {
        return axiosInstance.post('/login', params);
    }
}

export default LoginService;