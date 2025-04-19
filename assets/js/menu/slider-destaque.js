document.addEventListener('DOMContentLoaded', function () {
  let sliderInterval;
  let currentIndex = 0; // Mantém o índice atual da imagem

  function initializeSlider() {
      const slider = document.querySelector('.card-menu-img.slider');
      if (!slider) return; // Se o slider não existir, saia da função

      const images = slider.querySelectorAll('.slider-img');

      function showNextImage() {
          // Remove a classe "active" da imagem atual
          images[currentIndex].classList.remove('active');

          // Incrementa o índice para a próxima imagem
          currentIndex = (currentIndex + 1) % images.length;

          // Adiciona a classe "active" à próxima imagem
          images[currentIndex].classList.add('active');
      }

      // Para o slider anterior, se estiver rodando
      if (sliderInterval) {
          clearInterval(sliderInterval);
      }

      // Garante que apenas a imagem atual esteja ativa
      images.forEach((img, index) => {
          img.classList.toggle('active', index === currentIndex);
      });

      // Inicializa o intervalo para trocar as imagens
      sliderInterval = setInterval(showNextImage, 4000); // Troca as imagens a cada 3 segundos
  }

  // Inicializa o slider ao carregar a página
  initializeSlider();

  // Observa mudanças no DOM para reinicializar o slider sem reiniciar o índice
  const observer = new MutationObserver(() => {
      initializeSlider(); // Reinicializa o slider se o DOM mudar
  });

  // Observa o contêiner principal onde as mudanças podem ocorrer
  const menuContent = document.getElementById('menu-content');
  if (menuContent) {
      observer.observe(menuContent, { childList: true, subtree: true });
  }
});