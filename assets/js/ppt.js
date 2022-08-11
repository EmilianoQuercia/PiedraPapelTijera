
let ataqueJugador
let ataqueOponente
let resultadoCombate
let vidasJugador = 3
let vidasOponente = 3


//funcion para iniciar el juego, que se llama una vez cargada toda la pagina html y eso lo avisa windows.addEventListener("load", iniciarJuego)

function iniciarJuego(){
    let seleccionarAtaque = document.getElementById("seleccionarAtaque")
    seleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonPersonajeJugador = document.getElementById("botonPersonaje")//En esta linea declaro variable y llamo al elemento que esta en el documento que tiene el id botonPersonaje
//addEventListener sirve para escuchar los eventos. En este caso del boton seleccionado en la variable
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador)

    let botonPiedra = document.getElementById("botonPiedra")
    botonPiedra.addEventListener("click", ataquePiedra )

    let botonPapel = document.getElementById("botonPapel")
    botonPapel.addEventListener("click", ataquePapel )

    let botonTijera = document.getElementById("botonTijera")
    botonTijera.addEventListener("click", ataqueTijera )
    
    let botonLagarto = document.getElementById("botonLagarto")
    botonLagarto.addEventListener("click", ataqueLagarto )

    let botonSpock = document.getElementById("botonSpock")
    botonSpock.addEventListener("click", ataqueSpock )

    let botonReiniciar = document.getElementById("botonReiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

//Funcion donde por medio del boton seleccionar elegimos a nuestro personaje
function seleccionarPersonajeJugador(){
    let seleccionarAtaque = document.getElementById("seleccionarAtaque")
    seleccionarAtaque.style.display = "flex"

    let seleccionarPersonaje = document.getElementById("seleccionarPersonaje")
    seleccionarPersonaje.style.display = "none"

    let inputSheldon = document.getElementById("sheldon")
    let inputLeonard = document.getElementById("leonard")
    let inputHoward = document.getElementById("howard")
    let inputRajesh = document.getElementById("rajesh")
    let spanPersonajeJugador = document.getElementById("personajeJugador")


    if (inputSheldon.checked){
        spanPersonajeJugador.innerHTML = "SHELDON"//.innerHTML nos permite modificar elementos del html
    }else if (inputLeonard.checked){
        spanPersonajeJugador.innerHTML = "LEONARD"
    }else if (inputHoward.checked){
        spanPersonajeJugador.innerHTML = "HOWARD"
    }else if (inputRajesh.checked){
        spanPersonajeJugador.innerHTML = "RAJESH"
    }else{
        alert("NO SELECCIONASTE NADA")
    } 

    seleccionarPersonajeOponente()

}

//Funcion que elije al oponente de forma aleatoria
function seleccionarPersonajeOponente(){
    let personajeAleatrorio = aleatorio(1,4)
    let spanPersonajeOponente = document.getElementById("personajeOponente")

    if (personajeAleatrorio == 1){
        spanPersonajeOponente.innerHTML = "SHELDON"
    }else if (personajeAleatrorio == 2){
        spanPersonajeOponente.innerHTML = "LEONARD"
    }else if (personajeAleatrorio == 3){
    spanPersonajeOponente.innerHTML = "HOWARD"
    }else{
        spanPersonajeOponente.innerHTML = "RAJESH"
    }
}

function ataquePiedra(){
    ataqueJugador = "PIEDRA"
    ataqueEnemigo()
}
function ataquePapel(){
    ataqueJugador = "PAPEL"
    ataqueEnemigo()
}
function ataqueTijera(){
    ataqueJugador = "TIJERA"
    ataqueEnemigo()
}
function ataqueLagarto(){
    ataqueJugador = "LAGARTO"
    ataqueEnemigo()
}
function ataqueSpock(){
    ataqueJugador = "SPOCK"
    ataqueEnemigo()
}

function ataqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,5)

    if (ataqueAleatorio == 1){
        ataqueOponente = "PIEDRA"
    }else if (ataqueAleatorio == 2){
        ataqueOponente = "PAPEL"
    }else if (ataqueAleatorio == 3){
        ataqueOponente = "TIJERA"
    }else if (ataqueAleatorio == 4){
        ataqueOponente = "LAGARTO"
    }else{
        ataqueOponente = "SPOCK"
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidasJugador")
    let spanVidasOponente = document.getElementById("vidasOponente")

    if (ataqueJugador == ataqueOponente){
        resultadoCombate = "EMPATE, VUELVE A JUGAR"
    }else if (ataqueJugador == "PIEDRA" && (ataqueOponente == "TIJERA" || ataqueOponente == "LAGARTO")){
        resultadoCombate = "GANASTE 🎉🥳"
        vidasOponente = vidasOponente - 1
        spanVidasOponente.innerHTML = vidasOponente
    }else if (ataqueJugador == "PAPEL" && (ataqueOponente == "PIEDRA" || ataqueOponente == "SPOCK")){
        resultadoCombate = "GANASTE 🎉🥳"
        vidasOponente = vidasOponente - 1
        spanVidasOponente.innerHTML = vidasOponente
    }else if (ataqueJugador == "TIJERA" && (ataqueOponente == "PAPEL" || ataqueOponente == "LAGARTO")){
        resultadoCombate = "GANASTE 🎉🥳"
        vidasOponente = vidasOponente - 1
        spanVidasOponente.innerHTML = vidasOponente
    }else if (ataqueJugador == "LAGARTO" && (ataqueOponente == "PAPEL" || ataqueOponente == "SPOCK")){
        resultadoCombate = "GANASTE 🎉🥳"
        vidasOponente = vidasOponente - 1
        spanVidasOponente.innerHTML = vidasOponente
    }else if (ataqueJugador == "SPOCK" && (ataqueOponente == "TIJERA" || ataqueOponente == "PIEDRA")){
        resultadoCombate = "GANASTE 🎉🥳"
        vidasOponente = vidasOponente - 1
        spanVidasOponente.innerHTML = vidasOponente
    }else{
        resultadoCombate = "PERDISTE 😭"
        vidasJugador = vidasJugador - 1
        spanVidasJugador.innerHTML = vidasJugador
    }

    crearMensaje()

    //revisar vidas
    revisarVidas()
    
  
}

