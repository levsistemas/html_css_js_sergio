import { backend } from "./direcciones.js";

// console.log('inicio login.js')

const modalButton = document.getElementById('openModal');
if (typeof modalButton !== 'undefined') {
    modalButton.addEventListener('click', () => {
        document.getElementById('myModal').style.display = 'block';
    });
} else {
    console.error('Elemento openModal no encontrado');
}

const closeButton = document.getElementsByClassName('close')[0];
if (typeof closeButton !== 'undefined') {
    closeButton.addEventListener('click', () => {
        document.getElementById('myModal').style.display = 'none';
    });
} else {
    console.error('Elemento close no encontrado');
}

window.addEventListener('click', function (event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
});

const loginForm = document.getElementById('loginForm');
if (typeof loginForm !== 'undefined') {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        const EMAIL = document.getElementById("email").value;
        const PASSWORD = document.getElementById("password").value;

        // Realizar la llamada al backend para validar el usuario
        fetch(`${backend}/api/usuarios/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: EMAIL, contrasena: PASSWORD })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Correo o contraseña incorrectos');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('myModal').style.display = 'none';
            mostrarDatosUsuario(data.email);
        })
        .catch(error => {
            alert(error.message);
        });
    });

    function mostrarDatosUsuario(email) {
        const userInfo = document.getElementById("user-info");
        const btnSalir = document.getElementById("btn-salir");
        userInfo.innerHTML = `Bienvenido, ${email}`;
        userInfo.style.display = "block";
        btnSalir.style.display = "block";

        btnSalir.onclick = function () {
            userInfo.innerHTML = "";
            userInfo.style.display = "none";
            btnSalir.style.display = "none";
        };
    }
} else {
    console.error('Elemento loginForm no encontrado');
}

// console.log('fin login.js')