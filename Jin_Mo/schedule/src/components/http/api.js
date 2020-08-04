import axios from 'axios';
import config from './config';

const api = axios.create(config);

axios.interceptors.request.use(function (config) {
    return config;
},
function (error) {
    return Promise.reject(error);
});

/**
 * 取得所有員工資訊
 */
var getEmployees = function() {
    return api.post('get_employees');
}

/**
 * 取得當前員工資訊
 */
var getEmpInfo = () => {
    return api.post('');
}

/**
 * 取得當天資訊
 */
var getDayInfo = () => {
    return api.post('');
}

/**
 * 取得當月資訊
 */
var getMonthInfo = () => {
    return api.post('');
}

export default {
    getEmployees,
    getEmpInfo,
    getDayInfo,
    getMonthInfo
};