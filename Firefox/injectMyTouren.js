// this is the code which will be injected...

(function() {
	console.log("Addon: bergfex OnlyMap: injecting modification for touren map.");
//check if fullscreen (has button-zoomout)
	if (document.querySelector("#mapfullscreen").classList.contains("button-zoomout")) {
		console.log("debug inject: small map to fullscreen");
		//if fullscreen, change to small map
		document.querySelector("body").setAttribute("style", "overflow: auto;");
		document.querySelector("#GeosetterWrapper").setAttribute("style", "height: 550px; width: 100%; position: relative; top: 0px; left: 0px;");
		document.querySelector("#mapfullscreen").setAttribute("class", "map-action map-action-fullscreen button-fullscreen")

        } else {
			console.log("debug inject: full screen to small map.");
			//change to fullscreen
			document.querySelector("body").setAttribute("style", "overflow: hidden;");
			document.querySelector("#GeosetterWrapper").setAttribute("style", "height: 100%; width: 100%; position: fixed; top: 0px; left: 0px;");
			document.querySelector("#mapfullscreen").setAttribute("class", "map-action map-action-fullscreen button-zoomout")

		}
})();

/* notes
opening touren
document.querySelector("#mapfullscreen")
class="map-action map-action-fullscreen"

fullscreen
class="map-action map-action-fullscreen button-zoomout"

small map
class="map-action map-action-fullscreen button-fullscreen"
*/