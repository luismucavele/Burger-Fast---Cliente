document.addEventListener('DOMContentLoaded', function () {
  const cliente = JSON.parse(localStorage.getItem('cliente'));

  if (cliente) {
      // Preenche os campos com os dados do cliente
      document.querySelector('input[placeholder="Nome Completo"]').value = cliente.nome;
      document.querySelector('input[placeholder="Seu Email"]').value = cliente.email;
      document.querySelector('input[placeholder="Seu Email"]').setAttribute('readonly', true); // Bloqueia o campo de e-mail

      if (cliente.celular) {
          document.querySelector('input[placeholder="Numero de telefone"]').value = cliente.celular;
      }

      if (cliente.endereco) {
          document.querySelector('input[placeholder="Endereço"]').value = cliente.endereco;
      }
  }

  // Atualiza os dados do cliente
  const atualizarButton = document.querySelector('.salvar-alteracoes');
  atualizarButton.addEventListener('click', async function (e) {
      e.preventDefault();

      const nome = document.querySelector('input[placeholder="Nome Completo"]').value;
      const celular = document.querySelector('input[placeholder="Numero de telefone"]').value;
      const endereco = document.querySelector('input[placeholder="Endereço"]').value;

      try {
          const response = await fetch('http://localhost:3000/api/atualizar-cliente', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  email: cliente.email, // O e-mail é usado como identificador
                  nome,
                  celular,
                  endereco
              })
          });

          const data = await response.json();
          if (response.ok) {
              alert(data.message); // Exibe mensagem de sucesso
              // Atualiza os dados no localStorage
              cliente.nome = nome;
              cliente.celular = celular;
              cliente.endereco = endereco;
              localStorage.setItem('cliente', JSON.stringify(cliente));
          } else {
              alert(data.error); // Exibe mensagem de erro
          }
      } catch (error) {
          console.error('Erro ao atualizar os dados:', error);
          alert('Erro ao atualizar os dados. Tente novamente mais tarde.');
      }
  });
});


//Sair da conta 
// Função para deslogar o cliente
document.querySelector('.sair-conta').addEventListener('click', function (e) {
  e.preventDefault();

  // Remove os dados do cliente do localStorage
  localStorage.removeItem('cliente');

  // Redireciona para a tela de menu
  window.location.href = 'menu.html';
});