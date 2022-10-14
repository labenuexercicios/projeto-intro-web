carro1={
    nome:"golf gti",
    link:"https://www.vw.com/en/models/golf-gti.html",
    ano: 2022,
    temTurbo: true,
    modelosDisponiveis:["Gti", "tsi", "tdi"],
    imagem:"./midia/polo.png"
}
carro2 ={
    nome:"amarok",
    link:"https://www.vw.com.br/pt/carros/amarok.html",
    ano:2008,
    temTurbo:true,
    modelosDisponiveis:["Cxl", "Exl", "Lxl"],
    imagem:"./midia/amarok.png"
}
carro3 ={
    nome:"virtus",
    link:"https://www.vw.com.br/pt/carros/virtus.html",
    ano:2002,
    temTurbo:true,
    modelosDisponiveis:["Sti", "Tsi", "Exl"],
    imagem:"./midia/virtus.png"
}
carro4 ={
    nome:"tcross",
    link:"https://www.vw.com.br/pt/carros/t-cross.html",
    ano:2002,
    temTurbo:true,
    modelosDisponiveis:["Sti", "Tsi", "Exl"],
    imagem:"./midia/tcross.png"
}
carro5 ={
    nome:"uno",
    link:"https://www.webmotors.com.br/carros/estoque/fiat/uno",
    ano:1991,
    temTurbo:false,
    modelosDisponiveis:["Evo", "Flex"],
    imagem:"./midia/tcross.png"
}

const mediaDosCarros = () =>{
    let soma = carro1.ano+carro2.ano+carro3.ano+carro4.ano+carro5.ano
    console.log("A média entre os carros é:",soma/5)
}
mediaDosCarros()

const verificaTemTurbo = () => {
    let verifica = carro1.temTurbo && carro2.temTurbo && carro3.temTurbo && carro4.temTurbo && carro5.temTurbo
    console.log("Todos os carros tem turbo?", verifica)

}
verificaTemTurbo()


const arrayDeObjCarro = [] //Array de objetos principal
const adicionaTemTurboArray = (objeto) =>{  //função que adiciona os carros que tem a propriedade temTurbo === true
    if(objeto.temTurbo){
        arrayDeObjCarro.push(objeto)
    }
    else{
        alert(`O carro ${objeto.nome} não foi adicionado`)
    }
}
adicionaTemTurboArray(carro1)
adicionaTemTurboArray(carro2)
adicionaTemTurboArray(carro3)
adicionaTemTurboArray(carro4)
adicionaTemTurboArray(carro5)

const concatenaObjeto = (array) =>{  //função que concatena o objeto e faz o relatorio no console.log
    for(let i in array){
        let str = ``
        for(j of array[i].modelosDisponiveis){
            str += `${j}` + "," 
        }
        console.log(`Nome: ${array[i].nome.toUpperCase()} \nAno: ${array[i].ano}\nTem turbo? ${array[i].temTurbo}\nModelos Disponíveis: ${str}`);
    }
}
concatenaObjeto(arrayDeObjCarro)


//---------------------------------------------------//
//MANIPULANDO OS ARQUIVOS HTML - DOM
//---------------------------------------------------//

//---------------------HEADER---------------------//

function exibeHeader(){
    const header = document.querySelector("header")
    const divHeader = document.createElement("div")
    const a = document.createElement("a")
    divHeader.setAttribute("id", "container-header")
    header.appendChild(divHeader)
    divHeader.appendChild(a)
    a.setAttribute("href", "index.html")
    a.innerHTML = "Projeto Dev Web"    

}
exibeHeader()

//----------------------------------------------//

//---------------------MAIN---------------------//
const main = document.querySelector("main")

//---------------------BARRA DE PESQUISA---------------------//
function exibeBarraDePesquisa() {
    const sectionPesquisa = document.createElement("section")
    const inputPesquisa = document.createElement("input")
    const buttonPesquisa = document.createElement("button")
    // appendChild
    main.appendChild(sectionPesquisa)
    sectionPesquisa.appendChild(inputPesquisa)
    sectionPesquisa.appendChild(buttonPesquisa)
    //settAtribute
    sectionPesquisa.setAttribute("id", "container-busca")
    inputPesquisa.setAttribute("type", "text")  
    inputPesquisa.setAttribute("placeholder", "Pesquisa aqui")
    inputPesquisa.setAttribute("id", "lugarDeBusca")
    buttonPesquisa.setAttribute("onclick", "botao(event)")
    buttonPesquisa.setAttribute("id", "botaoDeBusca")
    //innerHtml
    buttonPesquisa.innerHTML = "Pesquisar"
}

exibeBarraDePesquisa()



//---------------------CONTEUDO PRINCIPAL---------------------//

const containerPrincipal = document.createElement("section")
containerPrincipal.setAttribute("id", "container-principal")
main.appendChild(containerPrincipal)

