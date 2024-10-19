const botones = document.querySelectorAll('button');
const resultado = document.getElementById('resultado');

const opciones = ['Piedra', 'Papel', 'Tijera']

function seleccionComputadora() {
    const indiceAleatorio = Math.floor(Math.random() * opciones.length)
    return opciones[indiceAleatorio]
}

function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return 'Empate'
    } else if ( 
        (jugador === 'Piedra' && computadora === 'Tijera') || 
        (jugador === 'Papel' && computadora === 'Piedra') ||
        (jugador === 'Tijera' && computadora === 'Papel')
    ) {
        return 'Ganaste'
    } else {
        return 'Perdiste'
    }
    
}

//Manejar la seleccion del jugador
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const seleccionJugador = boton.id.charAt(0).toUpperCase() + boton.id.slice(1);
        const seleccionCompu = seleccionComputadora();
        const resultadoJuego = determinarGanador(seleccionJugador, seleccionCompu);

        resultado.textContent = `Tu ${seleccionJugador} | Computadora: ${seleccionCompu} -> ${resultadoJuego}`; 
    });
});