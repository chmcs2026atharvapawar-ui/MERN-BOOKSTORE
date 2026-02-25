import axios from "axios";
const api = axios.create({
    baseURL : 'https://mern-bookstore-fd3x.onrender.com'
})
export default api
