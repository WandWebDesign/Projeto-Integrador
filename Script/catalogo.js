/* ================================================= */
/* CONFIGURAÇÃO INICIAL E DADOS             */
/* ================================================= */

// 1. Pegar AMBOS os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const setorAtual = urlParams.get("setor");   // Ex: "padaria" ou null
const filtroAtual = urlParams.get("filtro"); // Ex: "ofertas" ou null

// 2. LISTA COMPLETA DE PRODUTOS
//    (Com a propriedade 'tags' adicionada)
const produtos = {


    //OS PRINCIPAIS POIS SÃO OS RETIRAVEIS
    //SE UM PRODUTO FOR RETIRAVEL E TIVER UMA OFERTA APLICAVEL COLOQUE AS TAGS JUNTAS
    //tags: ["oferta", "retiravel"] // <-- CORRETO: as duas tags no mesmo array


    //RETIRAVEIS vvvv//
    pãofrances: {
        tituloproduto: "Pão Francês",
        imagem: "/Imagens/PãoFrances.webp",
        preco: "16,90",
        precoOferta: "15,90 / Kg",
        setor: "padaria", 
        tags: ["oferta", "retiravel"],
    },
    pãodequeijo: {
        tituloproduto: "Pão de Queijo",
        imagem: "/Imagens/Pão de Queijo .webp",
        preco: "3,00 / Un",
        precoOferta: null,
        setor: "padaria", 
        tags: ["retiravel"] 
    },
    coxinhadefrango: {
        tituloproduto: "Coxinha de Frango",
        imagem: "Imagens/Coxinha de Frango .webp",
        preco: "8,50 / Un",
        precoOferta: null,
        setor: "padaria", 
        tags: ["retiravel"] 
    },
    pãodeleite: {
        tituloproduto: "Pão de Leite",
        imagem: "/Imagens/Pão de Leite .webp",
        preco: "22,90 / Kg",
        precoOferta: null,
        setor: "padaria", 
        tags: ["retiravel"]
    },
    esfirradecarne: {
        tituloproduto: "Esfirra de Carne",
        imagem: "/Imagens/Esfirra de Carne.webp",
        preco: "8,50",
        precoOferta: null,
        setor: "padaria", 
        tags: ["retiravel"]
    },
    mussarela: {
        tituloproduto: "Mussarela",
        imagem: "/Imagens/Mussarela.webp",
        preco: "5,99 / 100g",
        precoOferta: null,
        setor: "acougue", 
        tags: ["retiravel"]
    },
    mortandela: { 
        tituloproduto: "Mortadela",
        imagem: "/Imagens Secundarias/mortandela 1.webp",
        preco: "5,99 / 100g",
        precoOferta: null,
        setor: "acougue", 
        tags: ["retiravel"]
    },
    presunto: {
        tituloproduto: "Presunto Fatiado",
        imagem: "/Imagens Secundarias/presunto 1.png",
        preco: "5,49 / 100g",
        precoOferta: null,
        setor: "acougue", 
        tags: ["retiravel"] 
    },
    bolodefuba: {
        tituloproduto: "Bolo de Fubá - R$7,50 Fatia",
        imagem: "/Imagens/Bolo de fubá.webp",
        preco: "45,00 / Un",
        precoOferta: null,
        setor: "padaria", 
        tags: ["retiravel"] 
    },
    bolodemilho: {
        tituloproduto: "Bolo de Milho - R$7,50 Fatia",
        imagem: "/Imagens Secundarias/bolo de milho 2.webp",
        preco: "45,00 / Un",
        precoOferta: null,
        setor: "padaria", 
        tags: ["retiravel"] 
    },

    // O RESTANTE DOS PRODUTOS - OS QUE NÃO FORAM CITADOS ACIMA //

    //----------PADARIA----------//
    mistoquente: {
        tituloproduto: "Misto Quente",
        imagem: "./Imagens/MistoQuente.jpg",
        preco: "7,00 / Un",
        precoOferta: null,
        setor: "padaria", 
        tags: null
    },

     sonhodecreme: {
        tituloproduto: "Sonho de Creme",
        imagem: "./Imagens/Sonho de Creme.webp",
        preco: "20,00 / Un",
        precoOferta: null,
        setor: "padaria", 
        tags: null
    },

    tortadefrango: {
        tituloproduto: "Torta de Frango",
        imagem: "./Imagens/TortaDefrango.webp",
        preco: "20,00 / Un",
        precoOferta: null,
        setor: "padaria", 
        tags: null
    },

    //----------AÇOUGUE--------//
    coxasobrecoxa: {
        tituloproduto: "Coxa e Sobrecoxa de Frango",
        imagem: "./Imagens/Coxa de Frango.webp",
        preco: "14,99 / Kg",
        precoOferta: "10,99 / Kg",
        setor: "acougue", 
        tags: ["oferta"]
    },

    linguiçatoscana: {
        tituloproduto: "Linguiça Toscana Sadia",
        imagem: "./Imagens/Linguiça Toscada Sadia.webp",
        preco: "29,90 / Kg",
        precoOferta: "23,90 / Kg",
        setor: "acougue", 
        tags: ["oferta"]
    },

    acembovino: {
        tituloproduto: "Acém Bovino Moído",
        imagem: "./Imagens/Acém Bovino.webp",
        preco: "32,90 / Kg",
        precoOferta: null,
        setor: "acougue", 
        tags: null
    },

    patinhobovino: {
        tituloproduto: "Patinho Bovino em Bife",
        imagem: "./Imagens/Patinho Bife.webp",
        preco: "42,90 / Kg",
        precoOferta: null,
        setor: "acougue", 
        tags: null
    },

    cotrafile: {
        tituloproduto: "ContraFilé",
        imagem: "./Imagens/Contrafile.webp",
        preco: "54,90 / Kg",
        precoOferta: "49,90",
        setor: "acougue", 
        tags: ["oferta"]
    },

    bistecasuina: {
        tituloproduto: "Bisteca Suína",
        imagem: "./Imagens/Bisteca Suina.webp",
        preco: "24,90 / Kg",
        precoOferta: null,
        setor: "acougue", 
          tags: null
    },

    baconempedaço: {
        tituloproduto: "Bacon em Pedaço",
        imagem: "./Imagens/Bacon.webp",
        preco: "44,90 / Kg",
        precoOferta: null,
        setor: "acougue", 
          tags: null
    },

    salsicha: {
        tituloproduto: "Salsicha (Perdigão)",
        imagem: "./Imagens/Salsicha perdigão.webp",
        preco: "17,90 / Kg",
        precoOferta: null,
        setor: "acougue", 
          tags: null
    },

    lomvbosuino: {
        tituloproduto: "Lombo Suíno",
        imagem: "./Imagens/Lombo Suino.jpg",
        preco: "29,90 / Kg",
        precoOferta: null,
        setor: "acougue", 
          tags: null
    },

    //----------HORTIFRUTI--------//
    batatalavada: {
        tituloproduto: "Batata Lavada",
        imagem: "./Imagens/Batata Lavada.webp",
        preco: "3,99 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

    cenoura: {
        tituloproduto: "Cenoura",
        imagem: "./Imagens/Cenoura.webp",
        preco: "6,99 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

    cebola: {
        tituloproduto: "Cebola",
        imagem: "./Imagens/Cebola.webp",
        preco: "7,99 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

    tomatedébora: {
        tituloproduto: "Tomate Débora",
        imagem: "./Imagens/Tomate Débora.webp",
        preco: "8,99 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

    alfacecrespa: {
        tituloproduto: "Alface Crespa",
        imagem: "./Imagens/Alface Crespa.webp",
        preco: "3,99 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

    alho: {
        tituloproduto: "Alho",
        imagem: "./Imagens/Alho.webp",
        preco: "3,50 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

    bananananica: {
        tituloproduto: "Banana Nanica",
        imagem: "./Imagens/Banana Nanica.webp",
        preco: "5,49 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

    maçagala: {
        tituloproduto: "Maçã Gala",
        imagem: "./Imagens/Maça Gala.webp",
        preco: "11,90 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

     laranjapera: {
        tituloproduto: "Laranja Pera",
        imagem: "./Imagens/Laranja.webp",
        preco: "4,99 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

    ovosbrancos: {
        tituloproduto: "Ovos Brancos",
        imagem: "./Imagens/Ovos Brancos.webp",
        preco: "12,99 / Kg",
        precoOferta: null,
        setor: "hortifruti", 
        tags: null
    },

    //----------MERCADO--------//
    arrozagulha: {
        tituloproduto: "Arroz Agulhinha Tipo 1 Camil (5Kg)",
        imagem: "./Imagens/Arroz Camil.webp",
        preco: "24,90 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

    feijaocarioca: {
        tituloproduto: "Feijão Carioca (1Kg)",
        imagem: "./Imagens/Feijão Carioca.webp",
        preco: "9,99 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

    açucarrefinado: {
        tituloproduto: "Açúcar Refinado (1Kg)",
        imagem: "./Imagens/Açucar Refinado.webp",
        preco: "5,49 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

    cafeempotradicional: {
        tituloproduto: "Café em Pó Tradicional (500g)",
        imagem: "./Imagens/Café Tradicional jpg.jpg",
        preco: "18,90 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

    leiteintegral: {
        tituloproduto: "Leite Integral (1L)",
        imagem: "./Imagens/Leite Integral.webp",
        preco: "5,99 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

    biscoitorecheado: {
        tituloproduto: "Biscoito Recheado (Pacote)",
        imagem: "./Imagens/Biscoito Recheado .webp",
        preco: "3,99 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

    macaraoespaquete: {
        tituloproduto: "Macarrão Espaguete (500g)",
        imagem: "./Imagens/Macarrão.webp",
        preco: "4,79 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

     detergenteliquido: {
        tituloproduto: "Detergente Líquido Ypê (500ml)",
        imagem: "./Imagens/Detergente.webp",
        preco: "2,99 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

    raçaoparacaes: {
        tituloproduto: "Ração para Cães Adultos (1Kg)",
        imagem: "./Imagens/Ração para cachorro.jpeg",
        preco: "21,90 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

    aguasanitaria: {
        tituloproduto: "Água Sanitária (1L)",
        imagem: "./Imagens/Candida.webp",
        preco: "4,79 / Kg",
        precoOferta: null,
        setor: "mercado", 
        tags: null
    },

};


// 3. Pegar os elementos do HTML
const containerProdutos = document.getElementById("container-produtos");
const tituloSetor = document.getElementById("titulo-setor");
const barraBusca = document.getElementById("barra-busca");

// Variável para guardar os produtos filtrados (pela URL) para a barra de busca usar
let produtosFiltradosInicialmente = [];

/* ================================================= */
/* FUNÇÕES AUXILIARES                   */
/* ================================================= */

/**
 * Deixa a primeira letra de uma string maiúscula.
 * @param {string} str - A string para capitalizar.
 */
function capitalizar(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Remove acentos e diacríticos de uma string.
 * Ex: "Pão" -> "Pao"
 * @param {string} str - A string para normalizar.
 */
function removerAcentos(str) {
    if (!str) return "";
    return str.normalize("NFD") // Separa o caractere base (ex: 'a') do acento (ex: '~')
            .replace(/[\u0300-\u036f]/g, ""); // Remove todos os acentos (diacríticos)
}

/**
 * Renderiza (cria e mostra) os cards de produto no HTML.
 * @param {Array} listaDeProdutos - A lista de produtos a ser mostrada.
 */
function renderizarProdutos(listaDeProdutos) {
    // 1. Limpa o container antes de adicionar novos cards
    containerProdutos.innerHTML = "";

    // 2. Verifica se a lista está vazia
    if (listaDeProdutos.length === 0) {
        if (barraBusca.value === "") {
            // Se a busca está vazia, a culpa é do filtro da URL
            containerProdutos.innerHTML = "<p>Nenhum produto encontrado com estes filtros.</p>";
        } else {
            // Se a busca tem texto, a culpa é da busca
            containerProdutos.innerHTML = "<p>Nenhum produto encontrado com esse nome.</p>";
        }
        return; // Para a execução da função
    }

    // 3. Cria e adiciona cada card
    //    (listaDeProdutos é um array [ [id, produto], [id, produto], ... ])
    listaDeProdutos.forEach(([id, produto]) => {
        // (Assumindo que sua página de produto individual se chama 'produto.html')
        const cardHTML = `
            <a href="produto.html?id=${id}" class="card-produto">
                <img src="${produto.imagem}" alt="${produto.tituloproduto}">
                <h3>${produto.tituloproduto}</h3>
            </a>
        `;
        
        containerProdutos.innerHTML += cardHTML;
    });
}

// vvvv ÚNICA FUNÇÃO ALTERADA vvvv

/**
 * Renderiza (cria e mostra) os cards de produto no HTML.
 * @param {Array} listaDeProdutos - A lista de produtos a ser mostrada.
 */
function renderizarProdutos(listaDeProdutos) {
    containerProdutos.innerHTML = ""; // Limpa o container

    if (listaDeProdutos.length === 0) {
        if (barraBusca.value === "") {
            containerProdutos.innerHTML = "<p>Nenhum produto encontrado com estes filtros.</p>";
        } else {
            containerProdutos.innerHTML = "<p>Nenhum produto encontrado com esse nome.</p>";
        }
        return;
    }

    // Para cada produto na lista...
    listaDeProdutos.forEach(([id, produto]) => {
        
        // --- 1. LÓGICA DO PREÇO ---
        let precoHTML = "";
        
        // Se tiver precoOferta (e ele não for null/vazio)
        if (produto.precoOferta) {
            precoHTML = `
                <div class="card-precos">
                    <span class="preco-antigo">R$ ${produto.preco}</span>
                    <span class="preco-oferta">R$ ${produto.precoOferta}</span>
                </div>
            `;
        } 
        // Se não tem oferta, mas tem o preço normal
        else if (produto.preco) {
            precoHTML = `
                <div class="card-precos">
                    <span class="preco-normal">R$ ${produto.preco}</span>
                </div>
            `;
        }
        // (Se não tiver nenhum preço, o precoHTML ficará vazio "")

        
        // --- 2. LÓGICA DO BOTÃO ---
        let botaoHTML = ""; 
        if (produto.tags && produto.tags.includes("retiravel")) {
            botaoHTML = `<a href="pagina-agendamento.html?id=${id}" class="btn-agendar">Agendar</a>`;
        }

        // --- 3. MONTAGEM DO CARD ---
        // Adicionamos a variável ${precoHTML} abaixo do <h3>
        const cardCompletoHTML = `
            <div class="card-container">
                <a href="produto.html?id=${id}" class="card-produto">
                    <img src="${produto.imagem}" alt="${produto.tituloproduto}">
                    <h3>${produto.tituloproduto}</h3>
                    ${precoHTML} 
                </a>
                
                ${botaoHTML} 
            </div>
        `;
        
        containerProdutos.innerHTML += cardCompletoHTML;
    });
}

    // vvvv ESTE BLOCO FOI REMOVIDO vvvv
    // O 'addEventListener' não é mais necessário,
    // pois o <a> (link) cuida da navegação.
    /* document.querySelectorAll('.btn-agendar').forEach(botao => {
        botao.addEventListener('click', (event) => {
            // ... código do alert removido ...
        });
    });
    */
    // ^^^^ ESTE BLOCO FOI REMOVIDO ^^^^

// ^^^^ ÚNICA FUNÇÃO ALTERADA ^^^^
/* ================================================= */
/* EXECUÇÃO PRINCIPAL (AO CARREGAR)        */
/* ================================================= */

// Verifica se há *algum* parâmetro para filtrar (setor OU filtro)
if (setorAtual || filtroAtual) {

    // --- LÓGICA DO TÍTULO ATUALIZADA ---
    let tituloPagina = "";
    if (setorAtual) {
        tituloPagina = capitalizar(setorAtual); // Ex: "Padaria"
    }
    if (filtroAtual) {
        const filtroCapitalizado = capitalizar(filtroAtual); // Ex: "Ofertas"
        
        // Se tem setor: "Padaria (Ofertas)"
        // Se não tem setor: "Ofertas"
        tituloPagina = tituloPagina ? `${tituloPagina} (${filtroCapitalizado})` : filtroCapitalizado;
    }
    tituloSetor.innerText = tituloPagina;


    // --- LÓGICA DE FILTRO INICIAL (BASEADA NA URL) ---
    const listaCompleta = Object.entries(produtos);

    produtosFiltradosInicialmente = listaCompleta.filter(([id, produto]) => {
        
        // Condição 1: Filtro de Setor
        let setorMatch = true; // Começa como verdadeiro (passa por padrão)
        if (setorAtual) {
            // Se um setor foi pedido, o produto DEVE ser desse setor
            setorMatch = (produto.setor === setorAtual);
        }

        // Condição 2: Filtro de Tag (ex: "ofertas")
        let filtroMatch = true; // Começa como verdadeiro (passa por padrão)
        if (filtroAtual) {
            // Se um filtro foi pedido, o produto DEVE ter a tag
            // (Verifica se 'produto.tags' existe E se inclui a tag da URL)
            filtroMatch = (produto.tags && produto.tags.includes(filtroAtual));
        }

        // O produto só aparece se AMBAS as condições forem verdadeiras
        return setorMatch && filtroMatch;
    });


    // ETAPA 2: MOSTRAR OS PRODUTOS FILTRADOS INICIALMENTE
    renderizarProdutos(produtosFiltradosInicialmente);

    
    // ETAPA 3: ADICIONAR O FILTRO DA BARRA DE BUSCA
    barraBusca.addEventListener("input", () => {
        // 1. Pega o termo da busca, põe em minúsculo E remove acentos
        const termoBusca = removerAcentos(barraBusca.value.toLowerCase());

        // Filtra a lista 'produtosFiltradosInicialmente' (que já foi filtrada por setor/oferta)
        const produtosFiltradosPelaBusca = produtosFiltradosInicialmente.filter(([id, produto]) => {
            
            // 2. Pega o título do produto, põe em minúsculo E remove acentos
            const tituloNormalizado = removerAcentos(produto.tituloproduto.toLowerCase());
            
            // 3. Compara as duas strings "limpas"
            return tituloNormalizado.includes(termoBusca);
        });

        // 4. Mostra na tela apenas os produtos que passaram no filtro da busca
        renderizarProdutos(produtosFiltradosPelaBusca);
    });

} else {
    // Se alguém acessar 'setor.html' sem NENHUM parâmetro
    tituloSetor.innerText = "Nenhum filtro aplicado";
    containerProdutos.innerHTML = "<p>Por favor, selecione um setor ou filtro.</p>";
    barraBusca.style.display = 'none'; // Esconde a barra de busca
}



