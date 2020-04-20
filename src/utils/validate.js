// 手机号验证
export const validateMobilePhone = (value) => {
  var reg=/^1[3456789]\d{9}$/;
  if(reg.test(value)) {
    return true
  }else {
    return false
  }
};

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