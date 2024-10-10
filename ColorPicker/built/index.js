"use strict";
//Cambiar color de fondo
function changeTheme(theme) {
    const themeLink = document.getElementById('style');
    switch (theme) {
        case 'black':
            themeLink.href = './src/css/black.css';
            break;
        default:
            themeLink.href = './src/css/style.css';
            break;
    }
}
//Detectar boton name
const themeButtons = document.querySelectorAll('button[name="theme"]');
themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        changeTheme(button.value);
    });
});
