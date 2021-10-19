
let edad   = prompt("Ingresar edad");
let mayorEdad = confirm("Eres mayor de edad?")


if((edad !="") && ((edad > 18 && edad <= 60) && (mayorEdad))){
    document.write("Puedes ingresar"); 
}
else if(edad > 60){
    document.write("Estas un poco grande para este lugar")
}
else{
    document.write("Debes irte ya mismo");
}

