
function xhrSend(url, data, cb) {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", url)
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cb(xhr.responseText)
        }
    }
}

export const LOG = {
    reportData: navigator.sendBeacon || xhrSend
}