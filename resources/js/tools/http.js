import axios from 'axios'

import router from '../router'

const instance = axios.create({
    baseURL: '/api',
    // timeout: 1000,
    headers: {
        'Accept': 'application/json'
    }
});

const getCSRF = () => {
    return document.querySelector('meta[name="csrf-token"]').content
}

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    if (localStorage.token) {
        config.headers = { ...config.headers, 'Authorization': `Bearer ${localStorage.token}`, 'X-CSRF-TOKEN': getCSRF() }
    }
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response.status === 401) {
        localStorage.removeItem('token')
        router.push({ name: 'login' })
    }

    return Promise.reject(error);
});


export default instance
