let url = "//localhost:"
let protocol = "http:"
let port_backend = 8082
let port = window.location.protocol
if (window.location.hostname.includes('127.0.0.1')) {
    url = "//localhost:"
    protocol = "http:"
    port_backend = 8082
} else {
    url = "//" + window.location.hostname + ':'
    protocol = window.location.protocol
    port_backend = 8082
    port = window.location.port
}

export { url, protocol, port_backend, port}