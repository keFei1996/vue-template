<template>
  <div>login
    <div @click="loginClick">登录</div>
  </div>
</template>

<script>
  export default {
    name: "login",
    methods: {
      // 点击登录
      loginClick() {
        this.$router.push({
          path: '/home'
        })
      },
    }
  }
</script>

<style scoped>

</style>