"use strict";
const email = [
    "lorem@gmail.com",
    "john.doe@example.com",
    "jane.smith@domain.com",
    "alice@example.org",
    "bob@example.net",
    "charlie.doe@mail.com",
    "info@company.com",
    "invalid-email@domain",
    "user@domain",
    "@missingusername.com",
    "username@domain..com"
];
const names = [
    "Paco",
    "Roger",
    "Alberto",
    "Roberto",
    "Carlos",
    "Sandra",
    "Javier",
    "Patricia",
    "Felipe",
    "Raquel"
];
let games = [
    { item: "Elden Ring", prop: "PC" },
    { item: "Wukong", prop: "PC" },
    { item: "Astro Bot", prop: "PC" }
];
let films = [
    "Inception",
    "The Shawshank Redemption",
    "Parasite"
];
const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
function imprimir(names, emails) {
    const clients = document.getElementById("clients");
    const ul = document.createElement('ul');
    names.forEach((name, index) => {
        const email = emails[index];
        if (validateEmail(email)) {
            const liElement = document.createElement('li');
            liElement.textContent = `${name} - ${email}`;
            ul.appendChild(liElement);
        }
    });
    clients.appendChild(ul);
}
function getStorage() {
    var storageid = document.getElementById("storage").value;
    var splitStorage = storageid.split(",");
    if (splitStorage[1]) {
        games.push({ item: splitStorage[0], prop: splitStorage[0] });
    }
    else {
        films.push(splitStorage[0]);
    }
}
function storage(item, prop) {
    const clients = document.getElementById("products");
    const ul = document.createElement('ul');
    if (prop) {
        const liElement = document.createElement('li');
        liElement.textContent = `${item} - ${prop}`;
        ul.appendChild(liElement);
    }
    else {
        const liElement = document.createElement('li');
        liElement.textContent = `${item}`;
        ul.appendChild(liElement);
    }
    clients.appendChild(ul);
    return item;
}
const ButtonF = document.getElementById("ButtonF");
const ButtonG = document.getElementById("ButtonG");
const ButtonB = document.getElementById("ButtonB");
function filter(event) {
    const target = event.target;
    console.log('You clicked:', target.id);
}
if (ButtonF) {
    ButtonF.addEventListener('click', filter);
}
if (ButtonG) {
    ButtonG.addEventListener('click', filter);
}
if (ButtonB) {
    ButtonB.addEventListener('click', filter);
}
function charge() {
    imprimir(names, email);
    for (let i = 0; i < games.length; i++) {
        storage(games[i].item, games[i].prop);
    }
    ;
}
