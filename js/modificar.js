import { backend } from "./direcciones.js";

document.getElementById('modificar').addEventListener('click', function() {
    console.log('Preparandonos para modificar el registro...')
    const ID = document.getElementById('id').value;
    const NAME = document.getElementById('name').value;
    const SURNAME = document.getElementById('surname').value;
    const EMAIL = document.getElementById('email').value;

    console.log('Validando las constantes cargadas: ' + ID + ' ' + NAME + ' ' + SURNAME + ' ' + EMAIL)

    const usuario = { ID, NAME, SURNAME, EMAIL };

    fetch(`${backend}/api/usuarios/${ID}`, {
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
