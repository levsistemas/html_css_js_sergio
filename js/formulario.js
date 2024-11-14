import { backend } from "./direcciones.js";

const BTN_SEND = document.getElementById('send')

BTN_SEND.addEventListener('click', function (event) {
    event.preventDefault();

    const NOMBRE = document.getElementById("nombre").value;
    const APELLIDO = document.getElementById("apellido").value;
    const EMAIL = document.getElementById("correos").value;
    const CONTRASENA = document.getElementById("contrasena").value;

    // alert('nombre:' + NOMBRE + '\n' + 'apellido:' + APELLIDO + '\n' + 'email:' + EMAIL)

    fetch(`${backend}/api/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: NOMBRE,
            apellido: APELLIDO,
            email: EMAIL,
            contrasena: CONTRASENA,
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar el usuario');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            console.log('Usuario agregado correctamente');
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const BTN_PASS = document.getElementById('show')
if (typeof BTN_PASS !== 'undefined') {
    BTN_PASS.addEventListener('click', () => {
        if (document.getElementById('contrasena').getAttribute('type') == 'password') {
            document.getElementById('contrasena').setAttribute('type', 'text')
            BTN_PASS.src = './img/closed.png'
        } else {
            document.getElementById('contrasena').setAttribute('type', 'password')
            BTN_PASS.src = './img/open.png'
        }
    })
}