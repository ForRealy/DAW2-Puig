//Cambiar color de fondo
function changeTheme(theme: string) {
  const themeLink = document.getElementById('style') as HTMLLinkElement;
  switch (theme) {
    case 'black':
      themeLink.href = './src/css/black.css'; 
      break;
      case 'red':
      themeLink.href = './src/css/red.css'; 
      break;
      case 'blue':
      themeLink.href = './src/css/blue.css'; 
      break;
    default:
      themeLink.href = './src/css/style.css'; 
      break;
  }
}
//Detectar boton name
const themeButtons = document.querySelectorAll<HTMLButtonElement>('button[name="theme"]');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    changeTheme(button.value); 
  });
});