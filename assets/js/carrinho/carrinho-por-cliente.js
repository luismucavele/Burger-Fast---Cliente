/**
 * Funções utilitárias para manipular carrinho por cliente (localStorage)
 */
function getClienteAtual() {
    return JSON.parse(localStorage.getItem('cliente'));
}

function salvarCarrinhoCliente(itens) {
    const cliente = getClienteAtual();
    if (cliente && cliente.email) {
        localStorage.setItem('carrinho_' + cliente.email, JSON.stringify(itens));
    }
}

function carregarCarrinhoCliente() {
    const cliente = getClienteAtual();
    if (cliente && cliente.email) {
        return JSON.parse(localStorage.getItem('carrinho_' + cliente.email)) || [];
    }
    return [];
}

function limparCarrinhoCliente() {
    const cliente = getClienteAtual();
    if (cliente && cliente.email) {
        localStorage.removeItem('carrinho_' + cliente.email);
    }
}