// 手机号验证
export const validateMobilePhone = (value) => {
  var reg=/^1[3456789]\d{9}$/;
  if(reg.test(value)) {
    return true
  }else {
    return false
  }
};

// 银行号转化为星号
export const cardToStar = function(str1) {
  if(str1.length < 16) {
    return str1;
  }else {
    let lastFour = str1.slice(-4);
    let begin = str1.slice(0, 8);
    let newArr = begin + new Array(str1.length - 11).join("*") + lastFour;
    newArr = newArr.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
    return newArr
  }
}

// 金额输入最多输入一位小数点和2位小数
// export const money = function (val) {
//   let num = val.toString(); //先转换成字符串类型
//   if (num.indexOf('.') == 0) { //第一位就是 .
//     num = '0' + num
//   }
//   num = num.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
//   num = num.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
//   num = num.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
//   num = num.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
//   if (num.indexOf(".") < 0 && num != "") {
//     num = parseFloat(num);
//   }
//   return num
// }
// 密码须包含数字、字母、符号至少2种或以上元素
export const passwordLevel = function(password) {
  let Modes = [];
  for (let i = 0; i < password.length; i++) {
    Modes.push(CharMode(password.charCodeAt(i)))
  }
  return bitTotal(Modes);
  //CharMode函数
  function CharMode(iN) {
    if (iN >= 48 && iN <= 57)//数字
      return 1;
    if (iN >= 65 && iN <= 90) //大写字母
      return 2;
    if ((iN >= 97 && iN <= 122) || (iN >= 65 && iN <= 90))
  //大小写
      return 4;
    else
      return 8; //特殊字符
  }
  //bitTotal函数
  function bitTotal(num) {
    let modeTotal = 0;
    if(num.includes(1)) {
      modeTotal++
    }
    if(num.includes(2) || num.includes(4)) {
      modeTotal++
    }
    if(num.includes(8)) {
      modeTotal++
    }
    return modeTotal;
  }
}