import axios from 'axios'
import config from "./config";
const cors='https://cors-anywhere.herokuapp.com/';

const hliday=axios.create(config)

const apiHlidayList = () => hliday.get('/holiday_api?action=list&api_token=1234');
const apiHlidayadd = data => hliday.post('/holiday_api?action=set&api_token=1234',data);

export default {
    apiHlidayadd,
    apiHlidayList
}