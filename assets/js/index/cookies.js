let msgcookie = document.getElementById('cookies-msg');

function aceito() {
  localStorage.lgpd = "sim";
  msgcookie.classList.remove("mostrar");
}

if (localStorage.lgpd == "sim") {
  msgcookie.classList.remove("mostrar");
} else {
  msgcookie.classList.add("mostrar");
}


function recusado() {
  document.getElementById('cookies-msg').style.display = 'none';
}
