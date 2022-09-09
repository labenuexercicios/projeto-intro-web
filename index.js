const roupa = String
const preco = Number
const masculino = Boolean
const cor = ["verde", "amarelo", "rosa", "jeans"]

primeiroProduto = {
    roupa: "camiseta",
    preco: 20.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    masculino: true,
    cor: cor[0]
}

segundoProduto = {
    roupa: "calça",
    preco: 50.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    masculino: false,
    cor: cor[3]
}

terceiroProduto = {
    roupa: "cueca",
    preco: 15.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    masculino: true,
    cor: cor[2]
}

const carrinho = []

function verificar(objeto1) {
    if (objeto1.masculino == true) {
        carrinho.push(objeto1)
    } else {
        alert("Item não adicionado.")
    }
}
function verificar1(objeto2) {
    if (objeto2.masculino == true) {
        carrinho.push(objeto2)
    } else {
        alert("Item não adicionado.")
    }
}
function verificar2(objeto3) {
    if (objeto3.masculino == true) {
        carrinho.push(objeto3)
    } else {
        alert("Item não adicionado.")
    }
}
verificar(primeiroProduto)
//verificar1(segundoProduto) --> esse é false, vai dar **ALERT**
verificar2(terceiroProduto)

console.log(carrinho)






















// function verificar(objeto1, objeto2, objeto3) {
//     if (objeto1.masculino == true) {
//         carrinho.push(objeto1)
//     } else if (objeto2.masculino == true) {
//         carrinho.push(objeto2)
//     } else if (objeto3.masculino == true) {
//         carrinho.push(objeto3)
//     } else {
//         alert("Item não adicionado.")
//     }
// }
// verificar(primeiroProduto, segundoProduto, terceiroProduto)
// console.log(carrinho)


