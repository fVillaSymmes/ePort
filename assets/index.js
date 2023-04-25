// Recordatorio

alert(`Pasajero, se le recuerda que para abordar el avión debe tener\n en mano su pasaporte y su boleto de embarque. Manténgase\n atento a los avisos mediante esta plataforma.`)

// Fecha

let letreroFecha = document.querySelector("#insertDate")

let fecha = new Date()

let año = fecha.getFullYear()
let mes = fecha.getMonth() +1
let dia = fecha.getDate()

let fechaActual = [dia, mes, año].join("-")

letreroFecha.innerHTML = fechaActual

// Hora

let letreroReloj = document.querySelector("#insertTime")

let hora = fecha.getHours()
let minutos = fecha.getMinutes()

hora = ("0" + hora).slice(-2);
minutos = ("0" + minutos).slice(-2);

let reloj = [hora, minutos].join(":")

letreroReloj.innerHTML = reloj

// Número de vuelo y terminal


randomizerVuelos = Math.floor(Math.random() * 9999) + 1000;

randomizerTerminales = Math.floor(Math.random() * 15) + 1;

let numeroVuelo = document.querySelector("#flightNumber")
let numeroTerminal = document.querySelector("#terminalNumber")

numeroVuelo.innerHTML = randomizerVuelos
numeroTerminal.innerHTML = randomizerTerminales