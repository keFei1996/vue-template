import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import 'lib-flexible'
import './utils/ajax'
import './styles/style.scss'
import './styles/project.scss'
import wx from 'weixin-js-sdk'
import VConsole from 'vconsole'

if(process.env.NODE_ENV !== 'production' || process.env.VUE_APP_FLAG !== 'pro') {
  // new VConsole()
}

import moment from 'moment'//导入文件
Vue.prototype.$moment = moment;//赋值使用

moment.locale('zh-cn');//需要汉化

Vue.prototype.$wx = wx;

// 设置不同环境的域名
if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$baseUrl = '/api';
  Vue.prototype.$couponUrl = '/coupon'
} else if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_FLAG === 'pro') {
    //production 生产环境
    Vue.prototype.$baseUrl = 'https://faceqr.luxcon.cn';
    // Vue.prototype.$couponUrl = '/coupon'
  } else {
    //test 测试环境
    Vue.prototype.$baseUrl = 'https://dev.luxcon.cn';
    Vue.prototype.$couponUrl = 'http://facedprd.luxcon.cn'
  }
}

import { Toast, Popup } from 'vant'
Vue.use(Toast)
  .use(Popup)

Vue.config.productionTip = false

let userAgent = navigator.userAgent;
Vue.prototype.$isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
Vue.prototype.$isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

//软键盘关闭事件
if(userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
  document.body.addEventListener('focusout', () => {
    setTimeout(() => {
      window.scroll(0, 0)
    })
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
