<template>
  <div class="home">
    <div class="title1">欢迎使用九点云商</div>
    <div class="title2">请选择身份后进行支付</div>
    <div class="member-group">
      <div class="active">会员支付</div>
      <div>非会员支付</div>
      <div class="choose-underline"></div>
    </div>
    <div class="phone">
      <input maxlength="11" type="number" placeholder="请输入会员手机号" v-model="phone" @input="limitLength('phone', 11)">
    </div>
    <div class="code">
      <input maxlength="6" type="number" placeholder="请输入验证码" v-model="code" @input="limitLength('code', 6)">
      <div v-if="!codeSending" class="getCode" @click="getCodeClick">获取验证码</div>
      <div v-else class="getCode">重新获取({{ time }}s)</div>
    </div>
    <div class="button-base button-blue home-button">登录</div>
    <van-popup v-model="show">
      <div class="model-member">
        <img class="img-vip" src="@/assets/images/img_vip.png" alt="">
        <div class="not-member">抱歉，jenkin测试</div>
        <div class="model-tip">您可通过刷脸支付成为会员</div>
        <div class="cancel" @click="modelCancel">取消</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      codeSending: false,
      timeInterval: null,
      time: 60,
      show: true,
      phone: '',
      code: ''
    }
  },
  components: {
  },
  methods:{
    // 限制长度
    limitLength(name, length) {
      if(this[name].length > length) {
        this[name] = this[name].slice(0, length)
      }
    },
    getCodeClick() {
      // this.sendVerifyCode();
      this.codeSending = true;
      this.timeInterval = setInterval(() => {
        if(this.time - 1 === 0) {
          clearInterval(this.timeInterval)
          this.codeSending = false;
          this.time = 60;
        }else {
          this.time--
        }
      }, 1000)
    },
    modelCancel() {
      this.show = false
    }
  }
}
</script>

<style lang="scss">
  @import "./home";
</style>
