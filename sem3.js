
//Primeiro Projeto com a graça de Deus
//const listaProdutos = []
const listaProdutos = [ // lista de produtos adicionados os produtos a uma array, onde cada produto é um
    
    

    // objeto
    {
        nome: "BRIGADEIRO",
        categoria: "docinho",
        estoque: false,
        valor: 2.50,
        ingredientes: ["Chocolate em pó", " Leite Condensado", " Chocolate Granulado"],
        imagem: "./img/brigadeiro2.jpg"
    },
    {
        nome: "CUPCAKE",
        categoria: "Bolos",
        estoque: true,
        valor: 4.5,
        ingredientes: ["Farinha de Trigo", " Açucar", " Fermento", " Chocolate"],
        imagem: "./img/cup4.jpg"
    },
    {
        nome: "CONE",
        categoria: "Cones",
        estoque: true,
        valor: 7,
        ingredientes: ["Cone", " Confete", " Ganache", " Leite em pó"],
        imagem: "./img/cone3.jpg"
    },
    {
        nome: "TRUFA",
        categoria: "Trufas",
        estoque: true,
        valor: 3,
        ingredientes: ["Chocolate", " Leite Condensado"],
        imagem: "./img/trufa.jpeg"
    },
    {
        nome: "BEIJINHO",
        categoria: "docinho",
        estoque: false,
        valor: 2.5,
        ingredientes: ["Leite Condensado", " Leite em pó", " coco granulado"],
        imagem: "./img/beijinho.jpg"
    },
    {
        nome: "NOZINHO",
        categoria: "panificados",
        estoque: false,
        valor: 8,
        ingredientes: ["Farinha de Trigo", "Óleo", "Açúcar", "Leite", "Ovo"],
        imagem: "./img/nozinho.jpeg"
    }
]
// checando se o produto constar em estoque é adicionado ao array
function checarEstoque(produtosLista) { // função que inclue no array produtosEmFalta os produtos em falta
    const produtosEmFalta = []
    for (i of produtosLista) {
        if (i.estoque !== true) {
            console.log(i.nome)
            produtosEmFalta.push(i.nome)
        }
    } return produtosEmFalta
}
//função para adicionar os produtos na página
{/* <div class="produtoListado"><img src="${listaProdutos[i].imagem}" /> </div> */}
const produtosGeral = document.querySelector('.produtosGeral')
function listarItens (){
    for(let i in listaProdutos){
    
         produtosGeral.innerHTML+=`
    <div class="produtoListado">
    <p>Nome: ${listaProdutos[i].nome}</p>
    <p>Categoria: ${listaProdutos[i].categoria}</p>
    
    <p>Ingredientes: ${listaProdutos[i].ingredientes}</p>
    <img src="${listaProdutos[i].imagem}"/>
    
    </div>
    `
    }
       
}

listarItens() //chamada da função para adicionar os produtos

const buscaDigitada2 = document.querySelector('#buscaDigitada')

let produtoDigitado
function buscaProdutos(){
     produtoDigitado = listaProdutos.filter(produto=>{
        //if(produto.nome.toLowerCase().includes(buscaDigitada2.value.toLowerCase())){
        if(buscaDigitada2.value.toLowerCase() === produto.nome.toLowerCase()){
            return produto
        }else{
            produtoNaoEncontrado()
        }
        
        })
        mostraProduto(produtoDigitado)
}

function mostraProduto(prodAExibir){
    const boxProdutoProcurado = document.querySelector('.produtoPesquisado')
    //console.log (prodAExibir[0].imagem)
    boxProdutoProcurado.innerHTML=`

    <div><img src="${prodAExibir[0].imagem}"/> </div>
    <div class="produto">
    <p>Nome: ${prodAExibir[0].nome[0]+prodAExibir[0].nome.substring(1).toLowerCase()}</p>
    <p>Categoria: ${prodAExibir[0].categoria}</p>
   
    <p>Ingredientes: ${prodAExibir[0].ingredientes}</p>
    </div>
    
    `
    }
    function produtoNaoEncontrado(){
        const prodNaoEncontrado = document.querySelector('.produtoPesquisado')
        prodNaoEncontrado.innerHTML=`
        <div class="produto">
        <p><h3>Que pena, não encontramos o que procura, </br>tem mais doces por ai, que tal refazer a busca? :)</h3></p>
        </div>
        `
    }


