const form = document.getElementById('login-form');
const feedback = document.getElementById('feedback-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtém os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Cria uma variável para armazenar os usuários
    let usuarios;

    // Carrega os usuários salvos do localStorage
    const usuariosSalvos = localStorage.getItem('usuarios');

    // Verifica se há usuários salvos
    if (usuariosSalvos) {
        usuarios = JSON.parse(usuariosSalvos);
    } else {
        usuarios = [];
    }

    // Valida as credenciais username e password
    const usuarioValido = usuarios.some(function (user) {
        return user.username === username && user.password === password;
    });


    // Se as credenciais forem válidas, redireciona para a página inicial
    const usuarioEncontrado = usuarios.find(function (user) {
        return user.username === username && user.password === password;
    });
    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        window.location.href = 'home.html';
    } else {
        feedback.textContent = 'Nome de usuário ou senha inválidos.';
        feedback.style.color = 'red';
    }
})