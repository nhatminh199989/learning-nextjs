import axiosInstance from "@/config/RealWorldApi";

const UserService = {
    registerUser: (params= {}) => {
        return axiosInstance.post('/users', params);
    },
    loginUser: (params= {}) => {
        return axiosInstance.post('/users/login', params);
    }
}

export default UserService;