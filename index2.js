// const doces = "Brigadeiro"
// const descricao = "docinho"
// let estoque = true
// let valor = 1

const produto1 = {
    nome: "brigadeiro",
    descricao: "docinho",
    estoque: false,
    valor: 1
}

const listaProdutos = []

const produto2 = {
    nome: "CupCake",
    descricao: "Bolos",
    estoque: true,
    valor: 3
}

const produto3 = {
    nome: "Cone",
    descricao: "Cones",
    estoque: true,
    valor: 5
}

// checando se o produto constar em estoque é adicionado ao array
if(produto1.estoque){
    listaProdutos.push(produto1)
}else
    alert ("Produto em falta")

if (produto3.estoque){
    listaProdutos.push(produto3)
}else
    alert ("Produto em falta")

// segunda maneira de adicionar o produto utilizando o if ternario

produto2.estoque ? listaProdutos.push(produto2):alert("Produto em falta")
// array listaProdutos está com produtos que constam em estoque
console.log (produto2.nome)
console.log (listaProdutos)