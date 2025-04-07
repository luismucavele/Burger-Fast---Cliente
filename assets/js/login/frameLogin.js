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

function validateRegister() {
    if (!validateInput('name', 'nameError', val => val.length >= 8)) return;
    if (!validateInput('email', 'emailError', val => val.includes('@'))) return;
    alert("Cadastro realizado com sucesso!");
}

function validateLogin() {
    if (!validateInput('loginEmail', 'loginEmailError', val => val.includes('@'))) return;
    alert("Login realizado com sucesso!");
}