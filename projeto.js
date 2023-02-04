FrutaA = {
    imagem: "./imagens/abacate.jpg",
    nome: "ABACATE",
    peso: "1 unidade",
    preco: 6.39,
    saborDoce: true,
    marca: ["Rocha", " Antunes"],
}

FrutaB = {
    imagem: "./imagens/abacaxi.jpg",
    nome: "ABACAXI",
    peso: "1 unidade",
    preco: 10.49,
    saborDoce: true,
    marca: ["Faria", " Agco"],
}

FrutaC = {
    imagem: "./imagens/banana.jpg",
    nome: "BANANA CATURRA",
    peso: "500 gramas",
    preco: 3.99,
    saborDoce: true,
    marca: ["Deere", " CNH"],
}

FrutaD = {
    imagem: "./imagens/bergamota.jpg",
    nome: "BERGAMOTA",
    peso: "500 gramas",
    preco: 3.99,
    saborDoce: true,
    marca: ["Farming", " Claas"],
}

FrutaE = {
    imagem: "./imagens/goiaba.jpg",
    nome: "GOIABA",
    peso: "500 gramas",
    preco: 6.19,
    saborDoce: true,
    marca: ["Igu", " Masso"],
}

FrutaF = {
    imagem: "./imagens/laranja.jpg",
    nome: "LARANJA",
    peso: "500 gramas",
    preco: 2.99,
    saborDoce: true,
    marca: ["Toshi", " Holland"],
}

FrutaG = {
    imagem: "./imagens/limao.jpg",
    nome: "LIMÃO",
    peso: "500 gramas",
    preco: 5.89,
    saborDoce: false,
    marca: ["Massei", " Ferro"],
}

FrutaH = {
    imagem: "./imagens/maca.jpg",
    nome: "MAÇÃ",
    peso: "500 gramas",
    preco: 5.29,
    saborDoce: true,
    marca: ["Hurli", " Silva"],
}

FrutaI = {
    imagem: "./imagens/mamao.jpg",
    nome: "MAMÃO",
    peso: "1 unidade",
    preco: 7.89,
    saborDoce: true,
    marca: ["Green", " Santo"],
}

FrutaJ = {
    imagem: "./imagens/manga.jpg",
    nome: "MANGA",
    peso: "1 unidade",
    preco: 6.59,
    saborDoce: true,
    marca: ["Costa", " Antunes"],
}

FrutaK = {
    imagem: "./imagens/maracuja.jpg",
    nome: "MARACUJÁ DOCE",
    peso: "500 gramas",
    preco: 8.89,
    saborDoce: true,
    marca: ["Arturo", " Iha"],
}

FrutaL = {
    imagem: "./imagens/pera.jpg",
    nome: "PÊRA",
    peso: "500 gramas",
    preco: 9.15,
    saborDoce: true,
    marca: ["Afo", " Noxx"],
}

FrutaM = {
    imagem: "./imagens/uva.jpg",
    nome: "UVA",
    peso: "500 gramas",
    preco: 8.57,
    saborDoce: true,
    marca: ["Roxo", " Meira"],
}

//média dos preços:

let mediaPreco = (FrutaA.preco + FrutaB.preco + FrutaC.preco + FrutaD.preco + FrutaE.preco + FrutaF.preco + FrutaG.preco + FrutaH.preco + FrutaI.preco + FrutaJ.preco + FrutaK.preco + FrutaL.preco + FrutaM.preco)/13
console.log(`A média dos preços das frutas é de: ${mediaPreco.toFixed(2)} reais.`);


let cestaFruta = [FrutaA, FrutaB, FrutaC, FrutaD, FrutaE, FrutaF, FrutaG, FrutaH, FrutaI, FrutaJ, FrutaK, FrutaL, FrutaM]

for (let i in cestaFruta) {
    cestaFruta[i].marca = cestaFruta[i].marca.toString()
}

//impressão de relatório:
console.log(cestaFruta);

