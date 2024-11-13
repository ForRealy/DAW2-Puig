let categories: Set<string> = new Set<string>();
let products: Set<string> = new Set<string>();
let stock: Map<string, number> = new Map();

/**
 * Section de categorias
 */
function afegirCategoria() {
    let category: string = (<HTMLInputElement>document.getElementById("categoriaInput")).value;
    categories.add(category);
}

function mostrarCategories() {
    let categoriesDiv = document.getElementById("llistaCategories") || document.createElement('div');
    categoriesDiv.innerHTML = '';  
    categoriesDiv.id = "llistaCategories";
    document.body.appendChild(categoriesDiv);

    categories.forEach(category => {
        let p = document.createElement("p");
        p.textContent = category;
        categoriesDiv.appendChild(p);
    });
}

/**
 * Section de productos
 */
function afegirProducte() {
    let productName: string = (<HTMLInputElement>document.getElementById("productoInput")).value;
    let productStock: number = parseInt((<HTMLInputElement>document.getElementById("stockInput")).value, 10); // parse as number
    
    if (!isNaN(productStock)) {
        products.add(productName);
        stock.set(productName, productStock);
 
    } else {
        alert("Please enter a valid number for stock.");
    }
}

function eliminarProducte() {
    let productName: string = (<HTMLInputElement>document.getElementById("productoInput")).value;
    products.delete(productName);
    stock.delete(productName);
   
}

function mostrarProducte() {
    let productsDiv = document.getElementById("llistaProductes") || document.createElement('div');
    productsDiv.innerHTML = '';  
    productsDiv.id = "llistaProductes";
    document.body.appendChild(productsDiv);

    products.forEach(product => {
        let p = document.createElement("p");
        p.textContent = `${product} - ${stock.get(product)}`;
        productsDiv.appendChild(p);
    });
}
