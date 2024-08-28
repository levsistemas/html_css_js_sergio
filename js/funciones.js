console.log('ESTOY VIVO')

const FORMULARIO = document.getElementById('formulario')
const RESET = document.getElementById('reset')
FORMULARIO.addEventListener('click', async (e) => {
    try {
        const NOMBRE = document.getElementById('nombre').value
        const APELLIDO = document.getElementById('apellido').value
        const CORREOS = document.getElementById('correos').value
        if(NOMBRE!=='' && APELLIDO!==''&&CORREOS!==''){
            console.log('Exitoso!')
            alert('Nombre: ' + document.getElementById('nombre').value)
            alert('Apellido: ' + document.getElementById('apellido').value)
            alert('Correo Electronico: ' + document.getElementById('correos').value)
            e.preventDefault();
            const RESULTADO = document.getElementById('resultado')
            const H1_1 = document.createElement('h1')
            const H1_2 = document.createElement('h1')
            const H1_3 = document.createElement('h1')
            H1_1.setAttribute('id', "h1_hijo1")
            H1_2.setAttribute('id', "h1_hijo2")
            H1_3.setAttribute('id', "h1_hijo3")
            H1_1.textContent=NOMBRE
            H1_2.textContent=APELLIDO
            H1_3.textContent=CORREOS
            RESULTADO.appendChild(H1_1)
            RESULTADO.appendChild(H1_2)
            RESULTADO.appendChild(H1_3)
        }
    } catch {
        console.log('Error')
    }
})

RESET.addEventListener('click', async () => {
    if(document.getElementById('h1_hijo1')){
        document.getElementById('h1_hijo1').remove()
    }
    if(document.getElementById('h1_hijo2')){
        document.getElementById('h1_hijo2').remove()
    }
    if(document.getElementById('h1_hijo3')){
        document.getElementById('h1_hijo3').remove()
    }
})

const BTN_FG = document.getElementById('funcion_generica');
BTN_FG.addEventListener('click', async () => {
    const INPUT_GT = document.getElementById('get_text').value;
    function nombre(name1, name2, name3, age) {
        const P = document.createElement('p');
        P.innerHTML = name1 + " " + name2 + " " + name3 + " " + age
        document.getElementById('resultados').appendChild(P)
    }
    nombre("Leandro ","Eduardo ","Vega ",37);
    nombre("Sergio ", "Alberto ", "Arenhardt ", 54);
})

const BTN_PORCENTAJE = document.getElementById('porcentaje');
BTN_PORCENTAJE.addEventListener('click', async () => {
    const NUMERO = Number(document.getElementById('numero').value)
    console.log(NUMERO)
    if(isNaN!==NUMERO){
        const P = document.createElement('p');
        P.innerHTML = (NUMERO*0.25);
        document.getElementById('resultados').appendChild(P)
    } else {
        alert('NO ES UN NUMERO VALIDO ', NUMERO)
    }
})