/**
 * Finaliza a compra enviando o pedido para o backend.
 */
async function finalizarCompra() {
    const cliente = getClienteAtual();
    const itens = carregarCarrinhoCliente();

    if (!cliente || !cliente.email) {
        alert('Faça login antes de finalizar a compra');
        return;
    }
    if (itens.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/pedidos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                clienteEmail: cliente.email,
                nomeCliente: cliente.nome || '', // use nome se armazenado no login
                itens: itens,
                data: new Date().toISOString()
            })
        });

        const data = await response.json();
        if (response.ok) {
            limparCarrinhoCliente();
            alert('Pedido realizado com sucesso!');
            window.location.href = 'menu.html';  // ou para uma página de "meus pedidos"
        } else {
            alert('Erro ao finalizar pedido: ' + data.error);
        }
    } catch (e) {
        alert('Erro na comunicação com o servidor.');
    }
}