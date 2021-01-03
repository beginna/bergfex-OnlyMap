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
		console.log("debug: activities detected");
		// for the current tab, inject the "inject2.js" file & execute it
		browser.tabs.executeScript(tab.id, {file: 'inject2.js'});
		console.log("debug: called inject2.js");
	} else {
		console.log("debug: no activities detected");
		if (tab.url.indexOf("bergfex") >-1) {
			console.log("debug: bergfex detected");
			// for the current tab, inject the "inject.js" file & execute it
			browser.tabs.executeScript(tab.id, {file: 'inject.js'});
			console.log("debug: called inject.js");
		} else {
			console.log("debug: no bergfex detected")
		};
	};
});