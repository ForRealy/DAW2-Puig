"use strict";
const maxVisits = 2; //Variable let para el maximo de visitas
const pageName = "Mi Pagina"; //Variable const para el nombre de la pagina
var visitCount = 0; //Variable var para el contador de visitas
let welcomeMesagge = "Bienvenido"; //Variable let para mensaje de bienvenida
/*
Creamos un bucle dowhile donde la condicion es que visitCount
sea menor a maxVisits
*/
do {
    visitCount++; //Sumamos 1 a visitCount cuando se inicia el bucle
    console.log(welcomeMesagge); //Imprimimos welcomeMesagge por consola
} while (visitCount < maxVisits); // repetimos el bucle
welcomeMesagge = "error"; // Cambiamos el contenido de welcomeMesagge al salir del bucle
console.log(welcomeMesagge); //Imprimimos welcomeMesagge por consola
/*
Para solucionar el error de las variables eh creado un tipo de archivo .md
para guardar los ejercicios que voy haciendo poco a poco y no tener
esa clase de errores
*/ 
