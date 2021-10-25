alert("Cual es tu top5 de peliculas favoritas? ")


for (let i = 1; i <= 5; i++) {
   
    let ingresarPelicula = prompt("Ingresar pelicula");
    
    document.write(` TOP  N° ${i} ${ingresarPelicula} /`);
}



