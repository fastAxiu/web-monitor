function xhrGet() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:3000')
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 获取服务器响应的数据
            console.log(xhr.responseText)
        }
    }
}

xhrGet();