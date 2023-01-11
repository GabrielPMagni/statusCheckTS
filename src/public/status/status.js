function observeStatus(event) {
    event && event.preventDefault();
    let url = document.getElementById("targetURL").value;
    if (!url || !isValidURL(url)) {
        appendLog(`Endereço inválido: ${url}`);
        return;
    } 
    let [ protocol, host ] = splitURL(url);
    setInterval(async () => {
        let log = await getStatus(protocol, host);
        appendLog(log);
    }, 10000)
}

async function getStatus(protocol, host) {
    return fetch(`/status/${protocol}/${host}`).then(async (result) => {
        let log = await result.json();
        if (!log || !log.message) {
            throw new Error("Não foi possível recuperar dados da requisição no cliente")
        }
        return (log.message);
    }).catch((err) => {
        return (err?.message);
    });
}

function appendLog(text = "") {
    let logger = document.getElementById("logging");
    logger.value += `\n${text} - ${getFormatedDate()}`;
    logger.scrollTop = logger.scrollHeight;
}
