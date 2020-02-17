import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import 'lib-flexible'
import './styles/style.scss'
import './styles/project.scss'

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
