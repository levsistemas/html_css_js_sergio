import { url, protocolo, port_backend, port } from './direcciones.js';

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("usuario-form"); // Asegúrate de que el ID del formulario coincide
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const apellido = document.getElementById("apellido").value;
            const email = document.getElementById("correos").value; // Asegúrate de que el ID es correcto
            const contrasena = document.getElementById("contrasena").value;

            const usuario = {
                nombre: nombre,
                apellido: apellido,
                email: email
            };

            fetch(`${protocolo}${url}${port_backend}/api/usuarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })
            .then(response => response.json())
            .then(data => {
                if (!data.id) {
                    throw new Error('Error en la creación del usuario');
                }

                const nuevaContrasena = {
                    contrasena: contrasena,
                    usuario: { id: data.id }
                };

                return fetch(`${protocolo}${url}${port_backend}/api/usuarios/contrasena`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevaContrasena)
                });
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la creación de la contraseña');
                }
                return response.json();
            })
            .then(data => {
                alert('Usuario y contraseña creados exitosamente!');
                // Opcionalmente, puedes agregar código para actualizar la lista de usuarios en la página aquí
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al crear el usuario o la contraseña.');
            });
        });
    }
});
