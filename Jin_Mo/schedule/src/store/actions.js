import API from "../components/http/api";

/**
 * 初始化時，取得員工所有資訊、預設班別與預排休假鎖定的設定
 */
export const initInfo = ({ state, commit }) => {
    commit('initCurrentDate');
    API.getEmployees().then(response => {
        commit('initilization', response.data);
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

export const setDayInfo_add = ({ state, commit }) => {
    API.setDayInfo_add(state.currentDate, state.currentEmployee, state.currentClassID).then(response => {
        console.log(response);
        commit('setDayInfo_add', {
            'classID': state.currentClassID,
            'e_id': state.currentEmployee
        });
    });
}

export const setDayInfo_remove = ({ state, commit }, info) => {
    API.setDayInfo_remove(state.currentDate, info.e_id).then(response => {
        console.log(response);
        commit('setDayInfo_remove', {
            'classID': info.classID,
            'e_id': info.e_id
        });
    });
}
