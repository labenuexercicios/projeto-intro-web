let menu = [
    pizza1 = {
        nome: "pizza de calabresa",
        preco: Number(15.00.toFixed(2)),
        vegetariano: false,
        disponivel: true,
        ingredientes: ['cebola',' calabresa',' molho de tomate',' queijo']
    },
    pizza2 = {
        nome: "pizza vegetariana",
        preco: Number(18.00.toFixed(2)),
        vegetariano: true,
        disponivel: false,
        ingredientes: ['pimentão',' cebola',' molho de tomate',' queijo']
    },
    pizza3 = {
        nome: "pizza de chocolate",
        preco: Number(20.00.toFixed(2)),
        vegetariano: false,
        disponivel: true,
        ingredientes: ['chocolate',' molho de tomate',' queijo',' morango']
    
    },
    pizza4 = {
        nome: "pizza de marguerita",
        preco: Number(15.50.toFixed(2)),
        vegetariano: true,
        disponivel: true,
        ingredientes: [' molho de tomate',' queijo',' manjericão']
    },
    pizza5 = {
        nome: "pizza de frango com catupiry",
        preco: Number(17.00.toFixed(2)),
        vegetariano: false,
        disponivel: true,
        ingredientes: ['frango',' molho de tomate',' queijo','catupiry']
    },
    
]

/*
2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. 
Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
*/   

for(pizza of menu){
    for(propriedades in pizza){
        console.log(`${propriedades}: ${pizza[propriedades]}`)
    }
    console.log("----------------------------------")
}

//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

const busca = (menu, string) =>{
const resultado = menu.filter((pizza) => {
return pizza.nome === string || pizza.preco === string || pizza.vegetariano === string || pizza.disponivel === string || pizza.ingredientes === string
})

if (resultado.length > 0){
    console.log(resultado)
}else{
    alert("Nenhuma pizza encontrada")
}}

//busca(menu,)
