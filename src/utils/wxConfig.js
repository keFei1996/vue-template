import MyApi from '../api/my'
import wx from 'weixin-js-sdk'
import Toast from "vant";

export default {
  wxInit: function (cb) {
    let url = window.location.href.split("#")[0];
    MyApi.jsConfig({url}).then(res => {
      if(res.code === 0 ) {
        let data = res.data;
        wx.config({
          debug: false,  //生产环境需要关闭debug模式
          appId: data.appId, //appId通过微信服务号后台查看
          timestamp: data.timestamp, //生成签名的时间戳
          nonceStr: data.nonceStr, //生成签名的随机字符串
          signature: data.signature, //签名
          jsApiList: [ //需要调用的JS接口列
            "updateAppMessageShareData", //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
            "updateTimelineShareData", //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
            "onMenuShareTimeline",
            "onMenuShareAppMessage",
            "getLocation",
            "hideAllNonBaseMenuItem",
            "showAllNonBaseMenuItem",
            "scanQRCode",
            "closeWindow",
            "hideMenuItems",
            "showMenuItems",
            "openLocation"
          ]
        })
        wx.ready(() => {
          if(cb) {
            cb()
          }
        })
        wx.error(function(res){
          console.log(res)
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
      }else {
        Toast({
          message: res.message,
          type: 'fail'
        })
      }
    })
  }
}