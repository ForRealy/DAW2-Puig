"use strict";
const restaurantRest = {
    name: 'CalPaco',
    location: 'Barcelona',
    menu: [
        { name: "Paella", price: 15.99 },
        { name: "Gazpacho", price: 8.5 },
        { name: "Tortilla de patatas", price: 10.0 }
    ]
};
function check(restaurant) {
    const outputDiv = document.getElementById('restaurant');
    const outputMenuDiv = document.getElementById('menu');
    outputDiv.innerHTML = '';
    outputMenuDiv.innerHTML = '';
    if (restaurant) {
        const { name, location, menu } = restaurant;
        const nameElement = document.createElement('h1');
        nameElement.textContent = name;
        outputDiv.appendChild(nameElement);
        const locationElement = document.createElement('p');
        locationElement.textContent = location;
        outputDiv.appendChild(locationElement);
        const menuTitle = document.createElement('h2');
        menuTitle.textContent = "Menu";
        outputMenuDiv.appendChild(menuTitle);
        const menuList = document.createElement('ul');
        menu.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            menuList.appendChild(menuItem);
        });
        outputMenuDiv.appendChild(menuList);
    }
    else {
        outputDiv.textContent = "El restaurant no està obert";
    }
}
function addMenu() {
    const menuPlato = document.getElementById("plato").value;
    const menuPrecio = document.getElementById("precio").value;
    // Check for empty fields
    if (!menuPlato.trim() || !menuPrecio.trim()) {
        alert("Introduce un plato y un precio validos");
        return;
    }
    // Parse price to a number
    const precioNumber = parseFloat(menuPrecio);
    // Validate if the price is a valid number
    if (isNaN(precioNumber) || precioNumber <= 0) {
        alert("Introduce un precio valido");
        return; // Exit the function if the price is invalid
    }
    // Push the valid menu item into the menu array
    restaurantRest.menu.push({ name: menuPlato, price: precioNumber });
    charge();
}
function charge() {
    const suma = restaurantRest.menu.reduce((sum, item) => sum + item.price, 0);
    console.log(suma);
    check(restaurantRest);
}
