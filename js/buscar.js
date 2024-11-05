document.getElementById('buscar').addEventListener('click', function() {
    const nombre = document.getElementById('buscar-nombre').value;

    fetch(`http://127.0.0.1:8082/api/usuarios/buscar?nombre=${nombre}`)
    .then(response => response.json())
    .then(data => {
        console.log('Usuarios encontrados:', data); // Mostrar los usuarios encontrados en la consola

        // Verificar que data es un array antes de usar forEach
        if (Array.isArray(data)) {
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
                `;
                tablaUsuarios.appendChild(fila);
            });
        } else {
            console.error('Error: La respuesta de la API no es un array:', data);
        }
    })
    .catch(error => console.error('Error buscando usuarios:', error));
});

