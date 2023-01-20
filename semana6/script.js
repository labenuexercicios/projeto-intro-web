let pizza =   
    {sabor: 'pepperoni',
    fatias: 8,
    vegano: true,
    numeroPizzas: 1,
    marca: ['Dominos' , 'Parma' , 'DomPeppone'],
    foto: "https://st2.depositphotos.com/1000336/5622/i/600/depositphotos_56227913-stock-photo-pepperoni-pizza.jpg",
    link: "https://pt.wikipedia.org/wiki/Pepperoni",
    };

let pizza1 = 
    {sabor: 'calabresa',
    fatias: 12,
    vegano: true,
    numeroPizzas: 3,
    marca: ['Baggio' , 'jupiter' , 'maça'],
    foto: "https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg",
    link: "https://pt.wikipedia.org/wiki/Calabresa"
    };

let pizza2 = 
    {sabor: 'pizza integral vegana',
    fatias: 6,
    vegano: true,
    numeroPizzas: 5,
    marca: ['DomCorleone' , 'Caxias' , 'viagem'],
    foto: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-vegana-3.jpg",
    link: "https://pt.wikipedia.org/wiki/Veganismo",
    };

let pizza3 = 
    {sabor: 'pizza de cogumelo',
    fatias: 4,
    vegano: true,
    numeroPizzas: 2,
    marca: ['Veggi' , 'Premiere' , 'pizzahut'],
    foto: "http://obagastronomia.com.br/wp-content/uploads/2012/10/Pizza-de-mini-alcachofras-e-cogumelos.jpg",
    link: "https://pt.wikipedia.org/wiki/Veganismo"
    };


// SEMANA 2

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

//SEMANA 3

for (let i in pizzasArray) {
    pizzasArray[i].marca = pizzasArray[i].marca.toString()
    // console.log(pizzasArray[i])
}

function recebeObjeto (pizza) {
    return ` ${pizza.sabor} \n ${pizza.fatias.toString()} \n ${pizza.vegano.toString()} \n ${pizza.numeroPizzas.toString()} \n ${pizza.marca}`
}
// console.log(recebeObjeto(pizza2))
// console.log(recebeObjeto(pizza3))

function recebeArrayDeObjetos(arrayDeObjetos, string) {
    for(let i in arrayDeObjetos){
        if(arrayDeObjetos[i].sabor === string){
            return arrayDeObjetos[i]
        }else {
            //alert ('Nenhum item foi encontrado')
        }
    }
}
// console.log(recebeArrayDeObjetos(pizzasArray, 'pizza de cogumelo'))


// SEMANA 6


//ADICIONAR AS LISTAS PELO DOM
const lista = document.querySelector(".container-lista")
pizzasArray.map((p) =>{
        lista.innerHTML += `<section class="listas">
        <ul id="lista1" class="listas-classe">
            <img src="${p.foto}" alt="pizza de pepperoni" class="imagem">
            <div class="itens">
                <li>sabor: <a href="${p.link}" class="link">${p.sabor}</a> </li>
                <li>vegano: ${p.vegano}</li>
                <li>fatias: ${p.fatias}</li>
                <li>marca: ${p.marca}</li>
            </div>
        </ul>
    </section>`   
})
// funcaoTeste()


function buscaPizza (e) {
    e.preventDefault()
    const saborPizza = document.getElementById("id-pesquisa").value.toLowerCase()
    const listaFiltrada = document.getElementById("id-container-lista")
    // console.log(saborPizza)
    if (saborPizza === "") {
        return alert("Digite algo!")
    }
    pizzasArray.filter((p) => {
            if(p.sabor.includes(saborPizza)) {
                return listaFiltrada.innerHTML = `<section class="listas">
                <ul id="lista1" class="listas-classe">
                    <img src="${p.foto}" alt="pizza de pepperoni" class="imagem">
                    <div class="itens">
                        <li>sabor: <a href="${p.link}" class="link">${p.sabor}</a> </li>
                        <li>vegano: ${p.vegano}</li>
                        <li>fatias: ${p.fatias}</li>
                        <li>marca: ${p.marca}</li>
                    </div>
                </ul>
            </section>` 
            }
    })
    
}
