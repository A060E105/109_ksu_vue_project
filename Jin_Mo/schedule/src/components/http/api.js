import axios from 'axios';
import config from './config';

const api = axios.create(config.back);
const holiday = axios.create(config.holiday);

// request interceptors
api.interceptors.request.use(function (config) {
    return config;
},
function (error) {
    return Promise.reject(error);
});

// response interceptors
api.interceptors.response.use(function (response) {
    // response.data = replaceData(response.data);
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
var getEmpInfo = (date, e_id) => {
    let {year, month} = getDateValue(date);
    return api.get('schedule_api', {
        params: {
            api_token: '1234',
            action: 'empInfo',
            year: year,
            month: month,
            emp_id: e_id
        }
    });
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
    return api.get('schedule_api', {
        params: {
            action: 'monthInfo',
            api_token: '1234',
            year: '2020',
            month: '9'
        }
    });
}

/**
 * 取得當日資訊
 *
 * @param {string} date current date
 */
var getDayInfo = (date) => {
    return api.get('schedule_api', {
        params: {
            action: 'dayInfo',
            api_token: '1234',
            work_date: date
        }
    });
}

var setDayInfo = (date, dayInfo) => {
    let data = {
        api_token: '1234',
        action: 'post_dayInfo',
        work_date: date,
    };
    data[date] = dayInfo;
    console.log(data);
    return api.post('schedule_api', data);
}

/**
 * 拆解日期字串
 * 
 * @param {string} date 日期字串
 * @returns \{ year, month, day }
 */
var getDateValue = date => {
    let str = date.split('-');
    let year = str[0];
    let month = str[1];
    let day = str[2];

    return {year,month,day};
}

export default {
    getEmployees,
    getEmpInfo,
    getDayInfo,
    getMonthInfo,
    getHoliday,
    setDayInfo
};
