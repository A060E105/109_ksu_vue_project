import axios from 'axios';
import config from './config';

// =======================================
// 即使股價的API
// =======================================
const api = axios.create(config.newest_stock);

// =======================================
// 後端伺服器的API
// =======================================
const back = axios.create(config.back_end);

// =======================================
// 後端伺服器的回傳結果攔截器，先將資料轉換
// 為正確的JSON格式
// =======================================
back.interceptors.response.use(response => {
    return replaceData(response.data);
})
, error => {
    return Promise.reject(error);
}

/**
 * 刪除字串的雙引號，讓格式符合JSON物件
 * 
 * @param data - 伺服器回傳的JSON物件
 * @return JSON Object
 */
var replaceData = function (data) {
    data = JSON.stringify(data);
    data = data.replace(/\:\"\[/, '\:\[');
    data = data.replace(/\"\]\"/, '\"\]');
    data = data.replace(/\:\"\{/g, '\:\{');
    data = data.replace(/\}\}\"/g, '\}\}');
    data = data.replace(/\\/g, '');
    return JSON.parse(data);
}

/**
 * 取得及時股價的 params 格式處理函式
 * 
 * @param stockList - 要查詢的股票代碼列表
 * @return {list} 處理過的 params
 */
var setParams = function (stocksList) {
    let len = stocksList.length;
    let params = '';
    if (len <= 1) {
        params = `tse_${stocksList[0]}.tw`;
    } else {
        let i = 0;
        for (i = 0; i < len; i++) {
            if ( i != len-1)
                params += `tse_${stocksList[i]}.tw|`;
            else
                params += `tse_${stocksList[i]}.tw`;
        }
    }
    return params;
}

/**
 * 取得及時股價的函式
 * 
 * @param data - 要查詢的股票代碼
 */
var getData = function (data) {
    return api.get('getStockInfo.jsp', {
        params: {
            ex_ch: setParams(data)
        }
    });
}

/**
 * 取得關注的股票代碼
 * 
 * @param data - post請求的data 
 */
var getWatchStock = function (data) {
    return back.post('member_watch_stocks', {
        // 展開物件
        ...data
    });
}




export default {
    getData,
    getWatchStock
}
