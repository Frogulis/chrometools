/*chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {
    console.log("qwe");
});*/

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if (tab.url.match("https://www.facebook.com/?(\\?ref=tn_tnmn)?$") &&
        changeInfo.url === undefined) {
        chrome.tabs.update(tabId, {url: "http://www.facebook.com/messages/"});
    }
});
