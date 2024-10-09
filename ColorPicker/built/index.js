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
const themeRadios = document.querySelectorAll('input[name="theme"]');
themeRadios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const target = event.target;
        changeTheme(target.value);
    });
});
