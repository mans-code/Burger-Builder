import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mans-burger-builder.firebaseio.com/'
});

export default instance;