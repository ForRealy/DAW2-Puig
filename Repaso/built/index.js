"use strict";
// Calcula si el parametro "doble" es divisible por 4
function clic() {
    // Recoje el valor del parametro con la id "text"
    let doble = (document.getElementById("text").value);
    // Variable donde añadiremos el resultado con mayusculas intercaladas
    let news = "";
    // Mide el tamaño de la variable doble y lo imprime
    let lenght = doble.length;
    console.log(lenght);
    // Condicional para comprobar si es divisible
    if (lenght % 4 == 0) {
        console.log("Es divisible");
    }
    else
        console.log("No es divisible");
    // Bucle para añadir parametros al string
    let i;
    for (i = 0; i <= lenght; i++) {
        // Calculas si es par o impar
        if (i % 2 == 0) {
            // Añades el caracter en posicion i en mayuscula si es impar
            news = news + doble.charAt(i).toUpperCase();
            // Sñades el caracter en posicion i en minuscula si es par
        }
        else
            news = news + doble.charAt(i).toLowerCase();
    }
    console.log(news);
}
