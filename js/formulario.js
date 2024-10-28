/// Archivo form.js

document.getElementById('formulario').addEventListener('click', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correos = document.getElementById('correos').value;

    // Crear el objeto usuario
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        email: correos
    };

    // Enviar una solicitud POST a la API
    fetch('http://localhost:8082/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario creado:', data);
    })
    .catch(error => {
        console.error('Error creando usuario:', error);
    });
});
