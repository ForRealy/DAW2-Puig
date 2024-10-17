"use strict";
let money = Number(prompt("Dinero disponible:"));
let productQuest = String(prompt("Quieres introducir un producto? Responde con Si o No:"));
if (productQuest == "Si" || productQuest == "si") {
    do {
        var productName = Number(prompt("Nombre del producto:"));
        var productSale = Number(prompt("Nombre del producto:"));
        var productNum = Number(prompt("Nombre del producto:"));
        var again = String((prompt("Nombre del producto:")));
    } while (again == "Si" || again == "si");
}
else if (productQuest == "No" || productQuest == "no") {
    alert("Gracias, adios");
}
else
    alert("Error");
