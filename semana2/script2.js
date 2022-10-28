/*  const pizza = (true)
    const sabor = ("pepperoni")
    const fatias = (8)
    const vegano = (false)
    const numeroPizzas = (1)
    const marca = ('Dominos')

console.log(pizza)
console.log(pizza.includes("calabresa"))

    const pizza1 = (false)
    const sabor1 = ("calabresa")
    const fatias1 = (12)
    const vegano1 = (false)
    const numeroPizzas1 = (3)
    const marca1 = (Baggio)

    const pizza2 = (false)
    const sabor2 = ("pizza integral vegana")
    const fatias2 = (6)
    const vegano2 = (true)
    const numeroPizzas2 = (5)
    const marca2 = ('DomCorleone')

    const pizza3 = (true)
    const sabor3 = ("pizza de cogumelo")
    const fatias3 = (4)
    const vegano3 = (true)
    const numeroPizzas3 = (2)
    const marca3 = ('ZeDaEsquina')
    

const mediaFatias = ((fatias + fatias1 + fatias2 + fatias3) / 4)
console.log(mediaFatias)


const verificarSabor = (sabor && sabor && sabor && sabor)
console.log(verificarSabor)


const pizzaArray =([' com ' + 'cebola'])
console.log(pizza + pizzaArray)

console.log((pizza + pizzaArray + pizza1 + pizza2 + pizza3 + ' ' + fatias + ' ' + fatias1 + ' ' + fatias2 + ' ' + fatias3 + ' ' + sabor + ' ' + sabor1 + ' ' + sabor2 + ' ' + sabor3).toUpperCase()) */


    // SEMANA 2 -

//1. Transforme os itens que criamos nas últimas semanas em objetos. - FEITOOO

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;  FEITOOOOOO

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

const pizza = 
   
    {sabor: "pepperoni",
    fatias: 8,
    vegano: true,
    numeroPizzas: 1,
    marca: 'Dominos'};

const pizza1 = 

    {sabor: "calabresa",
    fatias: 12,
    vegano: false,
    numeroPizzas: 3,
    marca: 'Baggio'};

const pizza2 = 

    {sabor: "pizza integral vegana",
    fatias: 6,
    vegano: true,
    numeroPizzas: 5,
    marca: 'DomCorleone'};

const pizza3 = 

    {sabor: "pizza de cogumelo",
    fatias: 4,
    vegano: false,
    numeroPizzas: 2,
    marca: 'ZeDaEsquina'};


    var objetosArray = []

    if (pizza.vegano) {
        objetosArray.push(pizza);
    }
    else {
        alert('A lista de objetos pizza nao foi adicionada ao Array')
    } 
    if (pizza1.vegano) {
        objetosArray.push(pizza1);
    } else {
        alert('O item vegano do objeto pizza 1 nao foi adicionado')
    }
    if (pizza2.vegano) {
        objetosArray.push(pizza2);
    }
    else {
        alert('A lista de objetos pizza2 nao foi adicionada ao Array')
    }
    if (pizza3.vegano) {
        objetosArray.push(pizza3);
    }
    else {
        alert('A lista de objetos pizza3 nao foi adicionada ao Array')
    }
    


    console.log(objetosArray)
   




//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push





4