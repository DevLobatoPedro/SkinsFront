const email = document.getElementById('email');
const password = document.getElementById('password');
const enter = document.getElementById('enter')
const loginButton = document.getElementsByClassName('.login-button')

function redirectToIndex (){
  window.location.href = 'index.html';
}

function validade() {
    if (email.value.trim() !== "" && password.value.trim() !== "") {
      enter.disabled = false;
    } else {
      enter.disabled = true;
    }
  }

email.addEventListener('input',validade);
password.addEventListener('input',validade);


