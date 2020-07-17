const iframe = document.createElement('iframe')
iframe.style.cssText = 'position: fixed; right: 0; z-index: 999; background-color: wheat; height: 50px'
document.body.insertBefore(iframe, document.body.firstChild)

const doc = iframe.contentWindow.document

chrome.runtime.sendMessage(null, function (res) {
    const src = '<h1 title="copy IP" style="cursor: pointer" onclick="('+func+')()">'+res.IP+'</h1>'
    doc.open('text/html', 'replace')
    doc.write(src)
    doc.close()
})

function func() {
    const IP = document.body.firstChild.innerText
    navigator.clipboard.writeText(IP)
    alert(`Your IP ${IP} was copied`)
}