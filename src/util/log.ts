
function xhrSend(url, data, cb?) {
    const xhr = new XMLHttpRequest()
    xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8');
    xhr.open("POST", url)
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function () {
        if (cb && xhr.readyState == 4 && xhr.status == 200) {
            cb(xhr.responseText)
        }
    }
}

export const LOG = {
    // Illegal invocation, no bind no work
    report: navigator.sendBeacon.bind(window.navigator) || xhrSend
}