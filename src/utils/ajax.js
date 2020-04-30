import axios from 'axios'
import QS from 'qs'
import {Toast} from 'vant'
import Vue from 'vue'

// 请求基础url
// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV === 'production') {
//   if (process.env.VUE_APP_FLAG === 'pro') {
//     //production 生产环境
//     axios.defaults.baseURL = 'https://afts.luxcon.cn';
//   } else {
//     //test 测试环境
//     axios.defaults.baseURL = 'http://hd-admin.9jiudian.com';
//   }
// }

// 请求超时时间
axios.defaults.timeout = 1000 * 10;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // const hasToken = getToken()
    // if (hasToken) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['Authorization'] = 'Bearer ' + hasToken;
    // }
    return config;
  },
  // Do something with request error
  error => Promise.reject(error),
);

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  // let data = response.data;
  // if(data.code === 401) {
  //   store.dispatch('user/loginCheck');
  // }
  return response.data;
}, error => {
  // 对响应错误做点什么
  console.log('err' + error) // for debug
  Toast({
    message: error.message,
    type: 'fail',
    duration: 2000
  });
  return Promise.reject(error);
});

Vue.prototype.$ajax = axios;
Vue.prototype.$toQS = (obj) => QS.stringify(obj);
export default axios
