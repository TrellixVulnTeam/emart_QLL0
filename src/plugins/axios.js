import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:9999';

window.axios = axios;
