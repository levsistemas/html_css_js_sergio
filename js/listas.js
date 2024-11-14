import { backend } from './direcciones.js';

const MODAL = `
<div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" id="close">&times;</span>
            <h2>Ingresar</h2>
            <form id="loginForm">
                <label for="email">Correo:</label>
                <input type="email" id="email" name="email" required>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
    <div id="user-info" style="display:none;"></div>
    <button id="btn-salir" style="display:none;">Salir</button>
    `

const MONTAJE = document.getElementById('montaje')

MONTAJE.innerHTML = MODAL

document.body.appendChild(MONTAJE)

const BTN_CONSULTAR = document.getElementById('consultar')
BTN_CONSULTAR.addEventListener('click', () => {
    const tablaUsuarios = document.getElementById('tabla-usuarios');
    if (!tablaUsuarios) {
        //console.error('Elemento tabla-usuarios no encontrado.');
        return;
    }

    fetch(`${backend}/api/usuarios`)
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
})

