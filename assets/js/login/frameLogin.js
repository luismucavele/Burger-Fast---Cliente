function showRegister() {
    document.getElementById('registerContent').style.display = 'block';
    document.getElementById('loginContent').style.display = 'none';
    document.getElementById('registerTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
}

function showLogin() {
    document.getElementById('registerContent').style.display = 'none';
    document.getElementById('loginContent').style.display = 'block';
    document.getElementById('registerTab').classList.remove('active');
    document.getElementById('loginTab').classList.add('active');
}

function validateInput(inputId, errorId, condition) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (condition(input.value.trim())) {
        error.style.display = 'none';
        input.classList.remove('error-border');
        return true;
    } else {
        error.style.display = 'block';
        input.classList.add('error-border');
        return false;
    }
}


async function validateRegister() {
    if (!validateInput('name', 'nameError', val => val.length >= 8)) return;
    if (!validateInput('email', 'emailError', val => val.includes('@'))) return;

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email })
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message); // Exibe mensagem de sucesso
            showLogin(); // Alterna para a aba de login
        } else {
            alert(data.error); // Exibe mensagem de erro
        }
    } catch (error) {
        console.error('Erro ao registrar:', error);
        alert('Erro ao registrar. Tente novamente mais tarde.');
    }
}

async function validateLogin() {
    if (!validateInput('loginEmail', 'loginEmailError', val => val.includes('@'))) return;

    const email = document.getElementById('loginEmail').value;

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message); // Exibe mensagem de sucesso
            console.log('Cliente logado:', data.cliente); // Exibe os dados do cliente no console

            // Armazena os dados do cliente no localStorage
            localStorage.setItem('cliente', JSON.stringify(data.cliente));

            // Redireciona para o menu principal
            window.location.href = 'menu.html';
        } else {
            alert(data.error); // Exibe mensagem de erro
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Tente novamente mais tarde.');
    }
}

function logout() {
    limparCarrinhoCliente();
    localStorage.removeItem('cliente');
    window.location.href = 'login.html';
}