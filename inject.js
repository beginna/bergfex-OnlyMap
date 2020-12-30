// this is the code which will be injected...

(function() {
	console.log("modifying for mapOnly");
  
  
	document.getElementById('btn-map-show').click();
	//document.getElementById('infobar').style.visibility = 'hidden';
	//document.getElementById('footer').style.visibility = 'hidden';
  
	document.getElementById('map-layer-skigebiete').click();
	document.getElementById('map-layer-langlaufen').click();
	document.getElementById('map-layer-unterkuenfte').click();
	document.getElementById('map-layer-wintertouren').click();
  
	document.querySelector("#siteMapCanvas > div.leaflet-control-container > div.leaflet-top.leaflet-left > div > div:nth-child(1) > div.leaflet-controls-container.leaflet-bar.leaflet-dropdown-controls-container.leaflet-dropdown.leaflet-layers-controls-container > div > div.box-header").click();
	document.querySelector("#siteMapCanvas > div.leaflet-control-container > div.leaflet-top.leaflet-left > div > div:nth-child(2) > div > div.leaflet-control-fullscreen.leaflet-bar.leaflet-control > a").click();
	document.querySelector("#siteMap > div.fullscreen-content-container > div.fullscreen-content-toggle").click();
  
	//switch to bergfex OEK
	//document.querySelector("#siteMapCanvas > div.leaflet-control-container > div.leaflet-top.leaflet-right > div.leaflet-controls-container.leaflet-horizontal-container.leaflet-control > div.leaflet-control-maptypes.leaflet-bar > a.map-type-button.map-type-oek").click();
  
  })();