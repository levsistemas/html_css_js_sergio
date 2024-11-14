import { protocolo, url, port_backend } from "./direcciones.js";

const BTN_ELIMINAR = document.getElementById('eliminar')

BTN_ELIMINAR.addEventListener('click', function() {

    const ID = parseInt(document.getElementById('id').value);

    console.log('Preparandonos para eliminar el registro del usuario: ' + ID + ' (A MODO PRUEBA)')

    console.log(ID)

    fetch(`${protocolo}${url}${port_backend}/api/usuarios/${ID}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Usuario eliminado');
    })
    .catch(error => console.error('Error eliminando usuario:', error));
});
