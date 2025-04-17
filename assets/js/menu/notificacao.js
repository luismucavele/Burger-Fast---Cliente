document.addEventListener('DOMContentLoaded', function () {
    const notifications = document.querySelector(".notifications");

    // Detalhes das notificações
    const toastDetails = {
        timer: 3000, // Tempo de exibição (5 segundos)
        success: {
            icon: 'fa-circle-check',
            text: 'Produto adicionado ao carrinho!',
        },
        error: {
            icon: 'fa-circle-xmark',
            text: 'Erro ao adicionar o produto.',
        },
    };

    // Função para remover a notificação
    const removeToast = (toast) => {
        toast.classList.add("hide");
        if (toast.timeoutId) clearTimeout(toast.timeoutId); // Limpa o timeout
        setTimeout(() => toast.remove(), 500); // Remove o toast após 500ms
    };

    // Função para criar uma notificação
    const createToast = (id) => {
        const { icon, text } = toastDetails[id]; // Obtém os detalhes da notificação
        const toast = document.createElement("li"); // Cria um novo elemento 'li'
        toast.className = `toast ${id}`; // Define as classes do toast
        toast.innerHTML = `
            <div class="column">
                <i class="fa-solid ${icon}"></i>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
        `;
        notifications.appendChild(toast); // Adiciona o toast à lista de notificações
        toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer); // Remove o toast após o tempo definido
    };

    // Delegação de eventos para capturar cliques em botões dinâmicos
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("botao-adicionar")) {
            createToast("success"); // Cria a notificação de sucesso
        }
    });
});