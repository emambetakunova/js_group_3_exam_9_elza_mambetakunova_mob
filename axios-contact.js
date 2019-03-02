import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://contact-exam9.firebaseio.com/'
});

export default instance;