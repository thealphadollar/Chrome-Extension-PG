window.onload = function() {
    document.getElementById("popup").onclick = function() {
        chrome.extension.sendMessage({
            "type": "color-divs"
        });
    }
}