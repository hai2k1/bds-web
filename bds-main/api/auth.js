import api, { baseApi } from './index.js';

const keyAuth = 'token';
export const login = (data) => api.post('login', data);
export const register = (data) => api.post('register', data);
const me = () => api.get('restify/profile');
const logout = () => api.get('logout');
export const checkAuth = () => {
    const accessToken = localStorage.getItem(keyAuth);
    if (accessToken !== undefined) {
        api.setToken(accessToken);
        return true;
    }
    return false;
};

export const getUserMe = async () => {
    checkAuth()
    return await me();
}
export const setToken = (accessToken) => {
    api.setToken(accessToken);
    localStorage.setItem(keyAuth, accessToken);
};

export const clearToken = (isAuth) => {
    if (isAuth) {
        logout();
    }
    api.clearToken();
    localStorage.removeItem(keyAuth);
};
