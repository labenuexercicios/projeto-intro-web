///////////////////////////////////////////////////////////////////////
////////////////////////////// SEMANA 1 ///////////////////////////////
///////////////////////////////////////////////////////////////////////

//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.

//Arrays:
const genres = ["Ação e Aventura", "Fantasia", "Mundo Aberto", "RPG", "Quebra-cabeça"]
const platforms = ["N64", "3DS", "Wii U", "Switch"]
const series = ["The Legend of Zelda", "Hollow Knight"]
const titles = ["Ocarina of Time", "Majora's Mask", "Breath of the Wild"]

/*
const series1 = series[0]
const title1 = titles[0]
const genre1 = `${genres[0]}, ${genres[1]}, ${genres[4]}`
const sinopse1 = "Link é um jovem da floresta que vê seu lar em perigo e parte em uma jornada para deter um rei maligno e salvar o reino de Hyrule! Para completar sua missão, ele terá que encontrar a princesa Zelda e ajudar outros povos para reunir a Triforce e restabelecer o equilíbrio do mundo!"
const releaseDate1 = 1998
const criticReview1 = 9.9
const publicReview1 = 9.1
const availablePlataform1 = `${platforms[0]}, ${platforms[1]}`
const temEmBr1 = false
const remasterOrRemake1 = true
const sequel1 = false
*/
//Recomendamos, pensando no futuro, que você também pense em dados que podem receber múltiplos valores de uma só vez. Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.





//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

/*
const series2 = series[0]
const title2 = titles[2]
const genre2 = `${genres[0]}, ${genres[2]}, ${genres[3]}`
const sinopse2 = "A história começa com Link, que acorda em uma Hyrule devastada após cem anos de sono e agora precisa partir em uma aventura para recuperar suas memórias e derrotar todo o mal causado por Calamity Ganon."
const releaseDate2 = 2017
const criticReview2 = 9.7
const publicReview2 = 8.7
const availablePlataform2 = `${platforms[2]}, ${platforms[3]}`
const temEmBr2 = false
const remasterOrRemake2 = false
const sequel2 = false

///////////////////////////////////////////////////////////////////////

const series3 = series[0]
const title3 = titles[1]
const genre3 = `${genres[1]}, ${genres[4]}`
const sinopse3 = "Jogado em um mundo paralelo, Link encontra uma terra em grave perigo. A Máscara de Majora causou estragos nos cidadãos da cidade de Termina, mas seu problema mais urgente é a lua caindo em direção ao mundo! Link tem apenas 3 dias, apenas 72 horas para encontrar uma maneira de parar sua queda."
const releaseDate3 = 2000
const criticReview3 = 9.5
const publicReview3 = 9.1
const availablePlataform3 = `${platforms[0]}, ${platforms[1]}`
const temEmBr3 = false
const remasterOrRemake3 = true
const sequel3 = true
*/





//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

/*
const averageCriticReview = +((criticReview1 + criticReview2 + criticReview3) / 3).toFixed(1)
const averagePublicReview = +((publicReview1 + publicReview2 + publicReview3) / 3).toFixed(1)
console.log(`${series[0]} Series
A média de avaliação dos críticos é de: ${averageCriticReview}
Já a média de avaliação do público é de: ${averagePublicReview}`)
*/





//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

/*
let checkLanguage = (temEmBr1 && temEmBr2 && temEmBr3)
let informLanguage
//console.log (checkLanguage)
//console.log (informLanguage)
if (checkLanguage) {
    informLanguage =
        (`Todos os jogos da série "${series[0]}" são traduzidos para PT-BR`)
} else {
    informLanguage =
        (`Infelizmente nem todos os jogos da série "${series[0]}" são traduzidos para PT-BR`)
}
console.log(informLanguage)
*/





//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

///////////////////////////////////////////////////////////////////////
// Deixei lá em cima pq ele precisa ser apresentado antes de fazer as impressões para não dar erro de leitura.
///////////////////////////////////////////////////////////////////////

//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

/*
console.log(`\n--- Jogos da série ${series[0]} ---`)

console.log (`Título: ${series1} - ${title1}\n
Gênero: ${genre1}\n
Sinopse: "${sinopse1}"\n
Ano de lançamento: ${releaseDate1}\n
Plataformas disponíveis: ${availablePlataform1}\n
Nota dos críticos: ${criticReview1}\n
Nota do público: ${publicReview1}\n
Tem em PT-BR? ${temEmBr1}
Tem remaster ou remake? ${remasterOrRemake1}
É uma sequência? ${sequel1}
`)
console.log("///////////////////////////////////////////////////////////////////")
console.log (`Título: ${series1} - ${title2}\n
Gênero: ${genre2}\n
Sinopse: "${sinopse2}"\n
Ano de lançamento: ${releaseDate2}\n
Plataformas disponíveis: ${availablePlataform2}\n
Nota dos críticos: ${criticReview2}\n
Nota do público: ${publicReview2}\n
Tem em PT-BR? ${temEmBr2}
Tem remaster ou remake? ${remasterOrRemake2}
É uma sequência? ${sequel2}
`)

console.log("///////////////////////////////////////////////////////////////////")
console.log (`Título: ${series1} - ${title3}\n
Gênero: ${genre3}\n
Sinopse: "${sinopse3}"\n
Ano de lançamento: ${releaseDate3}\n
Plataformas disponíveis: ${availablePlataform3}\n
Nota dos críticos: ${criticReview3}\n
Nota do público: ${publicReview3}\n
Tem em PT-BR? ${temEmBr3}
Tem remaster ou remake? ${remasterOrRemake3}
É uma sequência? ${sequel3}
`)
*/