//verificação do valor booleano:
if (FrutaA.saborDoce) {
    console.log(`A fruta ${FrutaA.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaA.nome.toLowerCase()} não é doce!`)
}
if (FrutaB.saborDoce) {
    console.log(`A fruta ${FrutaB.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaB.nome.toLowerCase()} não é doce!`)
}
if (FrutaC.saborDoce) {
    console.log(`A fruta ${FrutaC.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaC.nome.toLowerCase()} não é doce!`)
}
if (FrutaD.saborDoce) {
    console.log(`A fruta ${FrutaD.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaD.nome.toLowerCase()} não é doce!`)
}
if (FrutaE.saborDoce) {
    console.log(`A fruta ${FrutaE.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaE.nome.toLowerCase()} não é doce!`)
}
if (FrutaF.saborDoce) {
    console.log(`A fruta ${FrutaF.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaF.nome.toLowerCase()} não é doce!`)
}
if (FrutaG.saborDoce) {
    console.log(`A fruta ${FrutaG.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaG.nome.toLowerCase()} não é doce!`)
}
if (FrutaH.saborDoce) {
    console.log(`A fruta ${FrutaH.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaH.nome.toLowerCase()} não é doce!`)
}
if (FrutaI.saborDoce) {
    console.log(`A fruta ${FrutaI.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaI.nome.toLowerCase()} não é doce!`)
}
if (FrutaJ.saborDoce) {
    console.log(`A fruta ${FrutaJ.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaJ.nome.toLowerCase()} não é doce!`)
}
if (FrutaK.saborDoce) {
    console.log(`A fruta ${FrutaK.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaK.nome.toLowerCase()} não é doce!`)
}
if (FrutaL.saborDoce) {
    console.log(`A fruta ${FrutaL.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaL.nome.toLowerCase()} não é doce!`)
}
if (FrutaM.saborDoce) {
    console.log(`A fruta ${FrutaM.nome.toLowerCase()} é doce!`)
} else {
    console.log(`A fruta ${FrutaM.nome.toLowerCase()} não é doce!`)
}

// let novaCestaArray = [...cestaFruta]

novaCestaArray = document.querySelector(".conteudo");

cestaFruta.filter(p => {
    function listarCesta() {
        novaCestaArray.innerHTML += `
        <section class="item">
        <ul class="item-descricao">
            <img src="${p.imagem}" alt="imagem da fruta" height="80" widht="80">
            <div class="fruta">
                <p>${p.nome}</p>
                <p>${p.peso}</p>
                <p>R$ ${p.preco}</p>
                <p>Sabor doce: ${p.saborDoce}</p>
                <p>Marcas: ${p.marca}</p>
                <button id="botao-compra" onclick="comprarItem()">Comprar</button>
            </div>
        </ul>
        </section>`
    }
    listarCesta()
})

function buscarFruta(event) {
    event.preventDefault()
    let novaCesta = document.getElementById("selecao")
    let nomeFruta = document.getElementById("buscador").value.toLocaleUpperCase()
    if (nomeFruta === "") {
        alert("Sua busca está vazia!")
        document.getElementById("buscador").value = " ";
        return;
    }
    for (let i = 0; i < cestaFruta.length; i++) {
        if (nomeFruta === cestaFruta[i].nome) {
            return (novaCesta.innerHTML) = `
        <section class="item">
        <ul class="item-descricao">
            <img src="${cestaFruta[i].imagem}" alt="imagem da fruta" height="80" widht="80">
            <div class="fruta">
                <p>${cestaFruta[i].nome}</p>
                <p>${cestaFruta[i].peso}</p>
                <p>R$ ${cestaFruta[i].preco}</p>
                <p>Sabor doce: ${cestaFruta[i].saborDoce}</p>
                <p>Marcas: ${cestaFruta[i].marca}</p>
                <button id="botao-compra" onclick="comprarItem()">Comprar</button>
            </div>
        </ul>
    </section>`
        }
    }

    alert("Não foi encontrado o seu item!")
    document.getElementById("buscador").value = "";
    return;
};

function comprarItem() {
    alert("Adicionado ao carrinho!")
}

retornarHome = () =>{
    location.reload()
}