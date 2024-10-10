"use strict";
// Función para cambiar el tema mediante estilos en línea
function changeTheme(theme) {
    const helpDiv = document.getElementById('help'); // Obtener el <div> con id 'help'
    // Aplicar estilos según el tema seleccionado
    switch (theme) {
        case 'black':
            helpDiv.style.backgroundColor = 'black';
            helpDiv.style.color = 'white';
            break;
        case 'red':
            helpDiv.style.backgroundColor = 'red';
            helpDiv.style.color = 'white';
            break;
        case 'blue':
            helpDiv.style.backgroundColor = 'blue';
            helpDiv.style.color = 'white';
            break;
        default:
            helpDiv.style.backgroundColor = 'yellow';
            helpDiv.style.color = 'black';
            break;
    }
}
// Detectar botones con el atributo name igual a "theme"
const themeButtons = document.querySelectorAll('button[name="theme"]');
// Agregar un evento de clic a cada botón de tema
themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        changeTheme(button.value); // Llamar a la función para cambiar el tema
    });
});
