// this is the code which will be injected...

(function() {
	console.log("Addon: bergfex OnlyMap: injecting modification in activities.");

	var toogleCC = document.querySelector("#mapwrapper");
	//toogleCC.classList.add("fullscreen")
	if (toogleCC.classList.contains("fullscreen")) {
		toogleCC.classList.remove("fullscreen");
	} else {
		toogleCC.classList.add("fullscreen")
	}

})();




//block comment SHIFT-ALT-A
//to debug:
/* Uncaught TypeError: Cannot read property 'classList' of null
    at inject2.js:16
	at inject2.js:23 */

/* 
map klein
div id="mapwrapper" class=""

	div id="map-canvas" class="m-0 p-0" style="position: relative; overflow: hidden; height: 700px; width: 100%; top: 0px; left: 0px;"

	div id="map-addons" class=""
		div id="mapfullscreen" class="map-action map-action-fullscreen z-index-333 button-fullscreen" title="Vollbild"


map vollbild
div id="mapwrapper" class="fullscreen"

	div id="map-canvas" class="m-0 p-0" style="position: fixed; overflow: hidden; height: 100%; width: 100%; top: 0px; left: 0px;"

	div id="map-addons" class=""
		div id="mapfullscreen" class="map-action map-action-fullscreen z-index-333 button-zoomout" title="Vollbild"
*/