
let numeroSecreto = 0;
let intentos = 0; 
let listaNumeroSorteado = [];
let numeroMaximo = 10; 

function agregarContenido (elemento,texto){
let elementoHtml = document.querySelector (elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function elementosIniciales() {
    agregarContenido ('h1','Juego del Numero Secreto');
    agregarContenido ( 'p',`Coloca un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
    
}
function generarNumeroSecreto() { 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumeroSorteado);

    if (listaNumeroSorteado.length == numeroMaximo) {
        agregarContenido ('p','Ya todos los numeros fueron utilizados')
    } else {

    if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function VerificarNumero() {
    let numeroDeUsuario = parseInt( document.getElementById ("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto){
        agregarContenido ('p',`Felicidades adivinaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : "veces" }`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else if (numeroDeUsuario > numeroSecreto){
        agregarContenido ('p','El numero es menor')
    }
    else{
        agregarContenido ('p','El numero es mayor')
    }
    intentos++; 
    limpiarCaja();
return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}


function reiniciarJuego(){

elementosIniciales();

limpiarCaja();

document.querySelector ('#reiniciar').setAttribute('disabled','true')

}

elementosIniciales();