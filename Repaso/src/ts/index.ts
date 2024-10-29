// Calcula si el parametro "doble" es divisible por 4
function clic () {
    // Recoje el valor del parametro con la id "text"
    let doble:string = ((document.getElementById("text") as HTMLInputElement).value);
    
    // Mide el tamaño de la variable doble y lo imprime
    let lenght:number = doble.length;
    console.log(lenght);

    // Condicional para comprobar si es divisible
    if (lenght % 4 == 0){
    console.log("Es divisible");
    }else 
    console.log("No es divisible");

    let i:number;
    for (i = 0; i <= lenght; i++) {
        
        if (doble.charAt(i) == "a") {
            console.log(doble.charAt(i).toUpperCase());
            doble.toUpperCase;
            
        } else if (doble.charAt(i) == "s") {
            console.log(doble.toLowerCase());

        }

    }
    

}