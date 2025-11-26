/*BARRA DE SCROLL DE PRODUTOS--------------------------------------------*/

// A função que faz a mágica acontecer para um carrossel específico
function inicializarCarrossel(seletorCarrossel) {

    // Seleciona o elemento principal do carrossel (ex: #carrossel-padaria)
    const carrossel = document.querySelector(seletorCarrossel);

    // Se o carrossel não existir na página, a gente para por aqui
    if (!carrossel) {
        return;
    }

    // Agora, selecionamos os elementos DENTRO do carrossel específico
    const conjunto = carrossel.querySelector('.carrossel-conjunto');
    const antesBtn = carrossel.querySelector('.botao-antes');
    const proxBtn = carrossel.querySelector('.botao-depois');
    const primeiroCard = conjunto.querySelector('.card-produtos');

    // Se não houver cards, não há o que fazer
    if (!primeiroCard) {
        return;
    }

    // Pega a largura de um item individual (card + margem)
    const itemWidth = primeiroCard.offsetWidth + 20; // Assumindo 10px de margem de cada lado

    // Função para rolar para o próximo item
    proxBtn.addEventListener('click', () => {
        // Verifica se chegou ao final do carrossel
        if (conjunto.scrollLeft + conjunto.clientWidth + 1 >= conjunto.scrollWidth) {
            // Se sim, volta para o início com suavidade
            conjunto.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Se não, avança a largura de um item
            conjunto.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
    });

    // Função para rolar para o item anterior
    antesBtn.addEventListener('click', () => {
        // Verifica se está no início do carrossel
        if (conjunto.scrollLeft === 0) {
            // Se sim, vai para o final com suavidade
            conjunto.scrollTo({ left: conjunto.scrollWidth, behavior: 'smooth' });
        } else {
            // Se não, volta a largura de um item
            conjunto.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        }
    });
}

// Quando a página carregar, inicialize cada um dos seus carrosséis
document.addEventListener('DOMContentLoaded', () => {
    inicializarCarrossel('#carrossel-peça-e-retire');
    inicializarCarrossel('#carrossel-ofertas');
    inicializarCarrossel('#carrossel-padaria')
    inicializarCarrossel('#carrossel-açougue')
    inicializarCarrossel('#carrossel-hortifruti')
    inicializarCarrossel('#carrossel-mercado')

});
