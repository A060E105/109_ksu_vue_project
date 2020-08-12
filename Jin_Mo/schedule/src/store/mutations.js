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
    state.today = getDateStr(date);
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

    mydata.offData = formatEmployeesOffData(data.employee_workday_pre_offs);
    mydata.classData = formatClassData(data.shifts);
    mydata.workData = formatWorkDayData(data.workday_detail);
    mydata.employeesData = formatEmployeesData(data.employees);

    return mydata;
}

/**
 * 將預設班別資料轉換成以ID為Key值的資料格式
 * 
 * @param {object} data 
 * @return {object} 預設班別
 */
const formatClassData = (data) => {
    let classData = {};
    data.forEach(element => {
        classData[element.id] = element;
    });

    return classData;
}

/**
 * 將員工資料轉換成以員工ID為Key值的資料格式
 * 
 * @param {object} data 
 * @return {object} 員工資料
 */
const formatEmployeesData = (data) => {
    let employeesData = {};
    data.forEach(element => {
        employeesData[element.e_id] = element;
    });

    return employeesData;
}

/**
 * 將員工休假資料轉換成以員工ID為Key的資料格式
 * 
 * @param {object} data 
 * @return {object} 休假資料
 */
const formatEmployeesOffData = (data) => {
    let offData = {};
    data.forEach(element => {
        offData[element.e_id] = element;
    });

    return offData;
}

/**
 * 將員工工作日期轉換成以ID為Key值的資料格式
 * 
 * @param {object} data 
 * @return {object} 員工工作資訊
 */
const formatWorkDayData = (data) => {
    let workDayData = {};
    data.forEach(element => {
        workDayData[element.e_id] = element;
    });

    return workDayData;
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