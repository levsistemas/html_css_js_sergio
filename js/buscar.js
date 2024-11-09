import { url, protocolo, port_backend, port } from './direcciones.js';

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buscar").addEventListener("click", function () {
        const nombre = document.getElementById("buscar-nombre").value;
        const apellido = document.getElementById("buscar-apellido").value;
        const email = document.getElementById("buscar-email").value;

        fetchUsuarios(nombre, apellido, email);
    });
});

function fetchUsuarios(nombre = '', apellido = '', email = '') {
    const params = new URLSearchParams();
    if (nombre) params.append('nombre', nombre);
    if (apellido) params.append('apellido', apellido);
    if (email) params.append('email', email);

    const urlBusqueda = `${protocolo}${url}${port_backend}/api/usuarios/search?${params.toString()}`;

    fetch(urlBusqueda)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al recuperar los usuarios: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tablaUsuarios = document.getElementById('tabla-usuarios').getElementsByTagName('tbody')[0];
            tablaUsuarios.innerHTML = ''; // Limpiar la tabla antes de agregar las filas
            data.forEach(usuario => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.email}</td>
                `;
                tablaUsuarios.appendChild(fila);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al recuperar los usuarios.');
        });
}


