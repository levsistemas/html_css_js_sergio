document.addEventListener("DOMContentLoaded", function () {

    const pages = {
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
        <img src="./img/gato_tigrillo.jpg" alt="log" class="header-img">
        <nav>
            <ul>
                ${navItems}
            </ul>
       
             <div>
                <button id="openModal">Ingrasar</button>
                

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
    const ingresar = document.getElementById('openModal')
    const headerElement = document.getElementById("main-header");
    if (headerElement) {
        headerElement.innerHTML = headerContent;

    } else {
        console.error("Header element with id 'main-header' not found.");
    }


    //const ingresar=document.getElementById('openModal')
    document.getElementById('main-header').style.display = 'flex';
    ingresar.addEventListener('click', function () {
        document.getElementById('myModal').style.display = 'block';
    });

    document.getElementsByClassName('close')[0].addEventListener('click', function () {
        document.getElementById('myModal').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = 'none';
        }
    });

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
});
const btn=document.getElementById('openModal')
