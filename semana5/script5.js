let pizza =   
    {sabor: "pepperoni",
    fatias: 8,
    vegano: false,
    numeroPizzas: 1,
    marca: ['Dominos' , 'Parma' , 'DomPeppone']};

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
    marca: ['Veggi' , 'Premiere' , 'pizzahut']};


let pizzasArray = []

    if (pizza.vegano) {
        pizzasArray.push(pizza);
    }
    else {
        //alert('A lista de objetos pizza nao foi adicionada ao Array')
    } 
    if (pizza1.vegano) {
        pizzasArray.push(pizza1);
    } else {
        //alert('A lista de objetos pizza1 nao foi adicionada ao Array')
    }
    if (pizza2.vegano) {
        pizzasArray.push(pizza2);
    }
    else {
       // alert('A lista de objetos pizza2 nao foi adicionada ao Array')
    }
    if (pizza3.vegano) {
        pizzasArray.push(pizza3);
    }
    else {
        //alert('A lista de objetos pizza3 nao foi adicionada ao Array')
    }
    
    // console.log(pizzasArray)



for (let i in pizzasArray) {
    pizzasArray[i].marca = pizzasArray[i].marca.toString()
    console.log(pizzasArray[i])
}

function recebeObjeto (pizza) {
    return ` ${pizza.sabor} \n ${pizza.fatias.toString()} \n ${pizza.vegano.toString()} \n ${pizza.numeroPizzas.toString()} \n ${pizza.marca}`
}
console.log(recebeObjeto(pizza2))
console.log(recebeObjeto(pizza3))

function recebeArrayDeObjetos(arrayDeObjetos, string) {
    for(let i in arrayDeObjetos){
        if(arrayDeObjetos[i].sabor === string){
            return arrayDeObjetos[i]
        }else {
            //alert ('Nenhum item foi encontrado')
        }
    }
}
console.log(recebeArrayDeObjetos(pizzasArray, 'pizza de cogumelo'))
