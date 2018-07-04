
// 操作Cookie

function setCookie(name, value) {  // 设置Cookie 传入键值对. 列: setCookie('userId', '123456')
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {  // 获取Cookie 传入要获取的Cookie. 列: getCookie('userId')
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

  if (arr = document.cookie.match(reg))

    return unescape(arr[2]);
  else
    return null;
}

function delCookie(name) { // 删除Cookie 传入要删除的Cookie. 例: 
  setCookie(name, '', -1);
};