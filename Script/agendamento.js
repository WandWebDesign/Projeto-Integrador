/*PAGINA INDIVIDUAL DE COMPRA--------------MUDANÇA DOS PREÇOS-------------------*/
// --- CONFIGURAÇÃO ---
        // Defina o preço
        const PRECO_UNITARIO = 15.50;

        // --- LÓGICA DO CÓDIGO ---

        // 1. Seleciona os elementos do HTML com os quais vamos interagir
        const minusButton = document.getElementById('ret-btn');
        const plusButton = document.getElementById('plus-btn');
        const quantityDisplay = document.getElementById('Qtd');
        const finalPriceDisplay = document.getElementById('preço-final');

        // 2. Define o valor inicial da quantidade
        let quantidadeAtual = 1;

        // 3. Cria uma função para calcular e atualizar o preço na tela
        function atualizarPreco() {
            // Calcula o valor total
            const valorTotal = quantidadeAtual * PRECO_UNITARIO;

            // Formata o valor para o padrão brasileiro (R$ XX,XX)
            const valorFormatado = valorTotal.toLocaleString('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
            });
            
            // Atualiza os elementos na tela
            quantityDisplay.textContent = quantidadeAtual;
            finalPriceDisplay.textContent = valorFormatado;
        }

        // 4. Adiciona os "escutadores de eventos" aos botões
        
        // Quando o botão de mais (+) for clicado:
        plusButton.addEventListener('click', () => {
            quantidadeAtual++; // Aumenta a quantidade
            atualizarPreco(); // Chama a função para recalcular e mostrar o novo preço
        });

        // Quando o botão de menos (-) for clicado:
        minusButton.addEventListener('click', () => {
            // Impede que a quantidade seja menor que 1
            if (quantidadeAtual > 1) {
                quantidadeAtual--; // Diminui a quantidade
                atualizarPreco(); // Chama a função para recalcular e mostrar o novo preço
            }
        });

        // 5. Roda a função uma vez no início para mostrar o valor inicial
        atualizarPreco();
;
/*PAGINA INDIVIDUAL DE COMPRA--------------MUDANÇA DOS PREÇOS-------------------*/



