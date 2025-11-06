
document.querySelector('.form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (email !== '' && senha !== '') {
        // Campos preenchidos corretamente → redireciona
        window.location.href = 'padaria-landingpage.html';
    } else {
        // Caso contrário → mostra alerta (ou poderia exibir uma mensagem na tela)
        alert('Por favor, preencha todos os campos antes de entrar.');
    }
})
