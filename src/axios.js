import axios from "axios";

const instance = axios.create({
    baseURL : '...' //the cloud function URL
});

export default instance;