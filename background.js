// Background.js: Handles message passing in the background of the extension
// Author: Abdullah Ali
// Contact: @xyleques, xyleques@me.com


chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse){
		if (request.action == "prefs"){
			var prefsString = localStorage.prefs;
			if (prefsString === undefined){
				sendResponse(undefined);
			} else{
				sendResponse(JSON.parse(localStorage.prefs));
			}
		}
	});

function click(e){
	chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
			console.log("background.js : click()");

	});
}
chrome.browserAction.onClicked.addListener(click);