/*PAGINA INDIVIDUAL DE COMPRA------------------------*/
 // Captura o parâmetro "id" da URL
            const listaprodutos = new URLSearchParams(window.location.search);
            const produtoId = listaprodutos.get("id");

            // Lista dos produtos da loja
            const produtos = {

                //Produtos Retiraveis
                pãofrances: {
                    tituloproduto: "Pão Francês",
                    imagem: "/Imagens/PãoFrances.webp",
                    img1: "/Imagens Secundarias/PãoFrances 1.jpeg",
                    img2: "/Imagens Secundarias/Pão Francês 2.jpeg",
                    img3: "/Imagens Secundarias/Pão Francês 3.jpg",
                    setor: "padaria", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Pão quentinho, feito na hora! \n Crocante por fora e macio por dentro, o pão francês é fonte de carboidratos que fornecem energia para o seu dia. Perfeito para acompanhar manteiga, requeijão ou aquele café fresquinho da manhã.",
                },

                pãodequeijo: {
                    tituloproduto: "Pão de Queijo",
                    imagem: "/Imagens/Pão de Queijo .webp",
                    img1: "/Imagens Secundarias/pão de queijo 1.webp",
                    img2: "/Imagens Secundarias/pão de queijo 2.webp",
                    img3: "/Imagens Secundarias/pão de queijo 3.webp",
                    setor: "padaria", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Irresistível aroma e sabor mineiro! \n Feito com polvilho e queijo de qualidade, é naturalmente sem glúten e cheio de sabor. Rico em cálcio e com textura leve, é ideal para o café da tarde ou um lanche rápido."
                },

                coxinhadefrango: {
                    tituloproduto: "Coxinha de Frango",
                    imagem: "Imagens/Coxinha de Frango .webp",
                    img1: "/Imagens Secundarias/coxinha de frango 1.jpeg",
                    img2: "/Imagens Secundarias/coxinha de frango 2.webp",
                    img3: "/Imagens Secundarias/coxinha de frango 3.jpg",
                    setor: "padaria", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Delícia dourada e crocante! \n Recheada com frango temperado e envolta em massa leve e sequinha, a coxinha é uma ótima fonte de proteínas e energia. Perfeita para matar a fome com muito sabor."
                },

                pãodeleite: {
                    tituloproduto: "Pão de Leite",
                    imagem: "/Imagens/Pão de Leite .webp",
                    img1: "/Imagens Secundarias/pao de leite 1.webp",
                    img2: "/Imagens Secundarias/pao de leite 2.webp",
                    img3: "/Imagens Secundarias/pao de leite 3.webp",
                    setor: "padaria", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Maciez e sabor que derretem na boca! \n Feito com leite e manteiga, o pão de leite é levemente adocicado e rico em cálcio. Ideal para acompanhar café, achocolatado ou ser recheado com frios."
                },

                esfirradecarne: {
                    tituloproduto: "Esfirra de Carne",
                    imagem: "/Imagens/Esfirra de Carne.webp",
                    img1: "/Imagens Secundarias/esfirra de carne 1.webp",
                    img2: "/Imagens Secundarias/esfirra de carne 2.jpg",
                    img3: "/Imagens Secundarias/esfirra de carne 3.webp",
                    setor: "padaria", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Sabor árabe com um toque brasileiro! \n Recheada com carne moída temperada e massa leve, é uma opção rica em proteínas e ferro. Uma combinação perfeita de nutrição e sabor caseiro."
                },

                mussarela: {
                    tituloproduto: "Mussarela",
                    imagem: "/Imagens/Mussarela.webp",
                    img1: "/Imagens Secundarias/mussarela 1.webp",
                    img2: "/Imagens Secundarias/mussarela 2.jpg",
                    img3: "/Imagens Secundarias/mussarela 3.jpeg",
                    setor: "frios", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Fresquinha e saborosa, derrete na boca! \n Rica em cálcio e proteínas, a mussarela é perfeita para rechear pães, sanduíches ou acompanhar bolos salgados. Combina nutrição e cremosidade em cada fatia."
                },

                 mortandela: {
                    tituloproduto: "Mortandela",
                    imagem: "/Imagens Secundarias/mortandela 1.webp",
                    img1: "/Imagens/Mortandela.webp",
                    img2: "/Imagens Secundarias/mortandela 2.jpg",
                    img3: "/Imagens Secundarias/mortandela 3.webp",
                    setor: "frios", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Tradição e sabor em cada fatia! \n Clássica nos lanches de padaria, a mortadela é fonte de proteínas e ferro. Fatiada fininha, traz aquele sabor marcante que todo mundo adora no pão francês."
                },

                presunto: {
                    tituloproduto: "Presunto",
                    imagem: "/Imagens Secundarias/presunto 1.png",
                    img1: "/Imagens/Presunto.webp",
                    img2: "/Imagens Secundarias/presunto 2.webp",
                    img3: "/Imagens Secundarias/presunto 3.jpg",
                    setor: "frios", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Fresco, leve e saboroso! \n O presunto é uma opção rica em proteínas magras e baixo teor de gordura. Ideal para sanduíches, mistos ou recheios de pães e salgados."
                },

                bolodefuba: {
                    tituloproduto: "Bolo de Fubá",
                    imagem: "/Imagens/Bolo de fubá.webp",
                    img1: "/Imagens Secundarias/bolo de fuba 1.webp",
                    img2: "/Imagens Secundarias/bolo de fuba 2.webp",
                    img3: "/Imagens Secundarias/bolo de fuba 3.webp",
                    setor: "padaria", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Cheirinho de casa e café passado na hora \n Feito com fubá de milho, ovos e leite, é fonte de energia e fibras. Um clássico das padarias, leve e saboroso, perfeito para acompanhar o café da tarde."
                },

                bolodemilho: {
                    tituloproduto: "Bolo de Milho",
                    imagem: "/Imagens Secundarias/bolo de milho 2.webp",
                    img1: "/Imagens/Bolo de Milho.webp",
                    img2: "/Imagens Secundarias/bolo de milho 1.webp",
                    img3: "/Imagens Secundarias/bolo de milho 3.webp",
                    setor: "frios", //<--Vai puxar isso na pagina dos Setores
                    descricao: "Sabor de fazenda em cada pedaço! \n Preparado com milho natural, leite e um toque de coco, é rico em fibras e vitaminas. Um bolo úmido, macio e cheio de sabor caseiro."
                },


            };

            const produto = produtos[produtoId];


            if (produto) {
                document.getElementById("tituloproduto").innerText = produto.tituloproduto;
                document.getElementById("descricao").innerText = produto.descricao;


                document.getElementById("produtoimagem").src = produto.imagem;
                document.getElementById("img1").src = produto.img1;
                document.getElementById("img2").src = produto.img2;
                document.getElementById("img3").src = produto.img3;

            } else {
                document.getElementById("tituloproduto").innerText = "Produto não encontrado";
                document.getElementById("descricao").innerText = "O produto que você está tentando acessar não existe ou não foi encontrado.";
            }

