//CARDÁPIO DE VERÃO CONSULADO CAFÉ

const arrayDeObjetos = [
    objeto1 = {
        nome: "Frozen Café Tradicional",
        preco: 16.00,
        disponivel: true,
        tamanho: 350,
        sabor: "Tradicional",
        ingredientes: ["Frozem artesanal da casa", "expresso duplo", "leite cremoso"]
    },

    objeto2 = {
        nome: "Frozen Café Doce de Leite",
        preco: 17.00,
        disponivel: true,
        tamanho: 350,
        sabor: "Doce de Leite",
        ingredientes: ["Frozem artesanal doce de leite", "expresso duplo", "leite cremoso"]
    },

    objeto3 = {
        nome: "Frozen Café Limão",
        preco: 18.00,
        disponivel: true,
        tamanho: 350,
        sabor: "Limão",
        ingredientes: ["Frozem de limão siciliano", "capuccino tradicional"]
    },
]


console.log(arrayDeObjetos);

for (let i in arrayDeObjetos) {
    let string
    string = `\n${arrayDeObjetos[i].nome.toUpperCase()}
    \nPreço:${arrayDeObjetos[i].preco}R$
    \nEstá Disponível:${arrayDeObjetos[i].disponivel}
    \nTamanho:${arrayDeObjetos[i].tamanho}ml
    \nSabor:${arrayDeObjetos[i].sabor}
    \nIngredientes:`
    for(let j of arrayDeObjetos[i].ingredientes) {
        string += ` ${j},`
    }
    console.log(string);
}

const imprimeString = (objeto) => {
    let string
    string = `\n${objeto.nome.toUpperCase()}
    \nPreço:${objeto.preco}R$
    \nEstá Disponível:${objeto.disponivel}
    \nTamanho:${objeto.tamanho}ml
    \nSabor:${objeto.sabor}
    \nIngredientes:`
    for (let j of objeto.ingredientes) {
        string += ` ${j},`
    }
    console.log(string);
}

imprimeString(objeto1)

const imprimePedido = (arrayDeObjetos, pedido) => {
    for (let i in arrayDeObjetos) {
        if (arrayDeObjetos[i].nome === pedido) {
            return (arrayDeObjetos[i]);
        } else {
            return "pedido não encontrado"
        }
    }
}

console.log(imprimePedido(arrayDeObjetos, "Frozen Café Tradicional"));



//tentativas semana 6 - com alert não deu nao funciona se são dois obj com mesmo nome

// const imprimePedido = (arrayDeObjetos, pedido) => {
//     const arrayFiltrado = arrayDeObjetos.filter((item) => {
//         return item.nome === pedido})
//     for (let i in arrayFiltrado) {
//         if (arrayFiltrado[i].nome === pedido) {
//             console.log(arrayFiltrado[i]);
//         } else {
//             alert('produto não encontrado')
//         }
//     }
// }


// const imprimePedido = (arrayDeObjetos, pedido) => {
//     const filtro = arrayDeObjetos.filter((item) => {
//         return item.nome === pedido})
//     return filtro[0]
// }

//relatório semana 2

// console.log("\n", objeto1.nome.toUpperCase());
// console.log("Preço:", objeto1.preco, "R$");
// console.log("Está disponível?", objeto1.disponivel);
// console.log("Tamanho:", objeto1.tamanho, "ml");
// console.log("Sabor:", objeto1.sabor);

// console.log("\n",nome2.toUpperCase());
// console.log("Preço:", preco2,"R$");
// console.log("É gelado?", gelado2);
// console.log("Tamanho:", tamanho2,"ml");
// console.log("Sabor:", sabor2);
// console.log("Ingredientes:", ingredientes2);

// console.log("\n",nome3.toUpperCase());
// console.log("Preço:", preco3,"R$");
// console.log("É gelado?", gelado3);
// console.log("Tamanho:", tamanho3,"ml");
// console.log("Sabor:", sabor3);
// console.log("Ingredientes:", ingredientes3);

//coisas semanas passadas

// const arrayDeObjetos = []
// if (objeto1.disponivel === objeto2.disponivel) {
//     arrayDeObjetos.push(objeto1, objeto2, objeto3)
// } else {
//     alert("ITENS NÃO ADICIONADOS")
// }

// const mediaPreco = (preco1 + preco2 + preco3) / 3;
// console.log("\nMedia de Preço:", mediaPreco);

// const saoGelados = gelado1 && gelado2 && gelado3;
// console.log("Todos são gelados?", saoGelados);