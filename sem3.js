//const listaProdutos = []
const listaProdutos = [ // lista de produtos adicionados os produtos a uma array, onde cada produto é um
                // objeto
 {
    nome: "brigadeiro",
    descricao: "docinho",
    estoque: false,
    valor: 1,
    ingredientes: ["Chocolate em pó","Leite Condensado","Chocolate Granulado"]
},
{
    nome: "CupCake",
    descricao: "Bolos",
    estoque: true,
    valor: 3,
    ingredientes: ["Farinha de Trigo","Açucar","Fermento","Chocolate"]
},
{
    nome: "Cone",
    descricao: "Cones",
    estoque: true,
    valor: 5,
    ingredientes: ["Cone","Confete","Ganache","Leite em pó"]
},
{
    nome: "Trufa",
    descricao: "Trufas",
    estoque: true,
    valor: 2,
    ingredientes: ["Chocolate","Leite Condensado"]
},
{
    nome: "Beijinho",
    descricao: "docinho",
    estoque: false,
    valor: 2,
    ingredientes: ["Leite Condensado","Leite em pó","coco granulado"]
},
{
    nome: "Nozinho",
    descricao: "panificados",
    estoque: false,
    valor: 5,
    ingredientes: ["Farinha de Trigo","Óleo","Açúcar","Leite","Ovo"]
}
]
// checando se o produto constar em estoque é adicionado ao array
function checarEstoque (produtosLista){ // função que inclue no array produtosEmFalta os produtos em falta
    const produtosEmFalta =[]
    for(i of produtosLista){
        if(i.estoque !== true){
            console.log (i.nome)
            produtosEmFalta.push(i.nome)
        }
    }    return produtosEmFalta
    }

console.log(checarEstoque(listaProdutos))

// segunda maneira de adicionar o produto utilizando o if ternario

//produto2.estoque ? listaProdutos.push(produto2):alert("Produto em falta")
// array listaProdutos está com produtos que constam em estoque
//console.log (produto2.nome)
console.log (listaProdutos)

// for(let i of produto1.ingredientes){
//     let junta = i.ingredientes
//     junta += i.ingredientes
//     console.log(i.ingredientes)
//     console.log(junta)
// }
// console.log (listaProd)

const alteraParaString = (arrayEnviado)=>{
    let string =[]
    for (i in arrayEnviado){
        string.push(`${arrayEnviado[i].ingredientes.join(" ")}`)
        arrayEnviado[i].ingredientes=arrayEnviado[i].ingredientes.join()
    }
    return string
    
}
console.log(alteraParaString(listaProdutos))
//console.log(listaProdutos)
for (let i of listaProdutos){
    console.log(i)
}

for (let i in listaProdutos){
    console.log (listaProdutos[i].nome.toUpperCase(),listaProdutos[i].descricao,listaProdutos[i].estoque,listaProdutos[i].valor,listaProdutos[i].ingredientes)
}

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
function devolveString (parametro){
    for(const i in parametro){
        for(const j in i){
            console.log (parametro[i][j])
        }
       
}}
    
console.log(devolveString(listaProdutos))