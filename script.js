//CARDÁPIO DE VERÃO CONSULADO CAFÉ

const arrayDeObjetos = [
    objeto1 = {
        nome: "Frozen Café Tradicional",
        preco: 16.00,
        disponivel: true,
        tamanho: 350,
        sabor: "Tradicional",
        ingredientes: ["Frozem artesanal da casa, ", "expresso duplo e ", "leite cremoso"],
        img: "/midias/cafe2.png",
    },

    objeto2 = {
        nome: "Frozen Café Doce de Leite",
        preco: 17.00,
        disponivel: true,
        tamanho: 350,
        sabor: "Doce de Leite",
        ingredientes: ["Frozem artesanal doce de leite, ", "expresso duplo e ", "leite cremoso"],
        img: "/midias/cafe4.png",
    },

    objeto3 = {
        nome: "Frozen Café Limão",
        preco: 18.00,
        disponivel: true,
        tamanho: 350,
        sabor: "Limão",
        ingredientes: ["Frozem de limão siciliano e ", "capuccino tradicional"],
        img: "/midias/cafe1.png",
    },
]

console.log(arrayDeObjetos);

// semana 5 - A CADA INTERAÇÃO DO FOR IMPRIME UM DOS OBJETOS DO ARRAY COM AS ALTERAÇÕES PEDIDAS 
// for (let objetos of arrayDeObjetos) {
//     let string = ""
//     for (let ingredientes of objetos.ingredientes) {
//         string += ingredientes
//     }
//     objetos.ingredientes = string
//     objetos.nome = objetos.nome.toUpperCase()
//     console.log(objetos);
// }

// SEMANA 6 PARTE 1 - A FUNCAO IMPRIME O OBJETO CHAMADO COM AS ALTERAÇÕES PEDIDAS 

const imprimeObjComString = (objeto) => {
    let string = ""
    for (let j of objeto.ingredientes) {
        string += j + ", "
    }
    return { ...objeto, nome: objeto.nome.toUpperCase(), ingredientes: string }
}
// console.log(imprimeObjComString(objeto1))

// 
// const imprimePedido = (arrayDeObjetos, pedido) => {
//     for (let i in arrayDeObjetos) {
//         if (arrayDeObjetos[i].nome === pedido) {
//             return (arrayDeObjetos[i]);
//         } else {
//             return "pedido não encontrado"
//         }
//     }
// }
// console.log(imprimePedido(arrayDeObjetos, "Frozen Café Limão"));

//tentativas semana 6 PART 2- com alert não deu nao funciona se são dois obj com mesmo nome

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

// SEMANA 6 PARTE 1 - A FUNCAO IMPRIME UMA STRING DO OBJETO COM AS ALTERAÇÕES PEDIDAS
// const imprimeString = (objeto) => {
//     let string
//     string = objeto.nome.toUpperCase()
//     string += "\nPreço: ", objeto.preco, "R$"
//     string += "\nEstá Disponível: " + objeto.disponivel
//     string += "\nTamanho: " + objeto.tamanho + "ml"
//     string += "\nSabor:" + objeto.sabor
//     string += "\nIngredientes: "
//     for (let j of objeto.ingredientes) {
//         string += `${j}, `
//     }
//     console.log(string);
// }

// imprimeString(objeto1)

// DIFERENTES MODOS SEMANA 5

// A CADA INTERAÇÃO DO FOR IMPRIME UMA STRING DE UM DOS OBJETOS DO ARRAY:
// for (let i in arrayDeObjetos) {
//     let string = ""
//     string = `\n${arrayDeObjetos[i].nome.toUpperCase()}
//     \nPreço:${arrayDeObjetos[i].preco}R$
//     \nEstá Disponível:${arrayDeObjetos[i].disponivel}
//     \nTamanho:${arrayDeObjetos[i].tamanho}ml
//     \nSabor:${arrayDeObjetos[i].sabor}
//     \nIngredientes:`
//     for(let j of arrayDeObjetos[i].ingredientes) {
//         string += j
//     }
//     console.log(string);
// }

// A CADA INTERAÇÃO DO FOR IMPRIME UM CONSOLE LOG DE UMA DAS PROPRIEDADES DOS OBJETOS DO ARRAY:
// for (let objetos of arrayDeObjetos) {
//     let string = ""
//     for (let ingredientes of objetos.ingredientes) {
//         string += ingredientes
//     }
//     objetos.ingredientes = string
//     objetos.nome = objetos.nome.toUpperCase()
//     for (let propriedades in objetos) {
//         console.log(`${propriedades.toUpperCase()}:`, objetos[propriedades]);
//     }
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