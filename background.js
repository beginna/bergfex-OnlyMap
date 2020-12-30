// this is the background code...

// listen for any changes to the URL of any tab
browser.tabs.onUpdated.addListener(function(id, info, tab){
	console.log(tab.url);
	//console.log(tab.id);

	// if url matches, display pageAction icon
	if (tab.url === "https://www.bergfex.at/") {
		browser.pageAction.show(tab.id);
		console.log("is TRUE");
	} else {
		browser.pageAction.hide(tab.id);
		console.log("is FALSE");
	}
});

// listen for our browerAction to be clicked
browser.pageAction.onClicked.addListener(function(tab) {
	// for the current tab, inject the "inject.js" file & execute it
	browser.tabs.executeScript(tab.id, {
		file: 'inject.js'
	});
});