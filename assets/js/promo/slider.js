let indiceSlide = 0;
let temporizador;

function mostrarSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  const pontos = document.getElementsByClassName("ponto");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  indiceSlide++;
  if (indiceSlide > slides.length) {
    indiceSlide = 1;
  }

  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" ativo", "");
  }

  slides[indiceSlide - 1].style.display = "block";
  pontos[indiceSlide - 1].className += " ativo";

  temporizador = setTimeout(mostrarSlides, 7000); // muda a cada 3s
}

function mudarSlide(n) {
  clearTimeout(temporizador);
  indiceSlide += n - 1;
  mostrarSlides();
}

function definirSlide(n) {
  clearTimeout(temporizador);
  indiceSlide = n - 1;
  mostrarSlides();
}

// Inicia o slideshow ao carregar
mostrarSlides();
