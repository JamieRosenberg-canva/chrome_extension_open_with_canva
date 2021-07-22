chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": 'Open Image With Canva™',
        "contexts": ["image"],
        "id": "myContextMenuId"
    });
});
    
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var current_url = info.srcUrl;
    var k = 0;

    console.log(info.srcUrl.substr(0,4));
    if (info.srcUrl.substr(0,4) == 'data') {
        k = k + 1;
        chrome.tabs.create({  
            url: 'dialog.html',
            active: false            
        }, function(tab) {
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true,
                height: 150,
                width: 400
            });
        });
        chrome.tabs.create({  
            url: info.linkUrl
        })        
    } else {
        k = 0;
        chrome.tabs.create({  
            url: "http://www.canva.com/" + encodeURIComponent(info.srcUrl)
        })
    }
    console.log('linkUrl: ' + info.linkUrl);
    console.log('srcUrl: ' + info.srcUrl);    
    console.log(k);    


            // chrome.tabs.create({  
            // url: info.linkUrl
})