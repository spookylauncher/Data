window.onload = function() {
  	var query = 'spookylaunch://open?' + window.location.href.substring(window.location.href.indexOf('#') + 1);

  	window.alert(query);

  	window.location.href = 'spookylaunch://open?' + query;
};