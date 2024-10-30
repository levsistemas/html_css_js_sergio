let url = "//localhost:"
let protocolo = "http:"
let port_backend = 8082
let port = window.location.protocol
if (window.location.hostname.includes('127.0.0.1')) {
    url = "//localhost:"
    protocolo = "http:"
    port_backend = 8082
} else {
    protocolo = window.location.protocol
    url = "//" + window.location.hostname + ':'
    port_backend = 8082
    port = window.location.port
    alert('Protocolo: ' + protocolo + '\n'+ 'URL: ' + url + '\n' + 'Puerto: ' + port + '\n' + 'Puerto Backend a modo lectura: ' + port_backend)
}

export { url, protocolo, port_backend, port}