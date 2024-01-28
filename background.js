chrome.tabs.onUpdated.addListener(function (_, _, _) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    var url = activeTab.url;
    console.log("Active Tab URL:", url);
  });
});