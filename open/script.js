window.onload = function() {
  	window.location.href = 'spookylaunch://open?' + window.location.href.substring(window.location.href.indexOf('#') + 1);
};