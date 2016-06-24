var e = document.getElementById("btn-fullscreen");
var mynote = document.getElementById("mynote")

e.addEventListener('click', function ( ) {
  if (RunByBrowser(mynote, "FullScreen") || RunByBrowser(mynote, "IsFullScreen")) {
    RunByBrowser(mynote, "CancelFullScreen");     //해제는 잘 되지 않ㄴ는다... 안될만 하지....어떻게 바꾸지...
    console.log('전체화면 해제!');
  }
  else {
    RunByBrowser(mynote, "RequestFullScreen");
    console.log('전체화면 실행!');
	}
});

var pfx = ["webkit", "moz", "ms", "o", ""];
function RunByBrowser(obj, method) {
	
	var p = 0, m, t;
	while (p < pfx.length && !obj[m]) {
		m = method;
		if (pfx[p] == "") {
			m = m.substr(0,1).toLowerCase() + m.substr(1);
		}
		m = pfx[p] + m;
		t = typeof obj[m];
		if (t != "undefined") {
			pfx = [pfx[p]];
			return (t == "function" ? obj[m]() : obj[m]);
		}
		p++;
	}

}