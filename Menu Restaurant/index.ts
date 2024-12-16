// Dades inicials
interface Order {
    name: string;
    price: number;
}

interface Client {
    name: string;
    orders: Order[];
}

const clients: Client[] = [];
const orders: Order[] = [];

// Afegir un nou client
function addClient() {
    const clientNom = (<HTMLInputElement>document.getElementById("clientNom")).value.trim();

    if (!clientNom) {
        alert("Introdueix un nom vàlid per al client.");
        return;
    }

    if (clients.some(client => client.name === clientNom)) {
        alert("El client ja existeix.");
        return;
    }

    clients.push({ name: clientNom, orders: [] });
    alert(`Client "${clientNom}" afegit correctament.`);
}

// Afegir una nova comanda
function addOrder() {
    const comandaNom = (<HTMLInputElement>document.getElementById("comandaNom")).value.trim();
    const comandaPreu = parseFloat((<HTMLInputElement>document.getElementById("comandaPreu")).value);

    if (!comandaNom || isNaN(comandaPreu) || comandaPreu <= 0) {
        alert("Introdueix una comanda vàlida amb un preu vàlid.");
        return;
    }

    if (orders.some(order => order.name === comandaNom)) {
        alert("La comanda ja existeix.");
        return;
    }

    orders.push({ name: comandaNom, price: comandaPreu });
    alert(`Comanda "${comandaNom}" afegida correctament.`);
}

// Assignar una comanda a un client
function assignOrderToClient() {
    const assignClient = (<HTMLInputElement>document.getElementById("assignClient")).value.trim();
    const assignComanda = (<HTMLInputElement>document.getElementById("assignComanda")).value.trim();

    const client = clients.find(c => c.name === assignClient);
    const order = orders.find(o => o.name === assignComanda);

    if (!client) {
        alert("El client no existeix.");
        return;
    }

    if (!order) {
        alert("La comanda no existeix.");
        return;
    }

    client.orders.push(order);
    alert(`Comanda "${assignComanda}" assignada a "${assignClient}".`);
}

// Mostrar clients
function showClients() {
    const clientsOutput = document.getElementById("clientsOutput")!;
    clientsOutput.innerHTML = clients.map(client => `<p>${client.name}</p>`).join("");
}

// Mostrar comandes
function showOrders() {
    const ordersOutput = document.getElementById("ordersOutput")!;
    ordersOutput.innerHTML = orders.map(order => `<p>${order.name} - $${order.price.toFixed(2)}</p>`).join("");
}

// Mostrar comandes d’un client
function showClientOrders() {
    const clientName = (<HTMLInputElement>document.getElementById("clientComandes")).value.trim();
    const clientOrdersOutput = document.getElementById("clientOrdersOutput")!;

    const client = clients.find(c => c.name === clientName);

    if (!client) {
        clientOrdersOutput.innerHTML = `<p>El client "${clientName}" no existeix.</p>`;
        return;
    }

    if (client.orders.length === 0) {
        clientOrdersOutput.innerHTML = `<p>El client "${clientName}" no té comandes.</p>`;
        return;
    }

    clientOrdersOutput.innerHTML = `
        <h3>Comandes de ${clientName}</h3>
        <ul>
            ${client.orders.map(order => `<li>${order.name} - $${order.price.toFixed(2)}</li>`).join("")}
        </ul>
    `;
}
