
let pizza =   
    {sabor: "pepperoni",
    fatias: 8,
    vegano: false,
    numeroPizzas: 1,
    marca: ['Dominos' , 'pizzariaDaEsquina' , 'DomPeppone']};

let pizza1 = 
    {sabor: 'calabresa',
    fatias: 12,
    vegano: false,
    numeroPizzas: 3,
    marca: ['Baggio' , 'jupiter' , 'maça']};

let pizza2 = 
    {sabor: 'pizza integral vegana',
    fatias: 6,
    vegano: true,
    numeroPizzas: 5,
    marca: ['DomCorleone' , 'Caxias' , 'viagem']};

let pizza3 = 
    {sabor: 'pizza de cogumelo',
    fatias: 4,
    vegano: true,
    numeroPizzas: 2,
    marca: ['ZeDaEsquina' , 'qualquer' , 'pizzahut']};


let pizzasArray = []

    if (pizza.vegano) {
        pizzasArray.push(pizza);
    }
    else {
        alert('A lista de objetos pizza nao foi adicionada ao Array')
    } 
    if (pizza1.vegano) {
        pizzasArray.push(pizza1);
    } else {
        alert('A lista de objetos pizza1 nao foi adicionada ao Array')
    }
    if (pizza2.vegano) {
        pizzasArray.push(pizza2);
    }
    else {
        alert('A lista de objetos pizza2 nao foi adicionada ao Array')
    }
    if (pizza3.vegano) {
        pizzasArray.push(pizza3);
    }
    else {
        alert('A lista de objetos pizza3 nao foi adicionada ao Array')
    }
    
    // console.log(pizzasArray)

//SEMANA 3 -
//1. Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
for (let i in pizzasArray) {
    pizzasArray[i].marca = pizzasArray[i].marca.toString()
    console.log(pizzasArray[i])
}

//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
function recebeObjeto (pizza) {
    return ` ${pizza.sabor} \n ${pizza.fatias.toString()} \n ${pizza.vegano.toString()} \n ${pizza.numeroPizzas.toString()} \n ${pizza.marca}`
}
console.log(recebeObjeto(pizza2))
console.log(recebeObjeto(pizza3))

//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
function recebeArrayDeObjetos(arrayDeObjetos, string) {
    for(let i in arrayDeObjetos){
        if(arrayDeObjetos[i].sabor === string){
            return arrayDeObjetos[i]
        }else {
            alert ('Nenhum item foi encontrado')
        }
    }
}
console.log(recebeArrayDeObjetos(pizzasArray, 'pizza de cogumelo'))
   





