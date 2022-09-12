const roupa = String
const preco = Number
const masculino = Boolean
const cor = ["verde", "amarelo", "rosa", "jeans"]

//1. Transforme os itens que criamos nas últimas semanas em objetos.
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

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
const carrinho = []

//4 Verificação pra adicionar ao array carrinho
    if (primeiroProduto.masculino === true) {
        carrinho.push(primeiroProduto)
    } else {
        alert("Item não adicionado.")
    }

    //Esse vai emitir um alert dizendo que não foi adicionado
    if (segundoProduto.masculino === true) {
        carrinho.push(segundoProduto)
    } else {
        alert("Item não adicionado.")
    }

    if (terceiroProduto.masculino === true) {
        carrinho.push(terceiroProduto)
    } else {
        alert("Item não adicionado.")
    }

console.log(carrinho)