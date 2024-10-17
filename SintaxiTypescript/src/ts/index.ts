let money:number = Number(prompt("Dinero disponible:"));

let productQuest:String = String(prompt(
    "Quieres introducir un producto? Responde con Si o No:"));

if (productQuest == "Si" || productQuest == "si"){
do {
    var productName:number = Number(prompt("Nombre del producto:"));
    var productSale:number = Number(prompt("Nombre del producto:"));
    var productNum:number = Number(prompt("Nombre del producto:"));
    var again:String = String((prompt("Nombre del producto:")));
} while (again == "Si" || again == "si");
}else if (productQuest == "No" || productQuest == "no"){
    alert("Gracias, adios");
}else alert("Error");
