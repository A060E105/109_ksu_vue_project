import API from "../components/http/api";

/**
 * 初始化時，取得員工所有資訊、預設班別與預排休假鎖定的設定
 */
export const getAllInfo = ({ commit }) => {
    API.getEmployees().then(response => {
        commit('initilization', response.data);
    })
}