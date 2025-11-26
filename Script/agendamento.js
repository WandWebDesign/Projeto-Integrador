/* ================================================= */
/* 1. FUNÇÕES AUXILIARES (CONVERSÃO DE PREÇO)        */
/* ================================================= */

function converterPrecoParaNumero(precoTexto) {
    if (!precoTexto) return 0;
    // Pega apenas o número antes da barra ou espaço (ex: "16,90 / Kg" -> "16,90")
    let apenasValor = precoTexto.split(' ')[0]; 
    // Troca vírgula por ponto para o cálculo matemático
    let valorComPonto = apenasValor.replace(',', '.');
    return parseFloat(valorComPonto);
}

/* ================================================= */
/* 2. DADOS DOS PRODUTOS (COM PREÇOS)                */
/* ================================================= */

const produtos = {
    // --- PADARIA ---
    pãofrances: {
        tituloproduto: "Pão Francês",
        imagem: "./Imagens/PãoFrances.webp",
        img1: "./Imagens Secundarias/PãoFrances 1.jpeg",
        img2: "./Imagens Secundarias/Pão Francês 2.jpeg",
        img3: "./Imagens Secundarias/Pão Francês 3.jpg",
        setor: "padaria",
        preco: "16,90 / Kg", 
        descricao: "Pão quentinho, feito na hora! Crocante por fora e macio por dentro.",
    },
    pãodequeijo: {
        tituloproduto: "Pão de Queijo",
        imagem: "./Imagens/Pão de Queijo .webp",
        img1: "./Imagens Secundarias/pão de queijo 1.webp",
        img2: "./Imagens Secundarias/pão de queijo 2.webp",
        img3: "./Imagens Secundarias/pão de queijo 3.webp",
        setor: "padaria",
        preco: "3,00 / Un", 
        descricao: "Irresistível aroma e sabor mineiro! Feito com polvilho e queijo de qualidade.",
    },
    coxinhadefrango: {
        tituloproduto: "Coxinha de Frango",
        imagem: "./Imagens/Coxinha de Frango .webp",
        img1: "./Imagens Secundarias/coxinha de frango 1.jpeg",
        img2: "./Imagens Secundarias/coxinha de frango 2.webp",
        img3: "./Imagens Secundarias/coxinha de frango 3.jpg",
        setor: "padaria",
        preco: "8,50 / Un",
        descricao: "Delícia dourada e crocante! Recheada com frango temperado.",
    },
    pãodeleite: {
        tituloproduto: "Pão de Leite",
        imagem: "./Imagens/Pão de Leite .webp",
        img1: "./Imagens Secundarias/pao de leite 1.webp",
        img2: "./Imagens Secundarias/pao de leite 2.webp",
        img3: "./Imagens Secundarias/pao de leite 3.webp",
        setor: "padaria",
        preco: "22,90 / Kg",
        descricao: "Maciez e sabor que derretem na boca! Feito com leite e manteiga.",
    },
    esfirradecarne: {
        tituloproduto: "Esfirra de Carne",
        imagem: "./Imagens/Esfirra de Carne.webp",
        img1: "./Imagens Secundarias/esfirra de carne 1.webp",
        img2: "./Imagens Secundarias/esfirra de carne 2.jpg",
        img3: "./Imagens Secundarias/esfirra de carne 3.webp",
        setor: "padaria",
        preco: "8,50 / Un",
        descricao: "Sabor árabe com um toque brasileiro! Recheada com carne moída temperada.",
    },

    // --- FRIOS E OUTROS ---
    mussarela: {
        tituloproduto: "Mussarela",
        imagem: "./Imagens/Mussarela.webp",
        img1: "./Imagens Secundarias/mussarela 1.webp",
        img2: "./Imagens Secundarias/mussarela 2.jpg",
        img3: "./Imagens Secundarias/mussarela 3.jpeg",
        setor: "frios",
        preco: "5,99 / 100g",
        descricao: "Fresquinha e saborosa, derrete na boca! Rica em cálcio e proteínas.",
    },
    mortandela: {
        tituloproduto: "Mortadela",
        imagem: "./Imagens Secundarias/mortandela 1.webp",
        img1: "./Imagens/Mortandela.webp",
        img2: "./Imagens Secundarias/mortandela 2.jpg",
        img3: "./Imagens Secundarias/mortandela 3.webp",
        setor: "frios",
        preco: "5,99 / 100g",
        descricao: "Tradição e sabor em cada fatia! Clássica nos lanches de padaria.",
    },
    presunto: {
        tituloproduto: "Presunto",
        imagem: "./Imagens Secundarias/presunto 1.png",
        img1: "./Imagens/Presunto.webp",
        img2: "./Imagens Secundarias/presunto 2.webp",
        img3: "./Imagens Secundarias/presunto 3.jpg",
        setor: "frios",
        preco: "5,49 / 100g",
        descricao: "Fresco, leve e saboroso! O presunto é uma opção rica em proteínas.",
    },
    bolodefuba: {
        tituloproduto: "Bolo de Fubá",
        imagem: "./Imagens/Bolo de fubá.webp",
        img1: "./Imagens Secundarias/bolo de fuba 1.webp",
        img2: "./Imagens Secundarias/bolo de fuba 2.webp",
        img3: "./Imagens Secundarias/bolo de fuba 3.webp",
        setor: "padaria",
        preco: "45,00 / Un",
        descricao: "Cheirinho de casa e café passado na hora. Feito com fubá de milho.",
    },
    bolodemilho: {
        tituloproduto: "Bolo de Milho",
        imagem: "./Imagens Secundarias/bolo de milho 2.webp",
        img1: "./Imagens/Bolo de Milho.webp",
        img2: "./Imagens Secundarias/bolo de milho 1.webp",
        img3: "./Imagens Secundarias/bolo de milho 3.webp",
        setor: "padaria",
        preco: "45,00 / Un",
        descricao: "Sabor de fazenda em cada pedaço! Preparado com milho natural.",
    }
};

