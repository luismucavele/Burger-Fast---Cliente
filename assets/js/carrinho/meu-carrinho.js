document.addEventListener('DOMContentLoaded', function() {
    atualizarContadorCarrinho();
    atualizarExibicaoCarrinho();
    
    const carrinhoIcon = document.querySelector('.carrinho-icon');
    const carrinhoContainer = document.querySelector('.carrinho-container');
    
    carrinhoIcon.addEventListener('click', function() {
        carrinhoContainer.classList.toggle('ativo');
    });
});

// Adiciona produto ao carrinho
function adicionarAoCarrinho(botao) {
    const card = botao.closest('.card-produtos');
    const nome = card.querySelector('.produto-nome').textContent;
    const descricao = card.querySelector('.descricao-card').textContent;
    const preco = card.querySelector('.preco-card').textContent;
    const imagem = card.querySelector('.imagem-card').src;

    const precoNumerico = parseFloat(preco.replace(/[^\d,]/g, '').replace(',', '.'));

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let produtoJaExistia = false;

    const produtoExistenteIndex = carrinho.findIndex(item => item.nome === nome);

    if (produtoExistenteIndex !== -1) {
        produtoJaExistia = true;
        mostrarFeedback(`${nome} já está no carrinho!`, 'info');
    } else {
        const produto = {
            nome: nome,
            descricao: descricao,
            preco: precoNumerico,
            quantidade: 1,
            imagem: imagem
        };
        carrinho.push(produto);
        mostrarFeedback(`${nome} adicionado ao carrinho!`, 'success');
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    if (!produtoJaExistia) {
        atualizarContadorCarrinho();
    }
 
    atualizarExibicaoCarrinho();
}

// Atualiza o contador de itens no carrinho
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
        contador.textContent = carrinho.length;
    }
}

// Exibe os itens do carrinho

function atualizarExibicaoCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    listaCarrinho.innerHTML = '';
    
    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = '<div class="carrinho-vazio"><i class="bi bi-cart-x"></i><p>Seu carrinho está vazio</p></div>';
        totalCarrinho.textContent = 'Total: 0,00 MT';
        return;
    }
    
    let total = 0;
    
    // Criar tabela
    const table = document.createElement('table');
    table.className = 'carrinho-table';
    
    // Cabeçalho
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th class="col-imagem">Imagem</th>
            <th class="col-nome">Nome</th>
            <th class="col-descricao">Descrição</th>
            <th class="col-preco">Preço</th>
            <th class="col-quantidade">Quantidade</th>
            <th class="col-subtotal">Subtotal</th>
            <th class="col-remover">Remover</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Corpo
    const tbody = document.createElement('tbody');
    
    carrinho.forEach(produto => {
        const subtotal = produto.preco * produto.quantidade;
        total += subtotal;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="col-imagem"><img src="${produto.imagem}" alt="${produto.nome}" class="produto-img"></td>
            <td class="col-nome">${produto.nome}</td>
            <td class="col-descricao">${produto.descricao}</td>
            <td class="col-preco">${produto.preco.toFixed(2).replace('.', ',')} MT</td>
            <td class="col-quantidade">
                <div class="quantidade-controle">
                    <button onclick="alterarQuantidade('${produto.nome}', -1)">-</button>
                    <span class="quantidade">${produto.quantidade}</span>
                    <button onclick="alterarQuantidade('${produto.nome}', 1)">+</button>
                </div>
            </td>
            <td class="col-subtotal">${subtotal.toFixed(2).replace('.', ',')} MT</td>
            <td class="col-remover">
                <i class="bi bi-trash remover-item" onclick="removerItem('${produto.nome}')"></i>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    listaCarrinho.appendChild(table);
    totalCarrinho.textContent = `Total: ${total.toFixed(2).replace('.', ',')} MT`;
}

// Altera a quantidade de um item
function alterarQuantidade(nomeProduto, delta) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoIndex = carrinho.findIndex(item => item.nome === nomeProduto);

    if (produtoIndex !== -1) {
        carrinho[produtoIndex].quantidade += delta;

        // Impede que a quantidade vá abaixo de 1
        if (carrinho[produtoIndex].quantidade < 1) {
            carrinho[produtoIndex].quantidade = 1;
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarExibicaoCarrinho();
    }
}


// Remove um item do carrinho
function removerItem(nomeProduto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.nome !== nomeProduto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    atualizarExibicaoCarrinho();
}

// Feedback visual ao adicionar/remover
function mostrarFeedback(mensagem, tipo) {
    const feedback = document.createElement('div');
    feedback.className = `feedback-adicionado ${tipo}`;
    feedback.innerHTML = `<i class="bi ${tipo === 'success' ? 'bi-check-circle' : 'bi-info-circle'}"></i> ${mensagem}`;
    document.body.appendChild(feedback);

    setTimeout(() => {
        feedback.classList.add('mostrar');
        setTimeout(() => {
            feedback.classList.remove('mostrar');
            setTimeout(() => {
                feedback.remove();
            }, 300);
        }, 3000);
    }, 10);
}







