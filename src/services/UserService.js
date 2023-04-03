import axios from "axios";
import RealWorldApi from "@/config/RealWorldApi";

const axiosInstance = axios.create(RealWorldApi);

const UserService = {
    registerUser: (params= {}) => {
        return axiosInstance.post('/users', params);
    }
}

export default UserService;