document.addEventListener("DOMContentLoaded", function(){
    const pages={
        "index.html": "Inicio",
        "calculos.html": "calculadora",
        "leandro.html": "leandro",
        "sergio.html": "sergio"
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
        <img src="../img/gato_tigrillo.jpg" alt="log" class="header-img">
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
        console.error("Header element with id 'main-header' not found.");
    }

});