/* ================================================= */
/* 3. LÓGICA DE CARREGAMENTO DO PRODUTO              */
/* ================================================= */

const params = new URLSearchParams(window.location.search);
const produtoId = params.get("id");
const produtoSelecionado = produtos[produtoId];

let precoUnitarioAtual = 0; 

if (produtoSelecionado) {
    // Preenche textos e imagens
    document.getElementById("tituloproduto").innerText = produtoSelecionado.tituloproduto;
    document.getElementById("descricao").innerText = produtoSelecionado.descricao;
    document.getElementById("produtoimagem").src = produtoSelecionado.imagem;
    
    if(document.getElementById("img1")) document.getElementById("img1").src = produtoSelecionado.img1 || "";
    if(document.getElementById("img2")) document.getElementById("img2").src = produtoSelecionado.img2 || "";
    if(document.getElementById("img3")) document.getElementById("img3").src = produtoSelecionado.img3 || "";

    // Converte o preço
    precoUnitarioAtual = converterPrecoParaNumero(produtoSelecionado.preco);
    
} else {
    document.getElementById("tituloproduto").innerText = "Produto não encontrado";
    document.getElementById("descricao").innerText = "O produto não foi encontrado.";
    precoUnitarioAtual = 0;
}

/* ================================================= */
/* 4. LÓGICA DA CALCULADORA (QTD * PREÇO)            */
/* ================================================= */

const minusButton = document.getElementById('ret-btn');
const plusButton = document.getElementById('plus-btn');
const quantityDisplay = document.getElementById('Qtd');
const finalPriceDisplay = document.getElementById('preço-final');

let quantidadeAtual = 1;

