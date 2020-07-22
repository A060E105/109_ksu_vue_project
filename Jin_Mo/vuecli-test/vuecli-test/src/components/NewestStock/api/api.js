import axios from 'axios';
import config from './config';

const api = axios.create(config);

api.interceptors.request.use(config => {
    // console.log('request', config);
    return config;
}, error => {
    return Promise.reject(error);
});

// 攔截 response
api.interceptors.response.use(response => {
    return response;
}, error => {
        return Promise.reject(error);
    }
);

var params = function (stocksList) {
    let len = stocksList.length;
    let params = '';
    if (len <= 1) {
        params = `tse_${stocksList[0]}.tw`;
    } else {
        let i = 0;
        for (i = 0; i < len; i++) {
            if ( i != len-1)
                params += `tse_${stocksList[i]}.tw|`;
            else
                params += `tse_${stocksList[i]}.tw`;
        }
    }
    return params;
}


export default {
    api,
    params
}
