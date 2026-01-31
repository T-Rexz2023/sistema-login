const form = document.getElementById('register-form');
const feedback = document.getElementById('register-feedback');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Coletando os valores dos campos do formulário
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Limpando mensagens de feedback anteriores
    feedback.textContent = "";

    // Lógica para validar senhas
    if (password !== confirmPassword) {
        feedback.textContent = "As senhas são diferentes besta! Tenta de novo.";
        feedback.style.color = "red";
        return;
    }

    // Simulando o envio do formulário
    feedback.textContent = "Cadastro realizado com sucesso!";
    feedback.style.color = "green";

    // Para cadastro de usuários, vamos armazenar os dados no localStorage
    // Carregando usuários do localStorage
    let usuarios = localStorage.getItem('usuarios');

    if(usuarios) {
        usuarios = JSON.parse(usuarios);
    } else {
        usuarios = [];
    }

    // Verificando se o nome de usuário já existe
    const usuarioExiste = usuarios.some(function(user){
        return user.username === username;
    });

    if(usuarioExiste) {
        feedback.textContent = "Usuário já cadastrado!";
        feedback.style.color = "red";
        return;
    }

    // Adicionando novo usuário
    const novoUsuario = {
        username: username,
        email: email,
        password: password
    };

    // Salvando no localStorage
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    console.log(usuarios);
});

