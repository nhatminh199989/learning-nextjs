import axios from "axios";

const API_KEY = "c779fb14bfce4c0e8ecdb4c662b4c1de";

const axiosInstance = axios.create({
    baseURL: `https://crudcrud.com/api/${API_KEY}`,
    headers: {
        "Content-Type": "application/json"
    }
})

const unicornsServices = {
    data: 123,
    getUnicornsList: () => {
        return axiosInstance.get('/unicorns');
    }
} 


export default unicornsServices;