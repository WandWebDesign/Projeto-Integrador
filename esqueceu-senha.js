document.addEventListener('DOMContentLoaded', () => {

    // 1. Pegar os elementos do HTML com os quais vamos trabalhar
    const form = document.querySelector('.form-esqueceu');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmar-senha');
    const mensagemErroEl = document.getElementById('mensagem-erro');

    // 2. Adicionar um "escutador" para o evento de envio do formulário
    form.addEventListener('submit', (event) => {
        // event.preventDefault() é MUITO IMPORTANTE!
        // Ele impede que a página recarregue ao clicar em "Salvar",
        // permitindo que nosso JavaScript faça a validação primeiro.
        event.preventDefault();

        // Limpa mensagens de erro antigas antes de uma nova validação
        mensagemErroEl.textContent = '';
        mensagemErroEl.style.color = '#f00000'; // Mensagem de erro na cor vermelha

        // 3. Pegar os valores digitados pelo usuário
        const senha = senhaInput.value;
        const confirmarSenha = confirmarSenhaInput.value;

        // 4. Iniciar as validações

        // Validação 1: A senha tem pelo menos 8 caracteres?
        if (senha.length < 8) {
            mensagemErroEl.textContent = 'A senha deve ter no mínimo 8 caracteres.';
            return; // Para a execução aqui se a validação falhar
        }

        // Validação 2: As senhas digitadas são iguais?
        if (senha !== confirmarSenha) {
            mensagemErroEl.textContent = 'As senhas não coincidem. Tente novamente.';
            return; // Para a execução aqui se a validação falhar
        }

        console.log('Validação bem-sucedida! Enviando para o servidor...');

        window.location.href = 'padaria-login.html';
    });
});
