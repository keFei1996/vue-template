import router from "./router";
import 'nprogress/nprogress.css' // progress bar style
import NProgress from 'nprogress' // progress bar

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});