// 1. Transforme os itens que criamos nas últimas semanas em objetos.

const pizza1 = {
    nome: "pizza de calabresa",
    preco: Number(15.00.toFixed(2)),
    vegetariano: false,
    disponivel: true,
    ingredientesPizza1: ['cebola',' calabresa',' molho de tomate',' queijo']
}

const pizza2 = {
    nome: "pizza vegetariana",
    preco: Number(18.00.toFixed(2)),
    vegetariano: true,
    disponivel: false,
    ingredientesPizza2: ['pimentão',' cebola',' molho de tomate',' queijo']
}

const pizza3 = {
    nome: "pizza de chocolate",
    preco: Number(20.00.toFixed(2)),
    vegetariano: false,
    disponivel: true,
    ingredientesPizza3: ['chocolate',' molho de tomate',' queijo',' morango']

}

const pizza4 = {
    nome: "pizza de marguerita",
    preco: Number(15.00.toFixed(2)),
    vegetariano: true,
    disponivel: true,
    ingredientesPizza4: [' molho de tomate',' queijo',' manjericão']
}

const pizza5 = {
    nome: "pizza de frango com catupiry",
    preco: Number(17.00.toFixed(2)),
    vegetariano: false,
    disponivel: true,
    ingredientesPizza5: ['frango',' molho de tomate',' queijo','catupiry']
}

// 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const carrinho = []

// 3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .

/*
carrinho.push(pizza1, pizza2, pizza3, pizza4, pizza5)
console.log(carrinho)
*/


// 4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

// 5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if (pizza1.disponivel === true) {
    carrinho.push(pizza1)
    console.log(carrinho) 
} else {
    alert("O produto está disponível? Não \nPizza não adicionada.")
}

if (pizza2.disponivel === true) {
    carrinho.push(pizza2)
    console.log(carrinho) 
} else {
    alert("O produto está disponível? Não \nPizza não adicionada.")
}

if (pizza3.disponivel === true) {
    carrinho.push(pizza3)
    console.log(carrinho) 
} else {
    alert("O produto está disponível? Não \nPizza não adicionada.")
}

if (pizza4.disponivel === true) {
    carrinho.push(pizza4)
    console.log(carrinho) 
} else {
    alert("O produto está disponível? Não \nPizza não adicionada.")
}

if (pizza5.disponivel === true) {
    carrinho.push(pizza5)
    console.log(carrinho) 
} else {
    alert("O produto está disponível? Não \nPizza não adicionada.")
}