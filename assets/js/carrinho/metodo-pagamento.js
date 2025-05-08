// Função para carregar o carrinho do localStorage
function carregarCarrinhoCliente() {
  try {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    return Array.isArray(carrinho) ? carrinho : [];
  } catch {
    return [];
  }
}

// Atualiza o valor total no botão de pagamento
function atualizarValorTotalPagamento() {
  let total = 0;
  const carrinho = carregarCarrinhoCliente();
  carrinho.forEach(produto => {
    total += (produto.preco * (produto.quantidade || 1));
  });
  document.getElementById('valor-total-pagamento').textContent = total.toLocaleString('pt-BR', {minimumFractionDigits: 2}) + ' MT';
  return total;
}

// Detecta tipo de cartão
document.getElementById('numero-cartao').addEventListener('input', function(e) {
  const valor = e.target.value.replace(/\s/g, '');
  const icones = document.querySelectorAll('.icone-cartao');
  icones.forEach(icone => icone.classList.remove('ativo'));
  if (/^4/.test(valor)) {
    document.getElementById('icone-visa').classList.add('ativo');
  } else if (/^5[1-5]/.test(valor)) {
    document.getElementById('icone-mastercard').classList.add('ativo');
  } else if (/^3[47]/.test(valor)) {
    document.getElementById('icone-amex').classList.add('ativo');
  } else if (/^6(?:011|5)/.test(valor)) {
    document.getElementById('icone-discover').classList.add('ativo');
  }
  // Formatar número do cartão com espaços
  if (valor.length > 0) {
    e.target.value = valor.replace(/(\d{4})/g, '$1 ').trim();
  }
});

// Formatar data de validade
document.getElementById('validade').addEventListener('input', function(e) {
  const valor = e.target.value.replace(/\D/g, '');
  if (valor.length > 2) {
    e.target.value = valor.slice(0, 2) + '/' + valor.slice(2, 4);
  }
});

// Simulação de pagamento
document.getElementById('botao-pagar').addEventListener('click', function(e) {
  e.preventDefault();
  const botao = e.target.closest('button');
  botao.disabled = true;
  botao.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';

  // Simula processamento
  setTimeout(() => {
    botao.style.display = 'none';
    document.getElementById('sucesso-pagamento').style.display = 'block';

    // Limpa carrinho após pagamento simulado
    localStorage.removeItem('carrinho');

    setTimeout(() => {
      fecharModalPagamento();
      window.location.href = 'menu.html'; // Redireciona para o menu ou página de pedidos
    }, 2000);
  }, 1800);
});

// Função para abrir o modal
function abrirModalPagamento() {
  atualizarValorTotalPagamento();
  document.getElementById('modal-pagamento').style.display = 'flex';
  document.getElementById('sucesso-pagamento').style.display = 'none';
  document.getElementById('botao-pagar').style.display = 'block';
  document.getElementById('botao-pagar').disabled = false;
  document.getElementById('botao-pagar').innerHTML = '<i class="fas fa-lock"></i> Pagar <span id="valor-total-pagamento"></span>';
  atualizarValorTotalPagamento();
}

// Função para fechar o modal
function fecharModalPagamento() {
  document.getElementById('modal-pagamento').style.display = 'none';
}

// Fecha ao clicar no X
document.getElementById('fechar-modal-pagamento').onclick = fecharModalPagamento;

// Fecha ao clicar fora do modal
window.onclick = function(event) {
  const modal = document.getElementById('modal-pagamento');
  if (event.target === modal) {
    fecharModalPagamento();
  }
};