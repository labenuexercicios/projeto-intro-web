
addEventListener('load', (event) => {
    const menus = [
        {
            'comida': "Hambúrguer de costela",
            'preco': 29.90,
            'ingredientes': "Pão australiano, Costelinha, Bacon, Queijo cheddar, Cebola caramelizada",
            'vegano': false
        }, {
            'comida': "Hambúrguer gourmet",
            'preco': 28.90,
            'ingredientes': "Pão brioche, Carne bovina, Bacon, Queijo cheddar, Cebola caramelizada",
            'vegano': false
        }, {
            'comida': "Hambúrguer de frango",
            'preco': 25.90,
            'ingredientes': "Pão brioche, Filé de frango, Alface, Tomate, Queijo prato",
            'vegano': false
        }, {
            'comida': "Veggie hambúrguer",
            'preco': 26.90,
            'ingredientes': "Pão brioche, Hambúrguer de falafel, Alface, Tomate, Cebola",
            'vegano': true,

        }]
    //item 2
    function relatarMenu(menu) {
        let lanche = ""
        for (key in menu) {
            lanche += `${key}: ${menu[key]}\n`
        }
        return lanche

    }
    //item 4 
    function relatarArrayeString(menus, vegano) {
        let menuString = "";

        for (const menu of menus.filter(w => w.vegano === vegano)) {
            menuString += `${relatarMenu(menu)}\n`
        }

        return menuString
    }

    // Item 2 e 3
    for (const menu of menus) {
        console.log(relatarMenu(menu))
    }

    // Item 4
    const resultado = relatarArrayeString(menus, true)
    if (resultado.length === 0)
        alert('Nenhum menu encontrado')
});



// const mediaPreco = (preco + preco2 + preco3 + preco4) / 4
// console.log(`A média dos preço da lanchonete é R$${ mediaPreco }`)

// const verificarVegano = (vegano && vegano2 && vegano3 && vegano4)
// console.log(`Todos são veganos ? ${ verificarVegano }.`)

// console.log(`${ comida.toUpperCase() }
// R$ ${preco}
// Ingredientes:${ingredientes}
// É vegano?${vegano}`)

// console.log(`${comida2.toUpperCase()}
// R$${preco2}
// Ingredientes:${ingredientes2}
// É vegano?${vegano2}`)

// console.log(`${comida3.toUpperCase()}
// R$${preco3}
// Ingredientes:${ingredientes3}
// É vegano?${vegano3}`)

// console.log(`${comida4.toUpperCase()}
// R$${preco4}
// Ingredientes:${ingredientes4}
// É vegano?${vegano4}`)

