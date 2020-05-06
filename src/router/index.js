import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/home.vue'),
    meta: { title: '首页'}
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    meta: { title: '登录'}
  },
  {
    path: '/test',
    component: () => import('@/views/test/test.vue'),
    meta: { title: '测试'}
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
