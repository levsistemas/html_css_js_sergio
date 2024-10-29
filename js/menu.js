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
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">×</span>
                        <h2>Iniciar Sesión</h2>
                        <form id="loginForm">
                            <label for="username">Usuario:</label>
                            <input type="text" id="username" name="username" required>
                            <label for="password">Contraseña:</label>
                            <input type="password" id="password" name="password" required>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    `;

    const headerElement = document.getElementById("main-header");
    if (headerElement) {
        headerElement.innerHTML = headerContent;

        // Mostrar el header
        headerElement.style.display = 'flex';

        // Manejar el evento click del botón "Ingresar"
        document.getElementById('openModal').addEventListener('click', function () {
            document.getElementById('myModal').style.display = 'block';
        });

        // Manejar el evento click para cerrar el modal
        document.getElementsByClassName('close')[0].addEventListener('click', function () {
            document.getElementById('myModal').style.display = 'none';
        });

        // Manejar el evento click fuera del modal para cerrarlo
        window.addEventListener('click', function (event) {
            if (event.target == document.getElementById('myModal')) {
                document.getElementById('myModal').style.display = 'none';
            }
        });

        // Manejar el submit del formulario de login
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                alert('Usuario: ' + username + '\nContraseña: ' + password);
            } else {
                alert('Por favor, complete todos los campos.');
            }
        });
    } else {
        console.error("Header element with id 'main-header' not found.");
    }
});
