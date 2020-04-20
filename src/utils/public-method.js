import { Toast }  from "vant";

//压缩图片
export const compressImage = (ev, success, error) => {
  if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(ev.target.value)){
    Toast({
      message: '请选择图片',
      duration: 1500,
      forbidClick: true,
    });
    ev.target.value = '';
    return
  }
  let file = ev.target.files[0];
  let quality = 0.9;
  const sizeRatio = parseInt(file.size/ Math.pow(1024, 2))
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

//  对象深拷贝
export const cloneObj = function (obj) {
  const newobj = obj instanceof Array ? [] : {};
  if (typeof obj !== 'object') {
    return;
  } else {
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      // typeof null === 'object'
      if (val === null) {
        newobj[key] = val;
      } else {
        newobj[key] = typeof val === 'object' ? cloneObj(val) : val;
      }
    }
  }
  return newobj;
};