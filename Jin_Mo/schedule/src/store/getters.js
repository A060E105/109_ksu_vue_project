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
