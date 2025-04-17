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








