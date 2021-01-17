// this is the background code...

// listen for any changes to the URL of any tab
browser.tabs.onUpdated.addListener(function(id, info, tab){
	// check url for bergfex; if true show icon; else hide icon
	if (tab.url.indexOf("bergfex") >-1) {
		browser.pageAction.show(tab.id)
	} else {
		browser.pageAction.hide(tab.id)
	}
});

// listen for pageAction/icon to be clicked
browser.pageAction.onClicked.addListener(function(tab) {
	console.log("debug: icon clicked");
	if (tab.url.indexOf("mybergfex/activities.show") >-1) {
		console.log("debug: activities.show in url detected");
		// for the current tab, inject the "injectMyActivities.js" file & execute it
		browser.tabs.executeScript(tab.id, {file: 'injectMyActivities.js'});
		console.log("debug: called injectMyActivities.js");

	} else if (tab.url.indexOf("mybergfex/touren.list") >-1) {
		console.log("debug: touren.list in url detected");
		// for the current tab, inject the "injectMyTouren.js" file & execute it
		browser.tabs.executeScript(tab.id, {file: 'injectMyTouren.js'});
		console.log("debug: called injectMyTouren.js");

	} else {
		console.log("debug: no activities detected");
		if (tab.url.indexOf("bergfex") >-1) {
			console.log("debug: bergfex in url detected");
			// for the current tab, inject the "injectMain.js" file & execute it
			browser.tabs.executeScript(tab.id, {file: 'injectMain.js'});
			console.log("debug: called injectMain.js");

		} else {
			console.log("debug: no bergfex in url detected")
		};
	};
});