const email: string[] = [
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

const names: string[] = [
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

const games: string[] = [
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

const validateEmail = (email: string): boolean => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

function imprimir(names: string[], emails: string[]) {
    const clients = document.getElementById("clients")!;
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
let item: string;

function storage (item: string, prop?:string):string;
function storage (item: string): string;

function storage (item: string, prop?: string): string {

    var storage = (<HTMLInputElement>document.getElementById("storage")).value;
    
    var splitStorage = storage.split(",") 
    console.log(splitStorage)
    if (prop){
        return `Item: ${item}, Property: ${prop}`;
    }else {
        return `Item: ${item}`;
    }
}


function charge() {
    imprimir(names, email);
}
