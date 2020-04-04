import axios from 'axios';

let prefix = '/api'
const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/mock/11',
    method: 'get',
    timeout: 2000,
})

//请求拦截
instance.interceptors.request.use(
    function (config) {
        config.url = prefix + config.url;
        if(config.method !== 'post') {
            config.params = config.data;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
)

// 响应拦截
instance.interceptors.response.use(
    function(response) {
        console.log('http.js===========>', response);
        if(response.data.success) {
            return response.data;
        } else if(response.data.errorCode == '10000') {
            window.location.href = '/';
            return response.data;
        } else {
            return Promise.reject(new Error(response.data.errmsg));
        }
    },
    function(error) {
        return Promise.reject(error);
    }
)

class Http {
    static install(Vue) {
        Vue.prototype.$http = Http.ajax;
    }

    static ajax(request) {
        return new Promise((res, rej) => {
            instance.request(request)
                .then(data => {
                    res(data);
                }, err => {
                    rej(err);
                })
        })
        
    }
}

export default Http;