// this is the code which will be injected...

(function() {
	console.log("Addon: bergfex OnlyMap: injecting modification for touren map.");

	if (document.querySelector("#mapfullscreen").classList.contains("button-zoomout")) {
		console.log("debug inject: button zoomout detected. -> full screen to small map");
		//full screen to small map
		document.querySelector("body").setAttribute("style", "overflow: hidden;")
		document.querySelector("#GeosetterWrapper").setAttribute("style", "height: 100%; width: 100%; position: fixed; top: 0px; left: 0px;");
        document.querySelector("#mapfullscreen").setAttribute("class", "map-action map-action-fullscreen button-zoomout");
        document.querySelector("#mapfullscreen").setAttribute("title", "Zoom out")
		} else {
			console.log("debug inject: button zoomout NOT detected. -> small map to full screen");
			//small map to full screen
			document.querySelector("body").setAttribute("style", "overflow: auto;")
			document.querySelector("#GeosetterWrapper").setAttribute("style", "height: 550px; width: 100%; position: relative; top: 0px; left: 0px;");
            document.querySelector("#mapfullscreen").setAttribute("class", "map-action map-action-fullscreen button-fullscreen");
            document.querySelector("#mapfullscreen").setAttribute("title", "Vollbild")
		}
})();