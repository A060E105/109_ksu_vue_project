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

export const initHoliday = ({ commit }) => {
    API.getHoliday().then(response => {
        commit('setHoliday', filterData(response));
    })
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
        
        if (element.name == '') {
            element.name = element.holidayCategory;
        }
    });

    return newData;
}