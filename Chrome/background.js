// this is the background code...

// listen for any changes to the URL of any tab
chrome.tabs.onUpdated.addListener(function(id, info, tab){
	// check url for bergfex; if true show icon; else hide icon
	if (tab.url.indexOf("bergfex") >-1) {
		chrome.pageAction.show(tab.id);
	} else {chrome.pageAction.hide(tab.id)}
});

// listen for pageAction/icon to be clicked
chrome.pageAction.onClicked.addListener(function(tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, {
		file: 'inject.js'
	});
});