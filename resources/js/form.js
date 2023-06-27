const form = document.getElementById('form-center')
const filds = document.querySelectorAll('.required')

const checkbox = document.getElementById("checkbox");
const btn = document.getElementById("btn");
const nameInput = document.getElementById("nameInput");

function confirmForm() {
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const checkbox = document.getElementById('checkbox').checked;
  
    if (nome !== '' && email !== '' && cpf !== '' && password !== '' && confirmPassword !== '' && checkbox) {
      document.getElementById('btn').disabled = false; // Habilita o botão de envio
    } else {
      document.getElementById('btn').disabled = true; // Desabilita o botão de envio
    }
  }
  
  function redirectToIndex() {
    window.location.href = 'index.html'; // Redireciona para index.html
  }
  

