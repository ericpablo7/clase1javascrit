
alert("PLATAFORMA CODERHOUSE")
alert("Vamos a registrar alumnos nuevos")

let cantidad = parseInt(prompt("Cuantos son los nuevos alumnos: "))


while (cantidad > 3 ){
    alert("No hay tantos cupos, solo disponemos de 3.")
    cantidad = parseInt(prompt("Cuantos son los nuevos alumnos: "))
}


const listaNombres = [];

do{
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada);
    console.log(listaNombres.length);
 }
while(listaNombres.length != cantidad)
 
 
const filtro = listaNombres.filter(elemento => elemento.includes("e"));

const modalidad = {
    modo : "desde casa",
    horario : 2030,
    requisito : "windows10",
}

const datosAlumnos = listaNombres.concat(modalidad);

console.log(datosAlumnos)
alert( `Pasaron la etapa de seleccion los alumnos : ${filtro}`)


document.write("MUCHOS EXITOS !!!!! ")


























