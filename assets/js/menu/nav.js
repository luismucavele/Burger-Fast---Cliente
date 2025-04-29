document.addEventListener('DOMContentLoaded', function() {
    // Botão Menu
    document.getElementById('btn-menu').addEventListener('click', function(e) {
        e.preventDefault();
        document.title = "Menu Principal"; // <- moveu pra cá!
        document.getElementById('menu-content').style.display = 'block';
        document.getElementById('promo-content').style.display = 'none';
        document.querySelector('.cardapio h1').textContent = 'Menu';
        this.classList.add('active');
        document.getElementById('btn-promo').classList.remove('active');
    });
    
    // Botão Promoções
    document.getElementById('btn-promo').addEventListener('click', function(e) {
        document.title = "Menu Promoções";
        e.preventDefault();
        document.getElementById('menu-content').style.display = 'none';
        document.getElementById('promo-content').style.display = 'block';
        document.querySelector('.cardapio h1').textContent = 'Promoções';
        this.classList.add('active');
        document.getElementById('btn-menu').classList.remove('active');
    });
});



//Nav Mobile

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o link de promoções e o conteúdo de promoções
    const promoLink = document.getElementById('abrir-promocoes');
    const promoContent = document.getElementById('promo-content');
    const menuContent = document.getElementById('menu-content');

    // Adiciona um evento de clique ao link de promoções
    promoLink.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link

        // Alterna a visibilidade do conteúdo de promoções
        if (promoContent.style.display === 'none' || promoContent.style.display === '') {
            promoContent.style.display = 'block'; // Mostra promoções
            menuContent.style.display = 'none'; // Esconde o menu principal
        } else {
            promoContent.style.display = 'none'; // Esconde promoções
            menuContent.style.display = 'block'; // Mostra o menu principal
        }
    });
});





