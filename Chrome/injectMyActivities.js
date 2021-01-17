// this is the code which will be injected...

(function() {
	console.log("Addon: bergfex OnlyMap: injecting modification for activities map.");

	if (document.querySelector("#mapwrapper").classList.contains("fullscreen")) {
		//full screen to small map
		document.querySelector("#mapwrapper").setAttribute("class","");
		document.querySelector("#map-canvas").setAttribute("style", "position: relative; overflow: hidden; height: 700px; width: 100%; top: 0px; left: 0px;");
		document.querySelector("#mapfullscreen").setAttribute("class", "map-action map-action-fullscreen z-index-333 button-fullscreen")
		} else {
			//small map to full screen
			document.querySelector("#mapwrapper").setAttribute("class", "fullscreen");
			document.querySelector("#map-canvas").setAttribute("style", "position: fixed; overflow: hidden; height: 100%; width: 100%; top: 0px; left: 0px;");
			document.querySelector("#mapfullscreen").setAttribute("class", "map-action map-action-fullscreen z-index-333 button-zoomout")
		}
})();




//block comment SHIFT-ALT-A


/* 
map small
div id="mapwrapper" class=""

	div id="map-canvas" class="m-0 p-0" style="position: relative; overflow: hidden; height: 700px; width: 100%; top: 0px; left: 0px;"

	div id="map-addons" class=""
		div id="mapfullscreen" class="map-action map-action-fullscreen z-index-333 button-fullscreen" title="Vollbild"


map full screen
div id="mapwrapper" class="fullscreen"

	div id="map-canvas" class="m-0 p-0" style="position: fixed; overflow: hidden; height: 100%; width: 100%; top: 0px; left: 0px;"

	div id="map-addons" class=""
		div id="mapfullscreen" class="map-action map-action-fullscreen z-index-333 button-zoomout" title="Vollbild"
*/