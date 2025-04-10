document.addEventListener('DOMContentLoaded', function() {
    // Botão Menu
    document.getElementById('btn-menu').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('menu-content').style.display = 'block';
        document.getElementById('promo-content').style.display = 'none';
        document.querySelector('.cardapio h1').textContent = 'Menu';
        this.classList.add('active');
        document.getElementById('btn-promo').classList.remove('active');
    });
    
    // Botão Promoções
    document.getElementById('btn-promo').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('menu-content').style.display = 'none';
        document.getElementById('promo-content').style.display = 'block';
        document.querySelector('.cardapio h1').textContent = 'Promoções';
        this.classList.add('active');
        document.getElementById('btn-menu').classList.remove('active');
    });
});



// sobre nos 

function abrirModalIdioma() {
    document.getElementById("modal-idioma").style.display = "flex";
  }
  
  function fecharModalIdioma() {
    document.getElementById("modal-idioma").style.display = "none";
  }
  
  document.getElementById("form-idioma").addEventListener("submit", function (e) {
    e.preventDefault();
    const idiomaSelecionado = document.querySelector('input[name="idioma"]:checked').value;
    console.log("Idioma selecionado:", idiomaSelecionado);
  
    // Aqui você pode guardar no localStorage ou aplicar lógica de idioma
    fecharModalIdioma();
  });
  