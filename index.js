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

quartoProduto = {
    roupa: "camiseta",
    preco: 40.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    masculino: true,
    cor: cor[3]
}
const carrinho = []

    if (primeiroProduto.masculino === true) {
        carrinho.push(primeiroProduto)
    } else {
        alert("Item não adicionado. Somente produtos masculinos.")
    }

    //Esse vai emitir um alert dizendo que não foi adicionado
    if (segundoProduto.masculino === true) {
        carrinho.push(segundoProduto)
    } else {
        alert("Item não adicionado. Somente produtos masculinos.")
    }

    if (terceiroProduto.masculino === true) {
        carrinho.push(terceiroProduto)
    } else {
        alert("Item não adicionado. Somente produtos masculinos.")
    }

    if (quartoProduto.masculino === true) {
        carrinho.push(quartoProduto)
    } else {
        alert("Item não adicionado. Somente produtos masculinos.")
    }
    // console.log(carrinho)
    console.log(`============ ESSE É O CARRINHO ============`)
    for(i=0;i<carrinho.length;i++){
        const carrinhoString = carrinho[i]
        console.log(carrinhoString)
    }
    console.log(`===========================================`)
    // //3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
    const retornaRoupa = carrinho.filter((objeto)=>{
        return objeto.roupa === "camiseta"
    })
    console.log(retornaRoupa)

    // //4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
    function retornaObjeto(array,string){
        const arrayString = []
        for(i=0;i<array.length;i++){
            if(array[i].roupa === string){
                arrayString.push(array[i])
            } else {
                alert(`ITEM NÃO ENCONTRADO NO INDICE ${i+1}`)
            }
        }
        return arrayString
    }
    console.log(retornaObjeto(carrinho,"camiseta"))