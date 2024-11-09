import { url, protocolo, port_backend, port } from './direcciones.js';

document.addEventListener("DOMContentLoaded", function () {
    const tablaUsuarios = document.getElementById('tabla-usuarios');
    if (!tablaUsuarios) {
        console.error('Elemento tabla-usuarios no encontrado.');
        return;
    }

    fetch(`${protocolo}${url}${port_backend}/api/usuarios`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al recuperar los usuarios: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tbody = tablaUsuarios.getElementsByTagName('tbody')[0];
            tbody.innerHTML = ''; // Limpiar la tabla antes de agregar las filas
            data.forEach(usuario => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.email}</td>
                `;
                tbody.appendChild(fila);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al recuperar los usuarios.');
        });
});

