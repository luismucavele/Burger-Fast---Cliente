function abrirModal() {
  document.getElementById('modalPerfil').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modalPerfil').style.display = 'none';
}

// Upload de foto de perfil
const inputUpload = document.querySelector('.input-upload');
const imagemPerfil = document.querySelector('.imagem-perfil');
const botaoUpload = document.querySelector('.icone-upload');

// Verifica se os elementos existem antes de adicionar os eventos
if (inputUpload && imagemPerfil && botaoUpload) {
  inputUpload.addEventListener('change', function () {
      if (this.files && this.files[0]) {
          const reader = new FileReader();
          reader.onload = function (e) {
              imagemPerfil.src = e.target.result; // Atualiza a imagem de perfil
          };
          reader.readAsDataURL(this.files[0]);
      }
  });

  botaoUpload.addEventListener('click', function () {
      inputUpload.click(); // Simula o clique no input de upload
  });
} else {
  console.error("Elementos necessários para o upload de foto não foram encontrados.");
}