///////////////////////////////////////////////////////////////////////
////////////////////////////// SEMANA 2 ///////////////////////////////
///////////////////////////////////////////////////////////////////////

//1. Transforme os itens que criamos nas últimas semanas em objetos.

jogo1 = {
    serie: series[0],
    title: titles[0],
    genre: `${genres[0]}, ${genres[1]}, ${genres[4]}`,
    sinopse: "Link é um jovem da floresta que vê seu lar em perigo e parte em uma jornada para deter um rei maligno e salvar o reino de Hyrule! Para completar sua missão, ele terá que encontrar a princesa Zelda e ajudar outros povos para reunir a Triforce e restabelecer o equilíbrio do mundo!",
    releaseDate: 1998,
    criticReview: 9.9,
    publicReview: 9.1,
    availablePlataform: `${platforms[0]}, ${platforms[1]}`,
    temEmBr: false,
    remasterOrRemake: true,
    sequel: false
}

jogo2 = {
    serie: series[0],
    title: titles[2],
    genre: `${genres[0]}, ${genres[2]}, ${genres[3]}`,
    sinopse: "A história começa com Link, que acorda em uma Hyrule devastada após cem anos de sono e agora precisa partir em uma aventura para recuperar suas memórias e derrotar todo o mal causado por Calamity Ganon.",
    releaseDate: 2017,
    criticReview: 9.7,
    publicReview: 8.7,
    availablePlataform: `${platforms[2]}, ${platforms[3]}`,
    temEmBr: false,
    remasterOrRemake: false,
    sequel: false
}

jogo3 = {
    serie: series[0],
    title: titles[1],
    genre: `${genres[1]}, ${genres[4]}`,
    sinopse: "Jogado em um mundo paralelo, Link encontra uma terra em grave perigo. A Máscara de Majora causou estragos nos cidadãos da cidade de Termina, mas seu problema mais urgente é a lua caindo em direção ao mundo! Link tem apenas 3 dias, apenas 72 horas para encontrar uma maneira de parar sua queda.",
    releaseDate: 2000,
    criticReview: 9.5,
    publicReview: 9.1,
    availablePlataform: `${platforms[0]}, ${platforms[1]}`,
    temEmBr: false,
    remasterOrRemake: true,
    sequel: true
}





//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const todosOsJogos = []
const verificacaoDeTodosOsJogos = []





//3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .

todosOsJogos.push(jogo1, jogo2, jogo3)
//verificacaoDeTodosOsJogos.push(jogo1,jogo2,jogo3)

//Imprima este array no console.log

//console.log (todosOsJogos)
//console.table (todosOsJogos)





//4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//4 e 5 se completam
//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

/*
const validarJogo = (obj) => {
    if (obj.remasterOrRemake){
        todosOsJogos.push(obj)
        console.log (`${obj.serie}: ${obj.title} adicionado com sucesso`)
       } else {
           console.log (`Não foi possível adicionar ${obj.serie}: ${obj.title}`)
           //alert (`Não foi possível adicionar ${obj.serie}: ${obj.title}`)
       }
}
validarJogo(jogo1)
validarJogo(jogo2)
validarJogo(jogo3)

console.log (todosOsJogos)
*/





///////////////////////////////////////////////////////////////////////
////////////////////////////// SEMANA 3 ///////////////////////////////
///////////////////////////////////////////////////////////////////////

//1. [ ] Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

/*
for (let i in genres) {
    todosOsGeneros.push(array[i])
}
*/


/*
console.log (`Título: ${series1} - ${title1}\n
Gênero: ${genre1}\n
Sinopse: "${sinopse1}"\n
Ano de lançamento: ${releaseDate1}\n
Plataformas disponíveis: ${availablePlataform1}\n
Nota dos críticos: ${criticReview1}\n
Nota do público: ${publicReview1}\n
Tem em PT-BR? ${temEmBr1}
Tem remaster ou remake? ${remasterOrRemake1}
É uma sequência? ${sequel1}
`)
*/





//2. [V] Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

/*
console.log("----------------------------------------")
for (let i in jogo1) {
    console.log(`${i}: ${jogo1[i]}`)
}
console.log("----------------------------------------")
*/





//3. [V] Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

function relatorio(objeto) {
    //relatorio
    console.log(`\n`)
    for (let i in objeto) {
        console.log(`${i}: ${objeto[i]}`)
    }

}
//Para fazer funcionar, descomente:
//relatorio(jogo1)





//4. [V] Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

stringParametro = { serie: series[0] }
const resultadoPesquisa4 = []

//Jogo Errado para verificar se o filtro está funcionando:
jogoErrado = {
    serie: series[1],
    genre: `${genres[0]}`,
    sinopse: "Joguin de inseto",
    releaseDate: 2017,
    criticReview: 10,
    publicReview: 10,
    availablePlataform: `${platforms[3]}`,
    temEmBr: true,
    remasterOrRemake: false,
    sequel: false
}

//Inserindo o intruso
todosOsJogos.push(jogoErrado)

const filtro = (objetos, parametro) => {
    //colocar dentro de um loop de verificacao
    for (let i in objetos) {
        if (objetos[i].serie === parametro.serie) {
            resultadoPesquisa4.push(objetos)
            //Mensagem para verificar se funcionou:
            //console.log("YES")
        }
    }
}
//Para fazer funcionar, descomente:
//filtro(todosOsJogos, stringParametro)
//console.log(resultadoPesquisa4)