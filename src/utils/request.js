import Axios from 'axios';
import { urls } from '../constants/urls';


const axios = Axios.create({
    baseURL: urls.baseUrl,
    validateStatus: (status) => {
        if (status === 200 || status === 201 || status === 401) {
            return true;
        }

        return false;
    }
});

export const request = (config) => axios(config);
