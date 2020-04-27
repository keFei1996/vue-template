// 金额输入最多输入一位小数点和2位小数
export function checkMoney(val) {
  let sNum = val.toString(); //先转换成字符串类型
  if (sNum.indexOf('.') == 0) {//第一位就是 .
    console.log('first str is .')
    sNum = '0' + sNum
  }
  sNum = sNum.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
  sNum = sNum.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
  sNum = sNum.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
  sNum = sNum.replace(/^(\\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
  //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
  if(sNum.indexOf(".")< 0 && sNum !=""){
    sNum = parseFloat(sNum);
  }
  return sNum
}

// 把money加上，号
export const priceSwitch = function(val) {
  if(val === undefined) {
    return val
  }
  val = val.toString();
  let index = val.indexOf('.');
  let integer, decimal;   // 整数，小数
  if (index < 0) {
    integer = val;
    decimal = '';
  }else {
    integer = val.slice(0, index);
    decimal = val.slice(index);
  }
  // 整数段每隔三个一个逗号
  let result = [], counter = 0;
  for (let i = integer.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(integer[i]);
    if (!(counter % 3) && i != 0) { result.unshift(','); }
  }
  result = result.join('');
  if(decimal.length  > 3) {
    decimal = decimal.slice(0, 3)
  }
  return result + decimal
}

export const keepDecimal2 = function (val) {
  if(val === undefined) {
    return val
  }
  val = val.toString();
  let index = val.indexOf('.');
  let integer, decimal;   // 整数，小数
  if (index < 0) {
    integer = val;
    decimal = '';
  }else {
    integer = val.slice(0, index);
    decimal = val.slice(index);
  }
  if(decimal.length  > 3) {
    decimal = decimal.slice(0, 3)
  }
  return integer + decimal
}