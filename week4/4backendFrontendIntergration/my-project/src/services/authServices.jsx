import axios from 'axios';

const API = axios.create({
    baseURL:'http://localhost:4000' // this the backend URL
});

export const registerUser = (userData) => {
    API.post('/register', userData)
}
