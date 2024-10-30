document.getElementById('modificar').addEventListener('click', function() {
    const id = document.getElementById('modificar-id').value;
    const nombre = document.getElementById('modificar-nombre').value;
    const apellido = document.getElementById('modificar-apellido').value;
    const email = document.getElementById('modificar-email').value;

    const usuario = { id, nombre, apellido, email };

    fetch(`http://localhost:8082/api/usuarios/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario modificado:', data);
    })
    .catch(error => console.error('Error modificando usuario:', error));
});
