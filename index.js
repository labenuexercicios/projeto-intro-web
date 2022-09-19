
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
            'vegano': true
        }]

    function minhaFunction(menu) {
        console.log(menu.comida)
    }

    function minhaFunction2(lista, comparacao) {
        const retorno = []
        for (item of lista) {
            if (item.ingredientes.includes(comparacao)) {
                retorno.push(item);
            } else {
                alert("O item não contém tomate");
            }
        }

        return retorno;
    }

    function minhaFunction3(lista, comida) {
        const retorno = []
        for (item of lista) {
            if (item.comida === comida) {
                retorno.push(item);
            } else {
                alert(`O item não é a comida ${comida}`);
            }
        }

        return retorno;
    }

    for (const menu of menus) {
        minhaFunction(menu)
        console.log(menu.ingredientes)
    }

    // const resultado = minhaFunction2(menus, "Tomate");
    // console.log(resultado);

    const resultado2 = minhaFunction3(menus, "Hambúrguer gourmet");
    console.log(resultado2);

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

