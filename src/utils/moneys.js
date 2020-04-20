// 把money加上，号
export const priceSwitch = function(val) {
  if(!val) {
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
  let result = [], counter = 0;
  for (let i = integer.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(integer[i]);
    if (!(counter % 3) && i != 0) { result.unshift(','); }
  }
  result = result.join('');
  return result + decimal
}