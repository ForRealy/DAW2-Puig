"use strict";
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
const themeButtons = document.querySelectorAll('button[name="theme"]');
themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        changeTheme(button.value);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    changeTheme('index');
});
