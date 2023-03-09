import axios from "axios";
import Api1Config from "@/config/Api1Config";

const axiosInstance = axios.create(Api1Config);

const commentServices = {
    getComments: () => {
        return axiosInstance.get('/comments');
    }
}

export default commentServices;