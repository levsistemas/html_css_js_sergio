console.log('HOLA MUNDO FORMULARIO')
const SERGIO = 'Sergio'

// document.addEventListener('DOMContentLoaded', function() {
    // const form = document.getElementById('usuario-form');
    const FORMULARIO = document.getElementById('formulario')
    // if (FORMULARIO) {
        FORMULARIO.addEventListener('click', function (event) {
            event.preventDefault();

            const NOMBRE = document.getElementById("nombre").value;
            const APELLIDO = document.getElementById("apellido").value;
            const EMAIL = document.getElementById("correos").value;
            const CONTRASENA = document.getElementById("contrasena").value;

            // alert('nombre:' + NOMBRE + '\n' + 'apellido:' + APELLIDO + '\n' + 'email:' + EMAIL)

            fetch('http://localhost:8082/api/usuarios', {
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
                // alert(error.message);
            });
        });
    // } else {
        // console.error('Elemento usuario-form no encontrado');
    // }
// });


const BTN_PASS = document.getElementById('shows')
if(BTN_PASS){
    BTN_PASS.addEventListener('click', () => {
        if(document.getElementById('contrasena').getAttribute('type') == 'password'){
            document.getElementById('contrasena').setAttribute('type', 'text')
            BTN_PASS.textContent = 'Ocultar'
        } else {
            document.getElementById('contrasena').setAttribute('type', 'password')
            BTN_PASS.textContent = 'Mostrar'
        }
    })
}

const BTN_PASS_1 = document.getElementById('show')
BTN_PASS_1.addEventListener('click', () => {
    if(document.getElementById('contrasena').getAttribute('type') == 'password'){
        document.getElementById('contrasena').setAttribute('type', 'text')
        BTN_PASS_1.value = 'Ocultar'
    } else {
        document.getElementById('contrasena').setAttribute('type', 'password')
        BTN_PASS_1.value = 'Mostrar'
    }
})






