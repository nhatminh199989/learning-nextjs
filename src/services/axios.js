import axios from "axios";
import Api1Config from "@/config/Api1Config";

const axiosInstance = axios.create(Api1Config);

const postServices = {
    getListPost: () => {
        return axiosInstance.get('/posts');
    },
    deletePost: (id) => {
        return axiosInstance.delete(`/posts/${id}`);
    },
    addPost: (params = {}) => {
        return axiosInstance.post(`/posts`, params);
    },
    editPost: (id, params = {}) => {
        return axiosInstance.put(`/posts/${id}`, params); 
    },
}

export default postServices;