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
        document.title = "Promoções";
        e.preventDefault();
        document.getElementById('menu-content').style.display = 'none';
        document.getElementById('promo-content').style.display = 'block';
        document.querySelector('.cardapio h1').textContent = 'Promoções';
        this.classList.add('active');
        document.getElementById('btn-menu').classList.remove('active');
    });
});











document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-menu a");
    const menuContent = document.getElementById("menu-content");
    const cardSections = document.querySelectorAll(".card-section");
    const cardapio = document.querySelector(".cardapio");

    // Abrir a tela específica de cada card
    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = card.getAttribute("href").substring(1); // Obtém o ID da seção
            const targetSection = document.getElementById(targetId);

            // Esconde o menu principal e a div.cardapio
            menuContent.style.display = "none";
            cardapio.style.display = "none";

            // Exibe a seção correspondente
            cardSections.forEach((section) => (section.style.display = "none"));
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

    // Função para voltar ao menu principal
    window.voltarMenu = function () {
        // Exibe o menu principal e a div.cardapio
        menuContent.style.display = "block";
        cardapio.style.display = "flex"; // Garante que a centralização seja mantida

        // Esconde todas as seções
        cardSections.forEach((section) => (section.style.display = "none"));
    };
});

