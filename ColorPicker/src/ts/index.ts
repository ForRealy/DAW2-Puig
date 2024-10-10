// Función para cambiar el tema mediante estilos en línea
function changeTheme(theme: string) {
  const helpDiv = document.getElementById('help') as HTMLDivElement; // Obtener el <div> con id 'help'
  
  // Aplicar estilos según el tema seleccionado
  switch (theme) {
    case 'black':
      helpDiv.style.backgroundColor = 'black';
      break;
    case 'red':
      helpDiv.style.backgroundColor = 'red';
      break;
    case 'blue':
      helpDiv.style.backgroundColor = 'blue';
      break;
    default:
      helpDiv.style.backgroundColor = 'green';
      break;
  }
}

// Detectar botones con el atributo name igual a "theme"
const themeButtons = document.querySelectorAll<HTMLButtonElement>('button[name="theme"]');

// Agregar un evento de clic a cada botón de tema
themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    changeTheme(button.value); // Llamar a la función para cambiar el tema
  });
});
