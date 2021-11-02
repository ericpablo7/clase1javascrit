
alert("PLATAFORMA CODERHOUSE")
alert("Vamos a registrar a un nuevo alumno")

let nombre = prompt("Ingrese su nombre: ")
let apellido = prompt("Ingrese su apellido: ")
saludar(nombre, apellido)

let edad = parseInt(prompt("Edad: "))

while(edad < 18){
    alert("El dato es incorrecto , ingrese nuevamente.")
    edad = parseInt(prompt("Edad: "))
}

function saludar(nombre, apellido){
    alert(`Bienvenido alumno: ${nombre} ${apellido}`)
}

let primerNota = parseInt(prompt("Ingrese la primer nota: "))
let segundaNota = parseInt(prompt("Ingrese la segund anota: "))

let sumoNotas = (a,b) => a + b

let promedio = function (primerNota, segundaNota) { return sumoNotas(primerNota, segundaNota) / 2}

alert("El promedio de notas es de " + promedio(primerNota,segundaNota))

if(promedio(primerNota, segundaNota) < 6) {
    alert("Lamentablemente desaprobaste, tenes que repetir el curso")
}
else{
    alert("Felicitaciones , aprobaste el curso")
}


























