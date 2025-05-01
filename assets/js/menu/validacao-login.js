// Verifica se o cliente está logado
document.addEventListener('DOMContentLoaded', function () {
  const cliente = JSON.parse(localStorage.getItem('cliente'));

  if (cliente) {
      // Oculta o botão "Registar"
      const registarButton = document.getElementById('resgistar');
      if (registarButton) {
          registarButton.style.display = 'none';
      }

      // Oculta o botão "Registar Mobile"
      const registarMobileButton = document.getElementById('resgistar-mobile');
      if (registarMobileButton) {
          registarMobileButton.style.display = 'none';
      }
  }
});