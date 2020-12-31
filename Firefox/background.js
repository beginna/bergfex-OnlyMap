// this is the background code...

// listen for any changes to the URL of any tab
browser.tabs.onUpdated.addListener(function(id, info, tab){
	// check url for bergfex; if true show icon; else hide icon
	if (tab.url.indexOf("bergfex") >-1) {
		browser.pageAction.show(tab.id);
		} else {
			browser.pageAction.hide(tab.id);
		}
	});
	
// listen for pageAction/icon to be clicked
browser.pageAction.onClicked.addListener(function(tab) {
	// for the current tab, inject the "inject.js" file & execute it
	browser.tabs.executeScript(tab.id, {
		file: 'inject.js'
	});
});