// this is the code which will be injected...

(function() {
	console.log("Addon: bergfex OnlyMap: injecting modification for touren map.");

	if (document.querySelector("#mapfullscreen").classList.contains("button-zoomout")) {
		//full screen to small map
		document.querySelector("#GeosetterWrapper").setAttribute("style", "height: 100%; width: 100%; position: fixed; top: 0px; left: 0px;");
        document.querySelector("#mapfullscreen").setAttribute("class", "map-action map-action-fullscreen button-zoomout");
        document.querySelector("#mapfullscreen").setAttribute("title", "Zoom out")
		} else {
			//small map to full screen
			document.querySelector("#GeosetterWrapper").setAttribute("style", "height: 550px; width: 100%; position: relative; top: 0px; left: 0px;");
            document.querySelector("#mapfullscreen").setAttribute("class", "map-action map-action-fullscreen button-fullscreen");
            document.querySelector("#mapfullscreen").setAttribute("title", "Vollbild")
		}
})();