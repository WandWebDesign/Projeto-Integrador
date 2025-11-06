// Espera todo o HTML ser carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona a barra de categorias
    const categoryMenu = document.querySelector(".menu-categorias");

    // Se a barra de categorias não existir nesta página, não faz nada
    if (!categoryMenu) {
        return;
    }

    let lastScrollTop = 0; // Armazena a última posição do scroll

    // Adiciona um "ouvinte" ao evento de scroll da janela
    window.addEventListener("scroll", function() {
        // Pega a posição atual do scroll vertical
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // SCROLL DOWN (Rolando para baixo)
            // Adiciona a classe que esconde o menu
            categoryMenu.classList.add("hidden-scroll");
        } else {
            // SCROLL UP (Rolando para cima)
            // Remove a classe, fazendo o menu reaparecer
            categoryMenu.classList.remove("hidden-scroll");
        }
        
        // Atualiza a última posição do scroll
        // A condição (<= 0) previne bugs em navegadores mobile (efeito "bounce")
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });
});