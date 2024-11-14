import { url, protocolo, port_backend, port } from './direcciones.js';

const BTN_BUSCAR = document.getElementById('buscar')
const BTN_LIMPIAR = document.getElementById('limpiar')

BTN_BUSCAR.addEventListener('click', () => {
    console.log('clickeando en boton buscar')
    if(document.getElementById('name').value !=='' || document.getElementById('surname').value !=='' || document.getElementById('email').value !==''){
        const NAME = document.getElementById("name").value;
        const SURNAME = document.getElementById("surname").value;
        const EMAIL = document.getElementById("email").value;
        console.log('Nombre:', NAME, 'Apellido:', SURNAME, 'Email:', EMAIL); // Verificar valores
        fetchUsuarios(NAME, SURNAME, EMAIL);
    }
})

BTN_LIMPIAR.addEventListener("click", function () {
    console.log('LLAMANDO A FN LIMPIAR CAMPOS')
    limpiarCampos();
});

function fetchUsuarios(NAME = '', SURNAME = '', EMAIL = '') {
    const params = new URLSearchParams();
    if (NAME) params.append('nombre', NAME);
    if (SURNAME) params.append('apellido', SURNAME);
    if (EMAIL) params.append('email', EMAIL);

    if (!params.toString()) {
        alert("Por favor ingresa al menos un criterio de búsqueda");
        return;
    }

    const urlBusqueda = `${protocolo}${url}${port_backend}/api/usuarios/search?${params.toString()}`;
    console.log('URL de búsqueda:', urlBusqueda); // Verificar URL

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

function limpiarCampos() {
    document.getElementById("name").value = '';
    document.getElementById("surname").value = '';
    document.getElementById("email").value = '';
    document.getElementById('tabla-usuarios').getElementsByTagName('tbody')[0].innerHTML = ''; // Limpiar la tabla
}









