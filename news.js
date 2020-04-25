

var news = document.getElementById('topNews');
var address = 'https://stackoverflow.com/questions/48974624/how-to-embed-another-website-into-my-own-web-to-keep-the-same-header/48979684';
$.ajax({ url: address, success: function(data) { console.log(data); } });
//news.innerHTML = html;