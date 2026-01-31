const usuarioLogado = localStorage.getItem('usuarioLogado');

if (!usuarioLogado) {
    window.location.href = 'login.html';
} else {
    const usuario = JSON.parse(usuarioLogado);

    const welcome = document.querySelector('.welcome');
    welcome.textContent = `Bem-vindo, ${usuario.username}!`;
}

async function carregarGatinho() {
    try {
        const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
        const dados = await resposta.json();

        const img = document.getElementById('cat-img');
        img.src = dados[0].url;
    } catch (erro) {
        console.error('Erro ao carregar a imagem do gatinho 🐱:', erro);
    }
}

carregarGatinho();