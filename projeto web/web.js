
//brincos e colares// exer 1.2
const objeto1 = {
    id: 1,
    item: "BRINCO DE ROSTO",
    preco: 10,
    colar: false,
    estilo: ["prata", "artistico", "moderno"],
    imagem: `./imagens/Brinco-tr-s-dimensional-quebra-metade-do-rosto-pingente-personalidade-criativa-bronze-retr-tnico-acess-rios.jpg_Q90.jpg_.webp`
}

const objeto2 = {
    id: 2,
    item: "BRINCO DE OLHO",
    preco: 15,
    colar: false,
    estilo:["gotic", "creep", "dark"],
    imagem: "./imagens/Horr-vel-assustador-boneca-globo-ocular-brincos-com-terr-vel-piscando-a-o-esquisitos.jpg_Q90.jpg_.webp",
}
 
const objeto3 = {
    id: 3,
    item: "BRINCO DE PATO",
    preco: 5,
    colar: false,
    estilo: ["animais", "cute", "kawaii"],
    imagem: "./imagens/main_3_Adorável três cabeças de pato feminino brincos engraçado 3d esmalte pato pingente brincos moda jóias presente acessórios nova tendênci.png" ,
}
 
const objeto4 = {
    id: 4,
    item:  "COLAR DARK",
    preco: 10,
    colar: true,
    estilo: ["dark", "gotic", "metal"],
    imagem: "./imagens/main_5_Viking gothic lucifer satan bull cabeça pingente colar para homem retro personalidade criativa punk aço inoxidável animal jóia.png" ,
}

const objeto5 = {
    id: 4,
    item:  "CAMISA FAUSTANOS",
    preco: 30,
    colar: false,
    estilo: ["táPegandoFogoBicho"],
    imagem: "./imagens/D_NQ_NP_985950-MLB42172375739_062020-O.webp" ,
}

const objeto6 = {
    id: 4,
    item:  "COLAR COXINHA CROCANTE",
    preco: 20,
    colar: true,
    estilo: ["Frito", "Coxa"],
    imagem: "./imagens/Timlee-n088-colares-pingentes-frango-frito-com-asas-de-frango-joia-fashion-atacado.jpg_Q90.jpg_.webp" ,
}



const objetos = []

//poderia ser automatizado//

objetos.push(objeto1,objeto2,objeto3,objeto4,objeto5,objeto6)

console.log(objetos)
//exer1.3


const mediaP = (objeto1.preco+objeto2.preco+objeto3.preco+objeto4.preco+objeto5.preco+objeto6.preco)/objetos.length;
console.log(`a media de preço é ${mediaP}`)

//const verificarColar = colar1 && colar2 && colar3 && colar4
//console.log(verificarColar)


// exer 1.6

//console.log(item1,"R$"+preco1,colar1,estilo1)
//console.log(item2,"R$"+preco2,colar2,estilo2)
//console.log(item3,"R$"+preco3,colar3,estilo3)
//console.log(item4,"R$"+preco4,colar4,estilo4)

for (objeto in objetos) {
    console.log(`Nome item:` + objetos[objeto].item)
    console.log(`é colar? ` + objetos[objeto].colar)
    for (estilos in objetos[objeto].estilo){
        console.log(`Estilo:` + objetos[objeto].estilo[estilos])
    }
    console.log(`preço:` + objetos[objeto].preco)

}

//boleano - comparação, posso jogar isso pro header pra escolher os items.

const itemfiltro = (test) => {
    return test.colar === true
}
const colar = objetos.filter(itemfiltro)


console.log(colar)


/*
fazer função que recebe paramentro e string

function comparacao(objetos, string) {
    for(objeto in objetos) {
        if (string === objetos[objeto].item || string === objetos[objeto].estilo[objeto]){
            return console.log("nome combina com "+ objetos[objeto].item)
        } else {
            console.log(`não é ${objetos[objeto].item}`)
        }
    }
}

comparacao(objetos,"colar dark") //dois parametros - comparação
*/

///DOM 

const lista = document.querySelector("#painel")
let busca = document.querySelector("#Input")
let olho = document.querySelector("#olho")
let olho2 = document.querySelector("#olho2")
let somgrito = document.querySelector("#pe")
const listaB = []

function mudarCard() {
    
    const listaB = []
    for(objeto in objetos){
        if(busca.value.toUpperCase() == objetos[objeto].item){
            listaB.push(objetos[objeto])
        } else if ( busca.value.toUpperCase() == ""){
            return MostrarCard(objetos)
                 
        }
    }
    return MostrarCard(listaB)
    
}



busca.addEventListener("keyup", ({key}) => {
    if(key === "Enter"){
        mudarCard()
    }
})


function MostrarCard(objetos){
    let listagem = "";

    if (objetos.length <= 0) {
        listagem += `<div id="NotFound">Nenhum produto encontrado</div>
        <img id="zombie" src="./imagens/img_443557.png">`
        MostrarSom();
    } else {
        objetos.forEach((objeto) =>{
            listagem+=`
            <div id="b1" class="banner">
                <img src="${objeto.imagem}" id="produto1">
                <h2 id="nomeProduto1">${objeto.item}</h2>
                <p id="valor">VALOR: R$${objeto.preco}</p>
                <p id="estilo">${objeto.estilo}</p>
            </div>`
        })
    }
    lista.innerHTML = listagem;
}


MostrarCard(objetos)

function MostraOlho() {
    let ListaOlho = "";

    for (i=0; i < 6 ; i++) {
        ListaOlho += `<img src="./imagens/png-clipart-eye-balls-eyeball.png" alt="" id="footerFoto1">`
    }
  olho.innerHTML = ListaOlho;
}

MostraOlho()

function MostraOlho2() {
    let ListaOlho = "";

    for (i=0; i < 6; i++) {
        ListaOlho += `<img src="./imagens/png-clipart-eye-balls-eyeball.png" alt="" id="footerFoto1">`
    }
  olho2.innerHTML = ListaOlho;
}

MostraOlho2()

function MostrarSom(){
    let Som = "";
    somgrito.innerHTML += `<audio src="./efeito/gritos_de_zumbis_toquesengracadosmp3.com.mp3" autoplay></audio>`
    
}



//poderia usar Media Queries~~ porém não precisou~~ thks