function criaSection(indice) { //funcão criaSection para facilitar a criação de cards 
    const card = document.createElement("section")
    const cardConteudo = document.createElement("section")
    const cardConteudoFrente = document.createElement("figure")
    const cardConteudoTraseira = document.createElement("section")

    //APPENDCHILDS DAS DIVS PRINCIPAIS
    cardConteudo.appendChild(cardConteudoFrente)
    cardConteudo.appendChild(cardConteudoTraseira)
    card.appendChild(cardConteudo)
    containerPrincipal.appendChild(card)

    //SETTATRIBUTTE
    
    card.setAttribute("id", "card")
    cardConteudo.setAttribute("id", "card-conteudo")
    cardConteudoFrente.classList.add("card-conteudo-frente")
    cardConteudoTraseira.classList.add("card-conteudo-traseira")

    //ADICIONANDO ELEMENTOS AO CONTEUDO FRENTE
    const titulo = document.createElement("h2")
    const img = document.createElement("img")
    titulo.classList.add("titulo-conteudo-frente")
    cardConteudoFrente.appendChild(titulo)
    cardConteudoFrente.appendChild(img)
    titulo.innerHTML = arrayDeObjCarro[indice].nome.toUpperCase()
    img.src= arrayDeObjCarro[indice].imagem

    //ADICIONANDO ELEMENTOS AO CONTEUDO TRASEIRA
    const ul = document.createElement("ul")
    const li1 = document.createElement("li")
    const a = document.createElement("a")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")
    const li4 = document.createElement("li")

    a.setAttribute("href",arrayDeObjCarro[indice].link)
    a.setAttribute("target", "_blank")


    a.innerHTML += arrayDeObjCarro[indice].nome.toUpperCase()
    li2.innerHTML += `Ano: ${arrayDeObjCarro[indice].ano}`
    li3.innerHTML += `Tem Turbo: ${arrayDeObjCarro[indice].temTurbo}`
    li4.innerHTML += `Modelos Disponiveis: ${arrayDeObjCarro[indice].modelosDisponiveis}`

    li1.appendChild(a)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    cardConteudoTraseira.appendChild(ul)
}

for(let i = 0; i < arrayDeObjCarro.length;  i++){ //laço feito para auxiliar a contagem de quantos cards precisam ser feitos
    criaSection(i)
}

//---------------------FOOTER---------------------//
function exibeFooter(){
    const footer = document.querySelector("footer")
    const section = document.createElement("section")
    section.setAttribute("id","container-footer")
    main.appendChild(section)
    const p = document.createElement("p")
    const a = document.createElement("a")

    p.classList.add("footer")
    a.classList.add("footer")
    a.setAttribute("href", "https://github.com/leoh3nrique")

    p.innerHTML = "Criado por Leonardo Henrique"
    a.innerHTML = "Github"

    section.appendChild(p)
    section.appendChild(a)
    footer.appendChild(section)
}

exibeFooter()

//-----------------------------------------//


//AS DUAS FUNCTIONS QUE FILTRAM O ARRAY DE OBJETOS E COM A BARRA DE PESQUISA, EXIBE SO O CONTEUDO PESQUISADO//SEMANA 6 E 12

function callbackBotao(string,arrayDeObj){
    let filter = arrayDeObj.filter((elem )=>{
        return elem.nome === string
    })

    if(filter.length === 0){
        alert('Nenhum item foi encontrado')
    }

    return (filter[0])
}

function botao(event){
    event.preventDefault()
    const textoABuscar = document.getElementById("lugarDeBusca")
   
    let filtrarCarros = callbackBotao(textoABuscar.value, arrayDeObjCarro)
    console.log(filtrarCarros)
    if(filtrarCarros === undefined){
        alert("Pesquise novamente")
    }
    if(filtrarCarros.nome){

        const sectionPrincipal = document.getElementById("container-principal").remove()

        const containerPrincipal = document.createElement("section")
        containerPrincipal.setAttribute("id", "container-principal")
        main.appendChild(containerPrincipal)


        
        const card = document.createElement("section")
        const cardConteudo = document.createElement("section")
        const cardConteudoFrente = document.createElement("figure")
        const cardConteudoTraseira = document.createElement("section")
    
        //APPENDCHILDS DAS DIVS PRINCIPAIS
        cardConteudo.appendChild(cardConteudoFrente)
        cardConteudo.appendChild(cardConteudoTraseira)
        card.appendChild(cardConteudo)
        containerPrincipal.appendChild(card)
        
    
        //SETTATRIBUTTE
        
        card.setAttribute("id", "card")
        cardConteudo.setAttribute("id", "card-conteudo")
        cardConteudoFrente.classList.add("card-conteudo-frente")
        cardConteudoTraseira.classList.add("card-conteudo-traseira")
    
        //ADICIONANDO ELEMENTOS AO CONTEUDO FRENTE
        const titulo = document.createElement("h2")
        const img = document.createElement("img")
        titulo.classList.add("titulo-conteudo-frente")
        cardConteudoFrente.appendChild(titulo)
        cardConteudoFrente.appendChild(img)
        titulo.innerHTML = filtrarCarros.nome.toUpperCase()
        img.src= filtrarCarros.imagem
    
        //ADICIONANDO ELEMENTOS AO CONTEUDO TRASEIRA
        const ul = document.createElement("ul")
        const li1 = document.createElement("li")
        const a = document.createElement("a")
        const li2 = document.createElement("li")
        const li3 = document.createElement("li")
        const li4 = document.createElement("li")
    
        a.setAttribute("href",filtrarCarros.link)
        a.setAttribute("target", "_blank")
    
    
        a.innerHTML += filtrarCarros.nome.toUpperCase()
        li2.innerHTML += `Ano: ${filtrarCarros.ano}`
        li3.innerHTML += `Tem Turbo: ${filtrarCarros.temTurbo}`
        li4.innerHTML += `Modelos Disponiveis: ${filtrarCarros.modelosDisponiveis}`
    
        li1.appendChild(a)
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        cardConteudoTraseira.appendChild(ul)
     
    }
   
}

        

       


        
  

