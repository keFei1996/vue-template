<template>
    <div class="page-contain mc-page">
        <div class="mc-header">
            <div class="mc-card">
                <img class="img-bg-high" src="@/assets/images/member-bg-high.png"/>
                <div class="first">
                    <div class="no">NO:1234567890</div>
                    <div class="point">积分:<span>769</span></div>
                </div>
                <div class="balance">余额:</div>
                <div class="balance-group">
                    <div class="num">{{  point }}</div>
                    <div class="balance-pay">余额支付</div>
                </div>
            </div>
            <div class="coupon-text">
                <div class="first">优惠券</div>
                <div class="second">您可选择以下一种优惠方式</div>
            </div>
        </div>
        <div class="scroll-group">
            <div class="coupon-list">
                <div class="coupon-item" v-for="(item, index) in couponList" :key="index">
                    <div class="left">
                        <!-- <div class="money">
                          <div>￥</div>
                          <div class="num">25</div>
                        </div> -->
                        <div class="money">
                            <div class="num">8.8</div>
                            <div>折</div>
                        </div>
                        <!-- <div class="full">满100可用</div> -->
                    </div>
                    <div class="circle-line-col">
                        <div class="line"></div>
                    </div>
                    <div class="center">
                        <div class="name">满减券</div>
                        <div class="condition m-t-24">限 2020-12-08 前使用</div>
                        <div class="condition m-t-12">限花果山水果店使用</div>
                    </div>
                    <div class="coupon-use">立即使用</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { priceSwitch } from '../../utils/public-method'
  export default {
    name: "coupon",
    data() {
      return {
        couponList: [1, 1, 1, 1],
        couponObj: {
          point: 1234
        }
      }
    },
    computed: {
      point() {
        return priceSwitch(this.couponObj.point)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "./coupon";
</style>