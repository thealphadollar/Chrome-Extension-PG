window.onload = function () {
    var port = chrome.extension.connect({ name: "color-devs-port" });
    document.getElementById("popup").onclick = function () {
        port.postMessage({ type: "color-divs" });
    };
};
