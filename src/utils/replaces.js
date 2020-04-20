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