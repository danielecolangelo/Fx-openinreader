function onpenInReader(e) {
	browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		browser.tabs.create({
			url   : 'about:reader?url=' + e.linkUrl,
			index : ++tabs[0].index
		});
	});
}

var openInReader = browser.contextMenus.create({ 
	"id"       : "sdv-openinreader",
	"title"    : "open in Reader",
	"contexts" : ["link"],
	"onclick"  : onpenInReader
});