function atualizarPrecoNaTela() {
    const valorTotal = quantidadeAtual * precoUnitarioAtual;

    const valorFormatado = valorTotal.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });
    
    quantityDisplay.textContent = quantidadeAtual;
    finalPriceDisplay.textContent = valorFormatado;
}

plusButton.addEventListener('click', () => {
    quantidadeAtual++;
    atualizarPrecoNaTela();
});

minusButton.addEventListener('click', () => {
    if (quantidadeAtual > 1) {
        quantidadeAtual--;
        atualizarPrecoNaTela();
    }
});

// Inicializa o preço na tela
atualizarPrecoNaTela();

/* ================================================= */
/* 5. FUNCIONALIDADE DO BOTÃO AGENDAR (COM POP-UP)   */
/* ================================================= */

const agendarBtn = document.querySelector('.botao-agendar');
const dataContainer = document.getElementById('data-picker-container');
const dataInput = document.getElementById('data-retirada');
const pagamentoContainer = document.getElementById('pagamento-container');

function gerarCodigoRetirada() {
    return Math.floor(100000 + Math.random() * 900000);
}

agendarBtn.addEventListener('click', () => {
    const dataVisivel = dataContainer.style.display === 'block';
    const pagamentoVisivel = pagamentoContainer.style.display === 'block';

    if (pagamentoVisivel) {
        // --- ETAPA 3: FINALIZAR E MOSTRAR POP-UP ---
        
        const formaPagamento = document.querySelector('input[name="pagamento"]:checked');

        if (!formaPagamento) {
            alert('Por favor, escolha uma forma de pagamento.');
            return;
        }

        // --- CORREÇÃO AQUI: Forma mais segura de pegar os dados ---
        
        // 1. Pega a data
        const dataSelecionada = dataInput.value;
        const dataFormatada = dataSelecionada ? dataSelecionada.split('-').reverse().join('/') : "Data inválida";
        
        // 2. Pega o nome e pagamento
        const nomeProduto = document.getElementById('tituloproduto').innerText; // Pega do título
        const pagamentoEscolhido = formaPagamento.value;
        const codigo = gerarCodigoRetirada();

        // 3. Pega Quantidade e Valor (USANDO TEXTCONTENT E TRIM PARA EVITAR ERROS)
        // Usamos a variável global 'quantidadeAtual' que é mais segura que ler o HTML
        const qtdFinal = quantidadeAtual; 
        // Lemos o preço e removemos espaços em branco extras
        const valorFinal = document.getElementById('preço-final').textContent.trim();

        // --- FIM DA COLETA DE DADOS ---

        // 4. Preencher o HTML do Modal com os dados
        // Usamos textContent que é mais rápido e compatível
        document.getElementById('display-codigo').textContent = codigo;
        document.getElementById('modal-produto').textContent = nomeProduto;
        document.getElementById('modal-qtd').textContent = qtdFinal;
        document.getElementById('modal-total').textContent = valorFinal;
        document.getElementById('modal-data').textContent = dataFormatada;
        document.getElementById('modal-pagamento').textContent = pagamentoEscolhido;

        // 5. Mostrar o Modal
        const modal = document.getElementById('modal-confirmacao');
        modal.style.display = 'flex';

        // 6. Botão para fechar
        document.getElementById('btn-fechar-modal').onclick = function() {
            modal.style.display = 'none';
            window.location.reload();
        };
    
    } else if (dataVisivel) {
        // --- ETAPA 2 ---
        if (!dataInput.value) {
            alert('Por favor, escolha uma data para a retirada.');
            return;
        }
        pagamentoContainer.style.display = 'block';
        agendarBtn.innerText = 'Confirmar Pagamento e Gerar Código';

    } else {
        // --- ETAPA 1 ---
        dataContainer.style.display = 'block';
        // Define data mínima como hoje
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const dia = String(hoje.getDate()).padStart(2, '0');
        dataInput.min = `${ano}-${mes}-${dia}`;
        
        agendarBtn.innerText = 'Selecionar Pagamento';
    }
});
