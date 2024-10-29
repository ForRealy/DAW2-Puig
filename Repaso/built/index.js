// Calcula si el parametro "doble" es divisible por 4
function clic() {
    // Recoje el valor del parametro con la id "text"
    var doble = (document.getElementById("text").value);
    // Mide el tamaño de la variable doble y lo imprime
    var lenght = doble.length;
    console.log(lenght);
    // Condicional para comprobar si es divisible
    if (lenght % 4 == 0) {
        console.log("Es divisible");
    }
    else
        console.log("No es divisible");
    var i;
    for (i = 0; i <= lenght; i++) {
        if (doble.charAt(i) == "a") {
            console.log(doble.charAt(i).toUpperCase());
            doble.toUpperCase;
        }
        else if (doble.charAt(i) == "s") {
            console.log(doble.toLowerCase());
        }
    }
}
