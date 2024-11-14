// console.log('inicio direcciones.js')

let url = "//127.0.0.1:";
let protocolo = "http:";
let port_backend = 8082;
let port = window.location.protocol;
let backend = protocolo + url + port_backend

if (window.location.hostname.includes('127.0.0.1')) {
    url = "//127.0.0.1:";
    protocolo = "http:";
    port_backend = 8082;
    backend = protocolo + url + port_backend
} else {
    protocolo = window.location.protocol;
    url = "//" + window.location.hostname + ':';
    port_backend = 8082;
    port = window.location.port;
    alert('Protocolo: ' + protocolo + '\n' + 'URL: ' + url + '\n' + 'Puerto: ' + port + '\n' + 'Puerto Backend a modo lectura: ' + port_backend);
}

const pages = {
    "index.html": "Inicio",
    "calculos.html": "calculadora",
    "leandro.html": "leandro",
    "sergio.html": "sergio",
    "listas.html": "listas",
    "buscar.html": "buscar",
    "modificar.html": "modificar",
    "borrar.html": "borrar"
};

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navItems = Object.keys(pages).map(page => {
    if (page === currentPage) {
        return '';
    } else {
        return `<li><a href="${page}">${pages[page]}</a></li>`;
    }
}).join("");

const headerContent = `
<img src="./img/gato_tigrillo.jpg" alt="log" class="header-img">
    <nav>
    <ul>
            ${navItems}
        </ul>
    </nav>
`;

const headerElement = document.getElementById("main-header");
if (headerElement) {
    headerElement.innerHTML = headerContent;
} else {
    console.error("Elemento header con id 'main-header' no encontrado");
}

// console.log('fin direcciones.js')
export { url, protocolo, port_backend, port, backend, pages, currentPage, navItems, headerContent, headerElement };