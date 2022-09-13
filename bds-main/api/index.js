import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/';
export const getUrl = (url) => {
    if (url.startsWith('http')) {
        return url;
    }
    return baseURL + url;
};
const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

const HEADERS_MULTIPLE_PART = {
    ...HEADERS, 'Content-Type': 'multipart/form-data; boundary=something', Accept: 'multipart/form-data',
};
const clearToken = () => {
    delete HEADERS.Authorization;
    delete HEADERS_MULTIPLE_PART.Authorization;
};
const setToken = (accessToken) => {
    HEADERS.Authorization = `Bearer ${accessToken}`;
    HEADERS_MULTIPLE_PART.Authorization = `Bearer ${accessToken}`;
};
const api = {
    get: (url, params) => {
        return axios.get(getUrl(url), {
            params, headers: HEADERS, validateStatus: (status) => status,
        });
    }, post: (url, params) => {
        return axios
            .post(getUrl(url), params, {
                headers: HEADERS, validateStatus: (status) => status,
            });
    }, put: (url, params) => {
        return axios
            .put(getUrl(url), params, {
                headers: HEADERS, validateStatus: (status) => status,
            });
    }, delete: (url, params) => {
        return axios
            .delete(getUrl(url), {
                params, headers: HEADERS, validateStatus: (status) => status,
            });
    },
};

export const baseApi = (model) => {
    const get = (id, query) => api.get(`${model}/${id},`, query);
    const getAll = (query) => api.get(`${model}`, query);
    const add = (data) => api.post(`${model}`, data);
    const edit = (id, data) => api.put(`${model}/${id}`, data);
    const remove = (id) => api.delete(`${model}/${id}`);
    return {
        get, getAll, add, edit, remove,
    };
};
export default {
    ...api, clearToken, setToken
};