function revisarVidas(){
    if (vidasJugador == 0){
        crearMensajeFinal("PERDISTE ESTA BATALLA")
    }else if (vidasOponente == 0){
        crearMensajeFinal("FELICIDADES ERES EL MEJOR")
    }
}


function crearMensaje(){
    let mensajeResultado = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataquesDelJugador")
    let ataquesDelOponente = document.getElementById("ataquesDelOponente")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelOponente = document.createElement("p")

    mensajeResultado.innerHTML = resultadoCombate

    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelOponente.innerHTML = ataqueOponente


    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelOponente.appendChild(nuevoAtaqueDelOponente)

}

function crearMensajeFinal(mensajeFinal){
    let sectionMensaje = document.getElementById("mensajes")
    let mensaje = document.createElement("h3")

    mensaje.innerHTML = mensajeFinal
    sectionMensaje.appendChild(mensaje)

    let botonPiedra = document.getElementById("botonPiedra")
    botonPiedra.disabled = true

    let botonPapel = document.getElementById("botonPapel")
    botonPapel.disabled = true

    let botonTijera = document.getElementById("botonTijera")
    botonTijera.disabled = true
    
    let botonLagarto = document.getElementById("botonLagarto")
    botonLagarto.disabled = true

    let botonSpock = document.getElementById("botonSpock")
    botonSpock.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

}   

function reiniciarJuego(){
    location.reload()
}

//FUNCION ALEATORIO
function aleatorio(max,min){
    return Math.floor(Math.random()*(max-min+1)+min)
}

//windows escucha el evento de carga y llama a la funcion IniciarJuego 
window.addEventListener("load", iniciarJuego)