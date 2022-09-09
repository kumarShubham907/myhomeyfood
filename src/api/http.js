import axios from 'axios';
import { DEFAULT_ERROR } from '../utils/constent';

const API_BASE_URI =
    process.env.REACT_APP_BACKEND_URL;

const http = axios.create({
    baseURL: `${API_BASE_URI}/api`,
});

http.interceptors.request.use(function (config) {
    const user = sessionStorage.getItem('Role');

    if (user) {
        config.headers.common['Authorization'] = sessionStorage.getItem('AccessToken');
    }

    return config;
});

http.interceptors.response.use(
    (response) => {
        const { data: { message } } = response
        switch (response.config.method) {
            case 'put':
            case 'patch':
                return {
                    message: 'Updated item'
                }
            case 'post':
                return {
                    message: response.status === 201 ? 'Item created' : message
                }
            case 'delete':
                return {
                    message: 'Item deleted'
                }
        }
        return response;
    },
    (error) => {
        const response = error.response;

        if (!response) {
            const message = 'Unable to communicate with the server';
            console.error(message);

            return Promise.reject(error);
        }

        switch (response.status) {
            case 401:

            case 406:
                return {
                    message: "Invalid or missing values"
                }

            default:
                ({
                    message: `${DEFAULT_ERROR}`
                })
                break;
        }

        return Promise.reject(error);
    }
);

export { http };
