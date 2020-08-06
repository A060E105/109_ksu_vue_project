import API from "../components/http/api";

/**
 * test function
 */
export const setCurrentDate = ({ commit }) => {
    commit('setCurrentDate', '2020-07-01');
};

export const getAllInfo = ({ commit }) => {
    API.getEmployees().then(response => {
        commit('initilization', response.data);
    })
}