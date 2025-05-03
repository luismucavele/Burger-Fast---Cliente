document.addEventListener('DOMContentLoaded', function () {
    // Adicione "destaques" à lista de categorias
    const categorias = ['destaques', 'hamburguer', 'frango', 'sandes', 'batatas', 'pizza', 'agua', 'refrigerantes', 'sumo', 'sorvete'];
    categorias.forEach(categoria => carregarProdutos(categoria));
});

function carregarProdutos(categoria) {
    fetch(`http://localhost:3000/api/produtos/${categoria}`)    // Substitua pela URL do seu backend
        .then(response => response.json())
        .then(produtos => {
            const container = (categoria === 'agua' || categoria === 'refrigerantes' || categoria === 'sumo')
                ? document.querySelector(`#${categoria} .liquidos-inf`)
                : document.querySelector(`#${categoria} .grade-cards`);

            container.innerHTML = ''; // Limpa os produtos existentes

            produtos.forEach(produto => {
                if (produto.categoria === categoria) {
                    const card = `
                        <div class="card-produtos">
                            <img src="http://localhost:3000${produto.imagem}" alt="${produto.nome}" class="imagem-card">
                            <div class="corpo-card">
                                <h3 class="produto-nome">${produto.nome}</h3>
                                <p class="descricao-card">${produto.descricao}</p>
                                <p class="preco-card">${produto.preco} MT</p>
                                <button class="botao-adicionar" data-id="${produto.id}" onclick="adicionarAoCarrinho(this)">
                                    <i class="bi bi-cart3"></i>Adicionar
                                </button>
                            </div>
                        </div>
                    `;
                    container.innerHTML += card;
                }
            });
        })
        .catch(err => console.error('Erro ao carregar produtos:', err));
}