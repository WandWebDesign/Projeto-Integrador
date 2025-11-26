document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinho();
});

function carregarCarrinho() {
    const container = document.querySelector('.container-carrinho');
    
    // 1. Pega os dados do LocalStorage
    let pedidos = JSON.parse(localStorage.getItem('pedidosPadaria')) || [];

    // 2. Limpa o container antes de desenhar
    container.innerHTML = '';

    // --- CRIAR O CABEÇALHO DA SEÇÃO (Título + Botões) ---
    const headerSection = document.createElement('div');
    headerSection.className = 'header-agendados';
    
    headerSection.innerHTML = `
        <div>
            <h2>📦 Meus Agendamentos</h2>
            <p style="color: #666; margin-top: 5px;">Apresente o código na retirada.</p>
        </div>
        <div style="display: flex; gap: 10px;">
            ${pedidos.length > 0 ? '<button onclick="limparHistorico()" class="voltar-compras" style="background-color: #ff6b6b;">Limpar Tudo</button>' : ''}
            <a href="padaria-landingpage.html" class="voltar-compras">Voltar ao Início</a>
        </div>
    `;
    container.appendChild(headerSection);

    // --- VERIFICA SE ESTÁ VAZIO ---
    if (pedidos.length === 0) {
        const mensagemVazio = document.createElement('div');
        mensagemVazio.style.textAlign = 'center';
        mensagemVazio.style.padding = '50px 0';
        
        // AQUI ESTÁ A MUDANÇA NO LINK (HREF)
        mensagemVazio.innerHTML = `
            <img src="./Imagens Secundarias/Pão.svg" style="width: 80px; opacity: 0.5; margin-bottom: 20px;">
            <h3 style="color: #666;">Você ainda não tem pedidos agendados.</h3>
            
            <a href="pagina-catalogo.html?filtro=retiravel" class="botao-comprar" style="width: 200px; margin: 20px auto; text-align:center;">
                Fazer um pedido
            </a>
        `;
        container.appendChild(mensagemVazio);
        return;
    }

    // --- CRIAR A GRID DE PRODUTOS ---
    const listaProdutos = document.createElement('div');
    listaProdutos.className = 'lista-produtos-agendados'; // Classe do seu CSS

    // Inverte a ordem para mostrar o mais recente primeiro
    pedidos.reverse().forEach((pedido, index) => {
        // Como invertemos o array visualmente, precisamos calcular o índice original para deletar corretamente
        const indexOriginal = pedidos.length - 1 - index;

        const card = document.createElement('div');
        card.className = 'card-agendado'; // Classe do seu CSS

        // HTML do Card usando sua estrutura
        // HTML do Card ATUALIZADO
        card.innerHTML = `
            <img src="${pedido.imagem}" alt="${pedido.produto}" class="imagem-placeholder">
            
            <div class="card-agendado-body">
                <div class="card-agendado-header">
                    <span><strong>CÓD:</strong> ${pedido.id}</span>
                    <button class="remover-item" onclick="removerItem(${indexOriginal})" title="Remover pedido">✕</button>
                </div>

                <div class="card-agendado-info">
                    <h5>Agendado em: ${pedido.dataPedido}</h5>
                    <h4>${pedido.produto}</h4>
                    <span class="preco">${pedido.total}</span>
                    
                    <div class="info-group">
                        <div class="campo-info">
                            <strong>Qtd:</strong> <span>${pedido.quantidade}</span>
                        </div>
                        <div class="campo-info">
                            <strong>Retirada:</strong> <span>${pedido.dataRetirada}</span>
                        </div>
                        <div class="campo-info">
                            <strong>Pagamento:</strong> <span>${pedido.pagamento}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        listaProdutos.appendChild(card);
    });

    container.appendChild(listaProdutos);
}

// --- FUNÇÃO PARA REMOVER UM ÚNICO ITEM ---
function removerItem(index) {
    // Adicionamos a confirmação aqui
    if (confirm("Tem certeza que quer cancelar este pedido?")) {
        let pedidos = JSON.parse(localStorage.getItem('pedidosPadaria')) || [];
        
        // Remove o item pelo índice
        pedidos.splice(index, 1);
        
        // Atualiza o localStorage
        localStorage.setItem('pedidosPadaria', JSON.stringify(pedidos));
        
        // Recarrega a tela para atualizar a lista
        carregarCarrinho();
    }
}

// --- FUNÇÃO PARA LIMPAR TUDO ---
function limparHistorico() {
    if(confirm("Tem certeza que deseja apagar todo o histórico de agendamentos?")) {
        localStorage.removeItem('pedidosPadaria');
        carregarCarrinho();
    }
}
