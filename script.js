const bebidasComFruta = [] 
//const somarPrecos = (bebidas[0].preco+bebidas[1].preco+bebidas[2].preco+bebidas[3].preco+bebidas[4].preco+bebidas[5].preco)/6
const obj1 = {   
    nome: "Pinã colada",
    preco: 23,
    temFruta: false,
    ingredientes: ["rum", "suco de abacaxi", "leite de coco", "leite condensado", "gelo"],
    imagem:"https://i.pinimg.com/originals/8e/13/d9/8e13d983b2e4f860207e4ca22d473155.gif",
    site:"https://drinquepedia.com/drinques/historias/284"
}
const obj2 = {
    nome: "Caipirinha",
    preco: 12,
    temFruta: true,
    ingredientes: ["limão", "açucar", "gelo", "cachaça"],
    imagem:"https://media4.giphy.com/media/XEezfHTttBmnA0PGHs/200w.gif?cid=82a1493b1xl1cit2qht4ndwi4ebb665wmkpv39kkgljaxxks&rid=200w.gif&ct=g",
    site:"https://drinquepedia.com/drinques/historias/146"
}
const obj3 = {
    nome: "Italiana",
    preco: 22,
    temFruta: false,
    ingredientes: ["vinho", "gelo", "leite condensado", "vodka"],
    imagem:"https://c.tenor.com/PJt2lC5nWgcAAAAC/cherry-cocktail.gif",
    site:"http://www.italialegal.com.br/conheca-a-historia-do-spritz-o-drink-mais-famoso-da-italia/"
}
const obj4 = {
    nome: "Cosmopolitan",
    preco: 35,
    temFruta: true,
    ingredientes: ["vodka", "limão", "suco de cramberry", "licor de laranja", "gelo"],
    imagem:"https://thumbs.gfycat.com/ElatedAngryAntlion-size_restricted.gif",
    site:"https://www.revistalide.com.br/noticias/gastronomia/cosmopolitan-a-historia-do-jovem-classico-americano"
}
const obj5 = {
    nome: "Mojito",
    preco: 15,
    temFruta: true,
    ingredientes: ["limão", "açucar", "hortelã", "rum branco", "gelo", "água com gás"],
    imagem:"https://c.tenor.com/ATv9w8xVipsAAAAC/mojito-bresil.gif",
    site:"https://drinquepedia.com/drinques/historias/24"
}
const obj6 = {
    nome: "Bloody Marry",
    preco: 26,
    temFruta: false,
    ingredientes: ["vodka", "suco de tomate", "suco de limão", "molho inglês", "tabaco", "pimenta"],
    imagem:"https://media0.giphy.com/media/3o7qDWGHo2bhut6ReE/200w.gif?cid=82a1493b1tdeclkoarcoejw9c3jl1vdp5we39q6ajpdkdicz&rid=200w.gif&ct=g",
    site:"https://saberhortifruti.com.br/bloody-mary-a-lenda-e-o-drink/"
}

let bebidas = []
bebidas.push(obj1,obj2,obj3,obj4,obj5,obj6)
//console.log(bebidas)

for (let i =0;i<bebidas.length; i++){
    if(bebidas[i].temFruta===true){
        bebidasComFruta.push(bebidas[i])
    }
}

for(let i=0;i< bebidas.length;i++){
    console.log(bebidas[i].ingredientes.toString())  
}


function bebidasRelatorio(objeto){
    console.log(`Nome:${objeto.nome.toUpperCase()}\nPreço:${objeto.preco}\nTem Fruta?${objeto.temFruta ?"sim":"não"}\nQuais os Ingredientes?${objeto.ingredientes}\n`)
}
for (let i=0;i<bebidas.length;i++){
    bebidasRelatorio(bebidas[i]);
};


function buscarBebidas (bebidas){
    const nome = prompt("Digite o nome do seu drink").toUpperCase()
    let objeto = bebidas.filter(
        bebida=>{
            return bebida.nome.toUpperCase().includes(nome)
        }
    )
    if(objeto.length===0){
        alert("item não encontrado!")
    }else{
        console.log("Achouuu!!!!")
        return objeto
    }
}
//buscarBebidas(bebidas)


function criarCard (obj){
    const card = document.createElement("div")
    const imgProd = document.createElement("img")
    const nomeProd = document.createElement("a")
    const dados = document.createElement("ul")
    const preco = document.createElement("li")
    const fruta = document.createElement("li")
    const ingredientes = document.createElement("li")

    imgProd.src = obj.imagem
    nomeProd.innerText = obj.nome
    nomeProd.href = obj.site
    nomeProd.target = "_blank"
    preco.innerText = `Preço : R$${obj.preco}`
    fruta.innerText = `Tem fruta? ${obj.temFruta? "Sim" : "Não"}`
    ingredientes.innerText = `Ingredientes: ${obj.ingredientes.toString(" ")}`

    card.className = "card"
    dados.className = "texto"
     
    dados.append(nomeProd, preco, fruta, ingredientes)
    card.append(imgProd, dados)

    return card
}

function renderizarProds (list) {
    const secaoProds = document.getElementById("secaoProds")
    secaoProds.innerHTML = ""
    console.log(list)

    list.forEach(produto => {
        const cardProdCriado = criarCard(produto)
        secaoProds.appendChild(cardProdCriado)
    })
}

renderizarProds(bebidas)

function pesquisarBebidas() {
    const inputPesquisa = document.getElementById("txtBusca")
    const botaoPesquisa = document.getElementById("btnBusca")

    botaoPesquisa.addEventListener("click", () => {
        const valor = inputPesquisa.value
        
        const filtro = bebidas.filter(produto => produto.nome === valor)
        console.log(filtro)
        
        if(filtro.length) {
            renderizarProds(filtro)
        } else {
            renderizarProds(bebidas)
            alert("Produto não encontrado")
        }
    })
}

pesquisarBebidas()


