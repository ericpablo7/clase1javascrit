
alert("PLATAFORMA CODERHOUSE")
alert("Vamos a registrar alumnos nuevos")

let cantidad = parseInt(prompt("Cuantos son los nuevos alumnos: "))


while (cantidad > 3 ){
    alert("No hay tantos cupos, solo disponemos de 3.")
    cantidad = parseInt(prompt("Cuantos son los nuevos alumnos: "))
}



class alumno{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    registro(){
        alert(`Bienvenido Señor ${this.apellido}`);
    }
}

const alumno1 = new alumno("Eric", "Internicola");
const alumno2 = new alumno("Pablo", "Coria");
const alumno3 = new alumno("Jose", "Alza");


alumno1.registro();
alumno2.registro();
alumno3.registro();































