import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import router from '@/router'
import AjaxList from '@/helper/http/AjaxList'

const onRequest = (config: AxiosRequestConfig): any => {
    AjaxList.add(config)
    const getCSRF = () => {
        let element: HTMLElement | null = document.querySelector('meta[name="csrf-token"]')
        return element instanceof HTMLMetaElement ? element.content : ''
    }
    if (localStorage.token) {
        config.headers = { ...config.headers, 'Authorization': `Bearer ${localStorage.token}`, 'X-CSRF-TOKEN': getCSRF() }
    }
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    AjaxList.done(response)
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    AjaxList.done(error)
    if (error.response?.status === 401) {
        localStorage.removeItem('token')
        router.push({ name: 'login' })
    }
    return Promise.reject(error);
}

export const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}
