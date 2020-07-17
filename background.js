const fetchData = async () => {
    try {
        const res = await fetch('https://api.myip.com/')
        const data = await res.json()

        if(!res.ok) {
            throw new Error(data.message || 'Error')
        }

        window.IP = data.ip
    } catch(e) {
        console.log(e.message)
    }
}

fetchData()

chrome.runtime.onMessage.addListener(function (req, sender, res) {
    res({IP: window.IP})
})
