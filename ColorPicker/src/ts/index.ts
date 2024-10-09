function changeTheme(theme: string) {
    const themeLink = document.getElementById('style') as HTMLLinkElement;
  
   
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
    radio.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement;
      changeTheme(target.value);
    });
  });
  