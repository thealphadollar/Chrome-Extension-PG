// omnibox suggestion
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    suggest([
        {content: "color-divs", description: "Colorize divs"},
    ]);
});

// change color div if omnibox input is "color-divs"
chrome.omnibox.onInputEntered.addListener(function(text) {
    if (text == "color-divs") {
        colorDivs();
    }
});

// listening for an event / one-time requests from the pop-up
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "color-divs") {
        colorDivs();
    }
    return true;
});

// listening for an event / long-lived connections coming from devtools with message "color-divs"
chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        switch(port.name) {
            case "color-divs-port":
                colorDivs();
                break;
        }
    });
});

// send a message to the content script
var colorDivs = function(){
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, {type: "color-divs", color: "#F00"});
        // setting a badge
        chrome.browserAction.setBadgeText({"text": "red!"});
    });
}