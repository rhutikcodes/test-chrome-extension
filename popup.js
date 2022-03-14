
console.log("popup.js");

// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("send-button-popup").addEventListener("click", sendButtonHandler);
});

async function sendButtonHandler() {
    console.log('button clicked');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: "getSum" }, function (response) {
        });
    });
}