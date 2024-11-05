function getBaseUrl() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:8082';
    } else {
        return 'http://192.168.1.6:8082';  // IP de tu backend
    }
}

const baseUrl = getBaseUrl();

fetch(`${baseUrl}/api/usuarios`)
    .then(response => response.json())
    .then(data => {
        const tablaUsuarios = document.getElementById('tabla-usuarios');
        tablaUsuarios.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
            </tr>
        `;
        data.forEach(usuario => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellido}</td>
                <td>${usuario.email}</td>
            `; // Cerrar la plantilla aquí
            tablaUsuarios.appendChild(fila);
        });
    })
    .catch(error => {
        console.error('Error al obtener usuarios:', error);
    });
