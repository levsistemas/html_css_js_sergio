document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/api/usuarios')
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById('tabla-usuarios');
            data.forEach(usuario => {
                const fila = document.createElement('tr');
                fila.innerHTML = `<td>${usuario.id}</td><td>${usuario.nombre}</td><td>${usuario.apellido}</td><td>${usuario.email}</td>`;
                tabla.appendChild(fila);
            });
        })
        .catch(error => console.error('Error:', error));
});