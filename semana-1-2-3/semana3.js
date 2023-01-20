// 1. Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório


// 2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

let listaDeJogos = [
jogo1 = {

    titulo: "The Last Of Us 2",
    nota: 93,
    multiplayer: false,
    duracao: "24",
    desenvolvedora: "Naughty Dog",
    genero: "Ação, Aventura, Terror"

},

jogo2 = {

    titulo: "Red Dead Redemption 2",
    nota: 97,
    multiplayer: true,
    duracao: "50h",
    desenvolvedora: "Rockstar",
    genero: "Mundo Aberto, Ação, Faroeste"

},


jogo3 = {
    
    titulo: "Nier",
    nota: 68,
    multiplayer: false,
    duracao: "20h",
    desenvolvedora: "PlatinumGames",
    genero: "Hack And Slash, RPG, Drama"

},

jogo4 = {

    titulo: "Mass Effect 2",
    nota: 94,
    multiplayer: false,
    duracao: "25h",
    desenvolvedora: "BioWare",
    genero: "RPG, Sci-fi, Ação"

},

]

// for (jogos of listaDeJogos){
//     for (propriedades in jogos){
//     console.log(`${propriedades}: ${jogos[propriedades]}`)

// }

// }

// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.


// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

const relatorioDosJogos = function (listaDeJogos, genero){
   
    for(let i in listaDeJogos){

        if (listaDeJogos[i].genero === genero){

            return (arrayDeJogos[i].genero)
        }
    } return alert('Nenhum item econtrado')

}

console.log(relatorioDosJogos(listaDeJogos, "RPG"))
