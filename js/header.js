document.addEventListener("DOMContentLoaded", function () {
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
            <div>
                <button id="openModal">Ingresar</button>
            </div>
        </nav>
    `;

    const headerElement = document.getElementById("main-header");
    if (headerElement) {
        headerElement.innerHTML = headerContent;
    } else {
        console.error("Elemento header con id 'main-header' no encontrado");
    }
});