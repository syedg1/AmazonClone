import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-75c6d.cloudfunctions.net/api' // API URL for Cloud Function
});

export default instance;