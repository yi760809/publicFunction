
// 将时间戳转换为日期时间, 将时间戳传入函数内

function timeStamp(timeStr) {
  var date = new Date(timeStr * 1000); //时间戳如果是10位 *1000, 如果是13位不用 * 1000
  Y = date.getFullYear() + '-';
  M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  D = date.getDate() + ' ';
  h = date.getHours() + ':';
  m = date.getMinutes() + ':';
  s = date.getSeconds();
  return Y + M + D + h + m + s;
}