// Archivo listas.js

// import { url, protocol, port_backend, port} from './direcciones.mjs'

// console.log(url)
// console.log(protocol)
// console.log(port_backend)
// console.log(port)

let url = "//localhost:"
let protocol = "http:"
let port_backend = 8082
let port = window.location.protocol
if (window.location.hostname.includes('127.0.0.1')) {
    url = "//localhost:"
    protocol = "http:"
    port_backend = 8082
} else {
    url = "//" + window.location.hostname + ':'
    protocol = window.location.protocol
    port_backend = 8082
    port = window.location.port
}


// Hacer una solicitud GET a la API
fetch(protocol + url + port_backend + '/api/usuarios')
    .then(response => {
        console.log('Response status:', response.status); // Verificar el estado de la respuesta
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data); // Verificar los datos recibidos
        if (data.length === 0) {
            console.log('No users found.');
        }
        // Obtener la referencia de la tabla
        const tablaUsuarios = document.getElementById('tabla-usuarios');

        // Iterar sobre los datos recibidos y crear filas en la tabla
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
    .catch(error => console.error('Error fetching usuarios:', error));



