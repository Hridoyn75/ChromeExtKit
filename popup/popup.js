const button = document.getElementById('popup-button');

button.addEventListener('click', function () {
    chrome.runtime.openOptionsPage();
});