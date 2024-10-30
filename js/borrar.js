document.getElementById('eliminar').addEventListener('click', function() {
    const id = document.getElementById('eliminar-id').value;

    fetch(`http://localhost:8082/api/usuarios/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Usuario eliminado');
    })
    .catch(error => console.error('Error eliminando usuario:', error));
});
