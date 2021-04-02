<template>
  <div>login
    <div @click="loginClick" class="login-name">登录</div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Mock from 'better-mock'
  import user from '../../api/user'
  Mock.mock('/vue-element-admin/user/login', {
    'list|1-10': [{
      'id|+1': 1,
      'email': '@EMAIL'
    }]
  })
  export default {
    name: "login",
    created() {
      this.postLogin()
    },
    methods: {
      // 点击登录
      loginClick() {
        this.$router.push({
          path: '/home'
        })
      },
      postLogin() {
        user.login({}).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./login";
</style>
