import axios from 'axios';
import config from './config';

const api = axios.create(config.back);
const holiday = axios.create(config.calendar);

// request interceptors
api.interceptors.request.use(function (config) {
    return config;
},
function (error) {
    return Promise.reject(error);
});

// response interceptors
api.interceptors.response.use(function (response) {
    response.data = replaceData(response.data);
    return response.data;
},
function (error) {
    return Promise.reject(error);
});

// holiday response interceptors
holiday.interceptors.response.use(function (response) {
    return response.data;
}),
function (error) {
    return Promise.reject(error);
}


/**
 * 刪除字串的雙引號，讓格式符合JSON物件
 *
 * @param {JSON} data - 伺服器回傳的JSON物件
 * @return {JSON} JSON Object
 */
var replaceData = function (data) {
    data = JSON.stringify(data);
    data = data.replace(/\"\[/g, '\[');
    data = data.replace(/\"\]\"/g, '\"\]');
    data = data.replace(/\:\"\{/g, '\:\{');
    data = data.replace(/\}\}\"/g, '\}\}');
    data = data.replace(/\\/g, '');
    return JSON.parse(data);
}

var getHoliday = () => {
    return holiday.get('json', {
        params: {
            page: 4,
            size: 200
        }
    })
}

/**
 * 取得所有員工資訊
 */
var getEmployees = function() {
    return api.post('get_employees', {
        api_token: 1234
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
    getMonthInfo,
    getHoliday
};