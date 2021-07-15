chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "color-divs"){
        var divs = document.querySelectorAll("div");
        if (divs.length == 0) {
            alert("div length is zero!");
            return;
        } else {
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.backgroundColor = request.color;
            }
        }
    }
});