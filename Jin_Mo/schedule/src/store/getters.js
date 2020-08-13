/**
 * 取得當前日期
 * @return current date
 */
export const getCurrentDate = state => state.currentDate;


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
export const getEmployeesList = state => state.employeesList