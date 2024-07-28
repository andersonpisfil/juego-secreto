//Variables globales
let numeroSecreto = 0;
let intentos = 0 ;
let listaNumerosSorteados=[];
let numeroMaximo=10;
condicionesIniciales();



//Se crea una funcion con párametros para que cuando se llame a la función
//solo le pasameos el elemento HTML y el texto que se le va a asignar.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        }
        else
            asignarTextoElemento('p', 'El número secreto es mayor')
        limpiarCaja();
    }

    intentos++;

}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

//Funcion que limpie el input
function limpiarCaja(){
    //se usa el # en querySelector para apuntar al id del html 
    document.querySelector('#valorUsuario').value="";
}

function generarNumeroSecreto() {

    let numeroGenerado=  Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    //¿Ya sorteamos todos los numero?
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p',"Ya se sortearon todos los número posibles");
    }
    else{
            //Si el numero generado esta incluido en la lista 
    //includes es un metodo que hace el recorrido de todo el areglo buscando un elemento


    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

}

function reiniciarJuego(){
    //Limpiar la caja de texto
    limpiarCaja();
    //Indicar mensaje de intervalo
    //Generar el numero aleatorio
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    

}