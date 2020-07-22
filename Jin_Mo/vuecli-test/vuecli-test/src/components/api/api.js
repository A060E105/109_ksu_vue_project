import axios from 'axios';
import config from './config';

const api = axios.create(config);

// 攔截 response
api.interceptors.response.use(response => {
    return response;
}, error => {
        return Promise.reject(error);
    }
);

// export default api;


export function getCommits(count) {
    return api.get('commits', {
        params: {
            sha: 'exercise',
            per_page: count
        }
    });
}