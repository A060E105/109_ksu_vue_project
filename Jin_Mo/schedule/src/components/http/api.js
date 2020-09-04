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

/**
 * 取得國定假日
 */
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
 * 取得當月資訊
 */
var getMonthInfo = (date) => {
    let {year, month} = getDateValue(date);
    return api.get('schedule_api', {
        params: {
            action: 'monthInfo',
            api_token: '1234',
            year: year,
            month: month
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

/**
 * 設定當前日期的資訊，新增員工至指定的班別
 *
 * @param {string} date 要設定的當前日期
 * @param {string} e_id 員工ID
 * @param {string} classID 班別ID
 */
const setDayInfo_add = (date, e_id, classID) => {
    let {year, month} = getDateValue(date);
    let data = {
        "api_token": "1234",
        "action": "add_workday_shift",
        "work_date": date,
        "e_id": e_id,
        "year": year,
        "month": month,
        "hrmc_shift_id": classID
    };
    return api.post('schedule_api', data);
}

/**
 * 設定當前日期的資訊，刪除員工
 *
 * @param {string} date 要設定的當前日期
 * @param {string} e_id 員工ID
 * @param {string} classID 班別ID
 */
const setDayInfo_remove = (date, e_id) => {
    let data = {
        "api_token": "1234",
        "action": "delete_workday_shift",
        "work_date": date,
        "e_id": e_id
    };

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
    setDayInfo_add,
    setDayInfo_remove
};
