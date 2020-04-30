import Ajax from '../utils/ajax'

export default {
  login: (data) => {
    return Ajax({
      url: '/vue-element-admin/user/login',
      method: 'post',
      data
    })
  },
  getInfo: (token) => {
    return Ajax({
      url: '/vue-element-admin/user/info',
      method: 'get',
      params: { token }
    })
  },
  logout: () => {
    return Ajax({
      url: '/vue-element-admin/user/info',
      method: 'post',
    })
  },
}