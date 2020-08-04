import axios from 'axios';
import config from './config';

const api = axios.create(config);

// request interceptors
api.interceptors.request.use(function (config) {
    return config;
},
function (error) {
    return Promise.reject(error);
});

// response interceptors
api.interceptors.response.use(function (response) {
    return response;
},
function (error) {
    return Promise.reject(error);
});


/**
 * 取得所有員工資訊
 */
var getEmployees = function() {
    return api.get('get_employees', {
        params: {
            api_token: 1234
        }
    });
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