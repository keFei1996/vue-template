import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
    path: '/coupon',
    component: () => import('@/views/coupon/coupon.vue'),
    meta: { title: '会员优惠'}
  },
]

const router = new VueRouter({
  routes
})

export default router
