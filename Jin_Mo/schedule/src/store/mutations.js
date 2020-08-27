/**
 * 設定當前日期
 * 
 * @param {String} currentDate 
 */
export const setCurrentDate = (state, currentDate) => {
    state.currentDate = currentDate;
    state.currentMonth = splitDate(currentDate).month;
};

/**
 * 初始化當前日期，預設為當天日期
 * 
 */
export const initCurrentDate = (state) => {
    let date = new Date();
    let month = date.getMonth() + 1;

    state.currentDate = getDateStr(date);
    state.today = getDateStr(date);
    state.currentMonth = (month <= 9) ? '0'+month : month;
}

/**
 * 初始化state中的資料
 * 
 * @param {object} data 伺服器回傳的資料
 */
export const initilization = (state, data) => {
    let myData = formatData(data);
    console.log('myData', myData);
    state.defaultClass = myData.classData;
    state.employeesList = myData.employeesData;
    state.restDays = myData.restDays;
    state.offDays = myData.offDays;
}

/**
 * 設定當前員工編號
 * 
 * @param {string} employee 
 */
export const setEmployee = (state, employee) => {
    state.currentEmployee = employee;
}

/**
 * 設定當天資訊
 * 
 * @param {object} dayInfo
 */
export const setDayInfo = (state, dayInfo) => {
    state.dayInfo = dayInfo;
}

/**
 * 設定當前員工資訊
 * 
 * @param {object} employeeInfo 
 */
export const setEmployeeInfo = (state, employeeInfo) => {
    state.employeeInfo = employeeInfo;
}

/**
 * 設定國定假日
 * 
 * @param {array} data 
 */
export const setHoliday = (state, data) => {
    state.holiday = filterData(data);
}

/**
 * 將例假日過濾掉，並轉換日期格式
 * 
 * @param {Array} data 
 */
var filterData = (data) => {
    let newData = data.filter(function(item, index, array) {
        return item.holidayCategory != '星期六、星期日';
    });

    newData.forEach(element => {
        let date = element.date.split('/');
        for(let i=1; i<=2; i++) {
            if (date[i].length == 1) {
                date[i] = '0' + date[i];
            }
        }
        element.date = date[0] + '-' + date[1] + '-' + date[2];
        
        // 將彈性放假放至名稱的
        if (element.name == '') {
            element.name = element.holidayCategory;
        }
    });

    return newData;
}

/**
 * 將資料轉換成較方便使用的格式
 * 
 * @param {object} data  response data
 * @return {object}  轉換過的格式
 */
const formatData = (data) => {
    let mydata = {};

    mydata.classData = formatDataKeys(data.shifts, 'id');
    mydata.employeesData = formatDataKeys(data.employees, 'e_id');
    mydata.offDays = formatObjectKeyBits(data.offDays);
    mydata.restDays = formatObjectKeyBits(data.restDays);

    return mydata;
}

/**
 * format object key to two number
 * 
 * @param {object} data
 */
const formatObjectKeyBits = (data) => {
    let temp = {};
    let indexes = Object.keys(data);
    indexes.forEach((element, index) => {
        if (element <= 9) {
            element = '0' + element;
        }
        temp[element] = data[indexes[index]];
    })

    return temp;
}

/**
 * 將物件中的資料指定為新的key值
 * 
 * @param {object} data 
 * @param {string} key
 */
const formatDataKeys = (data, key) => {
    let temp = {};
    data.forEach(element => {
        temp[element[key]] = element;
    });

    return temp;
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

/**
 * 將日期"YYYY-MM-DD"，拆分為，年、月、日
 *
 * @param {string} date
 */
const splitDate = date => {
    let year, month, day = '';
    let value = date.split('-');

    year = value[0];
    month = value[1];
    day = value[2];

    return {year, month, day};
}
