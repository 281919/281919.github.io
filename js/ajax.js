
window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "./data/menu.text", false);
  xhr.send("list");

  if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
    alert(xhr.responseText);
  } else {
    alert("请求无响应" + xhr.status);
  }
}
