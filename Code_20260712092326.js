// script.js
console.log("%c你不该看到这个——但既然看到了，去搜'福安饭'", "color:#c00;font-size:16px;");

function search() {
  const v = document.getElementById('kw').value.trim();
  if (v === '花生糕')       window.location = '/forum.html';
  else if (v === '福安饭')  window.location = '/treehole.html';
  else if (v === '戴远辰')  window.location = '/forbidden.html';
  else alert('暂无相关信息，再翻翻？');
}

function reveal() {
  alert('……菜单背面好像有字？F12 看看源码吧。');
}
