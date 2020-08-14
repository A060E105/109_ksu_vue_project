import axios from 'axios'
import VueAxios from 'vue-axios'
const cors='https://cors-anywhere.herokuapp.com/';

const hlidayRequest=axios.create({
    baseURL:`${cors}http://admin_ecover.maxosoft.com/index.php/api/HRMClinic/v1/vue_api`
})

export const apiHlidayList = () => hlidayRequest.get('/holiday_api?action=list&api_token=1234');
export const apiHlidayadd = data => hlidayRequest.post('/holiday_api?action=set&api_token=1234',data);