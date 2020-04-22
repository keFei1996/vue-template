import router from "./router";
import 'nprogress/nprogress.css' // progress bar style
import NProgress from 'nprogress'
import {getToken} from "./utils/auth"; // progress bar

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }

  const hasToken = getToken();
  if(hasToken){
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/home' })
      document.title = '商户端';
      NProgress.done()
    } else {
      next()
    }
  }else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next('/login');
      NProgress.done()
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})