// comando para alterar para string os ingredientes
const alteraParaString = (arrayEnviado) => {
    let string = []
    for (i in arrayEnviado) {
        string.push(`${arrayEnviado[i].ingredientes.join(" ")}`)
        arrayEnviado[i].ingredientes = arrayEnviado[i].ingredientes.join()
    }
    return string

}
console.log(alteraParaString(listaProdutos)) 
console.log(listaProdutos) 
for (let i of listaProdutos) {
    console.log(i) 
}

for (let i in listaProdutos) {
    console.log(listaProdutos[i].nome.toUpperCase(), listaProdutos[i].categoria, listaProdutos[i].estoque, listaProdutos[i].valor, listaProdutos[i].ingredientes)
}

// Ex.03 recebe um array de objetos e transforma tudo em string
function objetoString (listaOjetosEnviada){
    let juntaTudo = " "
    for(let itens of listaOjetosEnviada){
        for(let k in itens){
            console.log(itens[k]) 
            juntaTudo += (itens[k] + " ")
        }
    }
    return juntaTudo
    }

console.log(objetoString(listaProdutos))

// objeto listaProdutos, dentro deste objeto na propriedade ingredientes tenho um array

// For abaixo mostra somente o nome
for (let i = 0; i < listaProdutos.length; i++) {
    //console.log("lista de produtos da Maria Ganache  " + listaProdutos[i].nome + listaProdutos[i].ingredientes)
}

for (let i of listaProdutos) {
    //console.log("Lista de Produtos da Maria Ganache " + i)
    //console.log(i)


}
// Ex. 04 Recebe um array de ojbetos e uma string
const recebeArrayObjetos = (arrayInformado, stringInformada) => {
    const resultado = arrayInformado.filter((item) => {
        
        return item.nome === stringInformada
    })
    if (resultado.length > 0) {
        console.log(resultado) 
    } else {
        alert("Nenhum ingrediente encontrado")
    }
}

 
//Media dos valores
let soma= 0
function mediaProdutos(listaProdutos){
for(i of listaProdutos){
    
    soma += i.valor
}
soma = soma/listaProdutos.length
console.log(" A média dos valores dos produtos é: ",soma)

}

mediaProdutos(listaProdutos) // exibindo media do valor dos produtos na tela

function checarProdutoEstoque (listaProdutos){
    for(i of listaProdutos){
        if(i.estoque === false){
            console.log(`Produto ${i.nome} está em falta, pois seu status é: ${i.estoque}`)
        }else{
            console.log(`Produto ${i.nome} consta em estoque, pois seu status é: ${i.estoque}`)
        }
    }
}

checarProdutoEstoque(listaProdutos)



// Códigos não utilizados no momento, retirados da sequência

//console.log(checarEstoque(listaProdutos))

// segunda maneira de adicionar o produto utilizando o if ternario

//produto2.estoque ? listaProdutos.push(produto2):alert("Produto em falta")
// array listaProdutos está com produtos que constam em estoque
//console.log (produto2.nome)
//console.log(listaProdutos)

// for(let i of produto1.ingredientes){
//     let junta = i.ingredientes
//     junta += i.ingredientes
//     console.log(i.ingredientes)
//     console.log(junta)
// }
// console.log (listaProd)


// function devolveString (parametro){
//     let  stringDevolvida 
//     for(let i in parametro){
//         for(let k of i){
//             console.log(k.parametro[i])
//             stringDevolvida += (`${String(k.parametro[i])}`) 
//            }}
//     return stringDevolvida
// }
// console.log(devolveString(listaProdutos))
// function devolveString (parametro){
//     for(const i of parametro){
//         for(const j in i){
//             console.log (parametro[i][j])
//         }

//  }}


//  recebeArrayObjetos(listaProdutos, "Cone")
// const botaoTeste = document.getElementById("botao2")
// botaoTeste.addEventListener("click", teste)
//  function teste  (){
//     alert ("Não é que deu certo")
//  }
// let produtosBusca =[area1, area2,area3,area4,area5]
//  function buscaInput () {
//     let input = document.getElementById('buscaDigitada').value ;
    
//     alert (`Valor capturado ${input}`)
//     input = input.toLowerCase();
//     let produtosBusca = document.getElementsByClassName('produtosLista');
//     for (i in produtosBusca){
//         console.log(produtosBusca[i])
//         if(!produtosBusca[i].innerHTML.toLowerCase().includes(input)){
//             produtosBusca[i].style.display = "none";
//         }
//         else {
//             produtosBusca[i].style.display = "list-item";
//         }
//         }
    // }



