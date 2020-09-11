import API from "../components/http/api";

/**
 * 初始化時，取得員工所有資訊、預設班別與預排休假鎖定的設定
 */
export const getAllInfo = ({ state, commit }) => {
    API.getEmployees().then(response => {
        commit('initilization', response.data);
        commit('initCurrentDate');
        API.getDayInfo(state.currentDate).then(response => {
            let index = Object.keys(response.data.dayInfo);
            let dayInfo = response.data.dayInfo[index];
            commit('setDayInfo', dayInfo);
        });
        API.getMonthInfo(state.currentDate).then(response => {
            commit('setWorkDayPreOff', response.data.workday_pre_off);
            commit('setMonthInfo', response.data.monthInfo);
        });
    });
}

/**
 * 更新當前月份資訊
 */
export const updateMonthInfo = ({ state, commit }) => {
    API.getMonthInfo(state.currentDate).then(response => {
        commit('setWorkDayPreOff', response.data.workday_pre_off);
        commit('setMonthInfo', response.data.monthInfo);
        console.log('update month info success');
    });
}