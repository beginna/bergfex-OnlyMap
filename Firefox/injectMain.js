// this is the code which will be injected...

(function() {
	console.log("Addon: bergfex OnlyMap: injecting modifications for main map");
	  
	document.getElementById('btn-map-show').click();
	
	var mapLayerActivityArr = [
		"map-layer-skigebiete",
		"map-layer-langlaufen",
		"map-layer-unterkuenfte",
		"map-layer-sommerinfos",
		"map-layer-wandertouren",
		"map-layer-alpintouren",
		"map-layer-wintertouren",
		"map-layer-biketouren",
		"map-layer-lauftouren",
		"map-layer-badeseen"
	];

	for (var i = 0; i < mapLayerActivityArr.length; i++) {
		if (document.getElementById(mapLayerActivityArr[i]).className == 'map-layer map-layer-selected') {
			document.getElementById(mapLayerActivityArr[i]).click()
		}
	}

	//document.querySelector("#siteMapCanvas > div.leaflet-control-container > div.leaflet-top.leaflet-left > div > div:nth-child(1) > div.leaflet-controls-container.leaflet-bar.leaflet-dropdown-controls-container.leaflet-dropdown.leaflet-layers-controls-container > div").click();
	var toogleCC = document.querySelector("#siteMapCanvas > div.leaflet-control-container > div.leaflet-top.leaflet-left > div > div:nth-child(1) > div.leaflet-controls-container.leaflet-bar.leaflet-dropdown-controls-container.leaflet-dropdown.leaflet-layers-controls-container > div");
	if (toogleCC.classList.contains("collapsed")) {
		toogleCC.classList.remove("collapsed");
		toogleCC.classList.add("expanded")
	} else {
		toogleCC.classList.remove("expanded");
		toogleCC.classList.add("collapsed")
	}

	document.querySelector("#siteMapCanvas > div.leaflet-control-container > div.leaflet-top.leaflet-left > div > div:nth-child(2) > div > div.leaflet-control-fullscreen.leaflet-bar.leaflet-control > a").click();
	document.querySelector("#siteMap > div.fullscreen-content-container > div.fullscreen-content-toggle").click();
  	//0.0.5 remove sidebar
	document.querySelector("#sidebar").setAttribute("style", "display: none");
	
	//switch to bergfex OEK
	//document.querySelector("#siteMapCanvas > div.leaflet-control-container > div.leaflet-top.leaflet-right > div.leaflet-controls-container.leaflet-horizontal-container.leaflet-control > div.leaflet-control-maptypes.leaflet-bar > a.map-type-button.map-type-oek").click();
  
})();