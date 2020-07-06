import { Toast }  from "vant";

//压缩图片
export const compressImage = (ev, success, error) => {
  if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(ev.target.value)){
    // Toast({
    //   message: '请选择图片',
    //   duration: 1500,
    //   forbidClick: true,
    // });
    ev.target.value = '';
    return
  }
  let file = ev.target.files[0];
  let quality = 0.9;    // 压缩质量
  const sizeRatio = parseInt(file.size/ Math.pow(1024, 2));   // 文件大小
  if(sizeRatio < 0.1) {
    quality = 0.5
  }else {
    quality = 0.05
  }
  const name = file.name; //文件名
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    const src = e.target.result;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const w = img.width;
      const h = img.height;
      //生成canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      // 创建属性节点
      const anw = document.createAttribute("width");
      anw.nodeValue = w;
      const anh = document.createAttribute("height");
      anh.nodeValue = h;
      canvas.setAttributeNode(anw);
      canvas.setAttributeNode(anh);

      //铺底色 PNG转JPEG时透明区域会变黑色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      // quality值越小，所绘制出的图像越模糊
      const base64 = canvas.toDataURL('image/jpeg', quality); //图片格式jpeg或webp可以选0-1质量区间
      // 返回base64转blob的值
      console.log(`原图${(src.length/1024).toFixed(2)}kb`, `新图${(base64.length/1024).toFixed(2)}kb`);
      //去掉url的头，并转换为byte
      const bytes = window.atob(base64.split(',')[1]);
      //处理异常,将ascii码小于0的转换为大于0
      const ab = new ArrayBuffer(bytes.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      file = new Blob( [ab] , {type : 'image/jpeg'});
      file.name = name;
      success(file);
    }
    img.onerror = (e) => {
      error(e);
    }
  }
  reader.onerror = (e) => {
    error(e);
  }
}

// 以下为小程序批量上传图片

// 图片队列
// function queue(urls, cb) {
//   let promise = Promise.resolve()
//   urls.forEach((url) => {
//     promise = promise.then(() => {
//       return uploadFile(url, cb)
//     })
//   })
//   return promise
// }
//
// function uploadFile(url, cb) {
//   let that = this;
//   return new Promise((resolve, reject) => {
//     wx.uploadFile({
//       url: Api.API_BASE_URL + '/mini/upload', //仅为示例，非真实的接口地址
//       filePath: url,
//       name: 'file',
//       header: {
//         'content-type': 'application/x-www-form-urlencoded',
//       },
//       success({ data }) {
//         // 成功返回示例
//         data = JSON.parse(data)
//         if (data.code === 0) {
//           console.log(data)
//           if(cb) {
//             cb(data)
//           }
//           resolve()
//         } else {
//           reject(data.msg)
//         }
//       },
//       fail(err) {
//         reject(err)
//       }
//     })
//   })
// }
// export const imgBatch = (num = 1, cb) => {
//   wx.chooseImage({
//     count: num,
//     sizeType: ['compressed'],
//     sourceType: ['album', 'camera'],
//     success(res) {
//       // tempFilePath可以作为img标签的src属性显示图片
//       const tempFilePaths = res.tempFilePaths;
//       wx.showLoading({
//         title: '图片上传中',
//         mask: true
//       })
//       queue(tempFilePaths, cb).then(res => {
//         wx.hideLoading();
//       })
//       .catch(err => {
//         app.toast(err);
//         wx.hideLoading()
//       });
//     }
//   })
// }