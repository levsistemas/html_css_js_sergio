// Archivo listas.js

// Hacer una solicitud GET a la API
fetch('http://localhost:8082/api/usuarios')
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



