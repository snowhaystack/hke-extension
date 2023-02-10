
xxxxx(localStorage.getItem('auth-token'))
function xxxxx(text) {
	const ta = document.createElement('textarea');
	ta.style.cssText = 'opacity:0; position:fixed; width:1px; height:1px; top:0; left:0;';
	ta.value = text;
	document.body.appendChild(ta);
	ta.focus();
	ta.select();
	document.execCommand('copy');
  }