/*PAGINA INDIVIDUAL DE COMPRA------------------------*/       


/* FUNCIONALIDADE DO BOTÃO AGENDAR---------------------- */
/* ============================================ */
/* FUNCIONALIDADE DO BOTÃO AGENDAR (FLUXO DE 3 ETAPAS) */
/* ============================================ */

// 1. Selecionar os elementos que vamos usar
const agendarBtn = document.querySelector('.botao-agendar');
const dataContainer = document.getElementById('data-picker-container');
const dataInput = document.getElementById('data-retirada');
const pagamentoContainer = document.getElementById('pagamento-container');

// Função para gerar um código de retirada aleatório (6 dígitos)
function gerarCodigoRetirada() {
    // Gera um número entre 100000 e 999999
    return Math.floor(100000 + Math.random() * 900000);
}

// 2. Adicionar o 'escutador' de clique no botão
agendarBtn.addEventListener('click', () => {
    
    // 3. Verificar em qual etapa do fluxo estamos
    const dataVisivel = dataContainer.style.display === 'block';
    const pagamentoVisivel = pagamentoContainer.style.display === 'block';

    if (pagamentoVisivel) {
        // --- ETAPA 3: CONFIRMAR PAGAMENTO E GERAR CÓDIGO ---
        
        const formaPagamento = document.querySelector('input[name="pagamento"]:checked');

        if (!formaPagamento) {
            alert('Por favor, escolha uma forma de pagamento.');
            return; // Para a execução
        }

        // Todos os dados estão prontos!
        const dataSelecionada = dataInput.value;
        const nomeProduto = document.getElementById('tituloproduto').innerText;
        const quantidade = document.getElementById('Qtd').innerText;
        const dataFormatada = dataSelecionada.split('-').reverse().join('/');
        const pagamentoEscolhido = formaPagamento.value;
        
        // Gerar o código!
        const codigo = gerarCodigoRetirada();

        // Exibir a confirmação final
        alert(
`Agendamento Confirmado! 

Seu código de retirada é: ${codigo}

---
Detalhes do Pedido:
Produto: ${nomeProduto}
Quantidade: ${quantidade}
Data de Retirada: ${dataFormatada}
Pagamento: ${pagamentoEscolhido} (a ser efetuado na retirada)
---

Guarde seu código e apresente no caixa.`
        );

        // Resetar o formulário para o estado inicial
        dataContainer.style.display = 'none';
        pagamentoContainer.style.display = 'none';
        agendarBtn.innerText = 'Agendar';
        dataInput.value = '';
        
        // Desmarcar o radio button
        if(formaPagamento) formaPagamento.checked = false;


    } else if (dataVisivel) {
        // --- ETAPA 2: CONFIRMAR DATA E MOSTRAR PAGAMENTO ---
        
        const dataSelecionada = dataInput.value;
        
        if (!dataSelecionada) {
            alert('Por favor, escolha uma data para a retirada.');
            return; // Para a execução
        }

        // Mostrar o container de pagamento
        pagamentoContainer.style.display = 'block';
        // Mudar o texto do botão
        agendarBtn.innerText = 'Confirmar Pagamento e Gerar Código';

    } else {
        // --- ETAPA 1: MOSTRAR SELETOR DE DATA ---
        
        // 1. Mostra o container do seletor de data
        dataContainer.style.display = 'block';

        // 2. Define a data mínima como "hoje"
        const hoje = new Date().toISOString().split('T')[0];
        dataInput.min = hoje;

        // 3. Muda o texto do botão
        agendarBtn.innerText = 'Selecionar Pagamento';
    }
});
/* FUNCIONALIDADE DO BOTÃO AGENDAR---------------------- */
