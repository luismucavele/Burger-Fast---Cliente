document.addEventListener('DOMContentLoaded', function () {
    const menuContent = document.getElementById('menu-content');
    const menuLinks = document.querySelectorAll('.menu-link');
    const templates = document.getElementById('templates');
    const cardapio = document.querySelector('.cardapio'); // Seleciona o cardápio
    const originalMenuHTML = menuContent.innerHTML; // Salva o conteúdo original do menu

    // Função para carregar uma seção no menu-content
    function carregarSecao(targetId) {
        const section = templates.querySelector(`#${targetId}`);
        if (section) {
            menuContent.innerHTML = section.outerHTML; // Carrega o conteúdo da seção
            cardapio.style.display = 'none'; // Oculta o cardápio
            adicionarEventoVoltar(); // Adiciona o evento de voltar
        }
    }

    // Adiciona evento de clique aos links do menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            const targetId = this.getAttribute('data-target'); // Obtém o ID da seção alvo
            carregarSecao(targetId); // Carrega a seção correspondente
        });
    });

    // Função para voltar ao menu principal
    function adicionarEventoVoltar() {
        const voltarLink = menuContent.querySelector('.voltar');
        if (voltarLink) {
            voltarLink.addEventListener('click', function (event) {
                event.preventDefault(); // Evita o comportamento padrão do link
                menuContent.innerHTML = originalMenuHTML; // Restaura o menu principal
                cardapio.style.display = 'flex'; // Exibe o cardápio novamente
                adicionarEventosMenu(); // Reaplica os eventos nos links do menu
            });
        }
    }

    // Reaplica os eventos nos links do menu após restaurar o menu principal
    function adicionarEventosMenu() {
        const updatedMenuLinks = menuContent.querySelectorAll('.menu-link');
        updatedMenuLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Evita o comportamento padrão do link
                const targetId = this.getAttribute('data-target'); // Obtém o ID da seção alvo
                carregarSecao(targetId); // Carrega a seção correspondente
            });
        });
    }
});


