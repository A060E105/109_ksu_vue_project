/**
 * 取得當前日期
 * @return current date
 */
export const getCurrentDate = state => state.currentDate;

/**
 * 取得當前員工資訊
 */
export const getEmployeeInfo = state => state.employeeInfo;

/**
 * 取得預設班別 
 */
export const getDefaultClass = state => state.defaultClass;

/**
 * 取得國定假日
 */
export const getHoliday = state => state.holiday;

/**
 * 取得當天日期
 */
export const getToday = state => state.today;

/**
 * 取得當前選擇的員工編號
 */
export const getEmployee = state => state.currentEmployee;

/**
 * 取得所有員工資料
 */
export const getEmployeesList = state => state.employeesList;

/**
 * 取得當日資料
 */
export const getDayInfo = state => state.dayInfo;

/**
 * 取得當前月份
 */
export const getCurrentMonth = state => state.currentMonth;

/**
 * 取得月份的休假日
 *
 * @param {string} month
 */
export const getRestDays = (state) => (month) => state.restDays[month];

/**
 * 取得月份的例假日
 *
 * @param {string} month
 */
export const getOffDays = (state) => (month) => state.offDays[month];

/**
 * 查詢員工在當前日期有沒有上班
 *
 * @param {string} e_id 員工ID
 * @return {boolean} true or false
 */
export const getDayWorkFlag = state => (e_id) => {
    let temp = [];
    let index = Object.keys(state.dayInfo);
    index.forEach(element => {
        temp.push(...state.dayInfo[element]);
    });

    let result = temp.some((item) => {
        return item == e_id;
    });

    return result;
}

/**
 * 取得員工所在的班別簡稱
 *
 * @param {string} e_id 員工ID
 * @return {string} 班別簡稱
 */
export const getEmpClassName = state => (e_id) => {
    let classID = '';
    let index = Object.keys(state.dayInfo);
    index.forEach(element => {
        let flag = false;
        flag = state.dayInfo[element].some(item => {
            return item == e_id;
        });
        if (flag) {
            classID = element;
        }
    });
    return state.defaultClass[classID]['nick_name'];
}

/**
 * 取得員工所在的班別ID
 *
 * @param {string} e_id 員工ID
 * @return {string} 班別ID
 */
export const getEmpWorkClassID = state => (e_id) => {
    let classID = '';
    let index = Object.keys(state.dayInfo);
    index.forEach(element => {
        let flag = false;
        flag = state.dayInfo[element].some(item => {
            return item == e_id;
        });
        if (flag) {
            classID = element;
        }
    });

    return classID;
}

/**
 * 取得當前班別ID
 */
export const getCurrentClassID = state => state.currentClassID;

/**
 * 查詢員工在當前日期是否有預排休假
 *
 * @param {string} e_id 員工ID
 * @return {boolean} true or false
 */
export const get_isPreOff = state => (e_id) => {
    if (state.workday_pre_off[e_id] == undefined) {
        return false;
    } else {
        return state.workday_pre_off[e_id]["off_days"].some(item => {
            return item == state.currentDate;
        });
    }
}

/**
 * 取得當前月份資訊，透過指令來取得不同的值，`keys`取得當前月份有排班的日期陣列，
 * `info`取得日期的班別人數資訊，若指令為空則回傳當前月份所有資訊
 * 
 * @param {string} action `keys`、`info`
 * @param {string} date 當`action`為`info`時，需要傳入要查詢的日期
 */
export const getMonthInfo = state => (action, date) => {
    switch (action) {
        case 'keys':
            let _keys = Object.keys(state.monthInfo);
            return _keys;
        case 'info':
            let info = [];
            let str = '';
            let classID = Object.keys(state.monthInfo[date]);
            classID.sort();
            classID.forEach((element, index) => {
                str = (index + 1) + '.';
                str += state.defaultClass[element]['shift_name'];
                str += ' (';
                str += state.monthInfo[date][element].length;
                str += ')';
                info.push(str);
            });
            return info;
        default:
            return state.monthInfo;
    }
}