/**
 * 設定當前日期
 * 
 * @param {String} currentDate 
 */
export const setCurrentDate = (state, currentDate) => {
    state.currentDate = currentDate;
};

/**
 * 初始化當前日期，預設為當天日期
 * 
 */
export const initCurrentDate = (state) => {
    let date = new Date();

    state.currentDate = getDateStr(date);
}

/**
 * 返回當日的日期，格式為 YYYY-MM-DD
 * 
 * @param {Date} date 
 * @return {String} date string
 */
const getDateStr = (date) => {
    let dateStr = date.getFullYear();
    if (date.getMonth() <= 9) {
        dateStr += '-0' + (date.getMonth() + 1);
    } else {
        dateStr += '-' + (date.getMonth() + 1);
    }
    if (date.getDate() <= 9) {
        dateStr += '-0' + date.getDate();
    } else {
        dateStr += '-' + date.getDate();
    }

    return dateStr;
}