//SEMANA 1
/*
let filme1 = "De Repente Uma Família".toUpperCase();
let genero1 = "comédia/drama";
let anoDeLançamento1 = 2018;
let duracaoEmMinutos1 = 119;
let ehRemake1 = false;
let filmesSemelhantes1 = ['\"O Que Esperar Quando Você Está Esperando\", \"Cartas Para Julieta\", \"Ensinando A Viver\"']

let filme2 = "Tropa De Elite".toUpperCase();
let genero2 = "policial/ação";
let anoDeLançamento2 = 2007;
let duracaoEmMinutos2 = 115;
let ehRemake2 = true;
let filmesSemelhantes2 = ['\"O Rei De Nova York\", \"O Resgate\", \"Atraídos Pelo Crime\"']

let filme3 = "O Sorriso Da Morte".toUpperCase();
let genero3 = "terror";
let anoDeLançamento3 = 2022;
let duracaoEmMinutos3 = 115;
let ehRemake3 = false;
let filmesSemelhantes3 = ['\"Mar Do Medo\", \"Gritos Do Além\", \"Predadores\"']

const mediaItem1 = (anoDeLançamento1 + duracaoEmMinutos1)/2; 
console.log(mediaItem1);

const mediaItem2 = (anoDeLançamento2 + duracaoEmMinutos2)/2; 
console.log(mediaItem2);

const mediaItem3 = (anoDeLançamento3 + duracaoEmMinutos3)/2; 
console.log(mediaItem3);

let verificaRemakes = ehRemake1 && ehRemake2 && ehRemake3;
console.log(verificaRemakes);

console.log(`${filme1} \ngênero: ${genero1} \nano de lançamento: ${anoDeLançamento1} \nduração: ${duracaoEmMinutos1} minutos \nremake: ${ehRemake1} \nfilmes semelhantes: [${filmesSemelhantes1}]`);

console.log("");

console.log(`${filme2} \ngênero: ${genero2} \nano de lançamento: ${anoDeLançamento2} \nduração: ${duracaoEmMinutos2} minutos \nremake: ${ehRemake2} \nfilmes semelhantes: [${filmesSemelhantes2}]`);

console.log("");

console.log(`${filme3} \ngênero: ${genero3} \nano de lançamento: ${anoDeLançamento3} \nduração: ${duracaoEmMinutos3} minutos \nremake: ${ehRemake3} \nfilmes semelhantes: [${filmesSemelhantes3}]`);

console.log("")
console.log("")
*/

//SEMANA 2
/////PARTE 01
//1. Transforme os itens que criamos nas últimas semanas em objetos.


let filmes =  [
{
    nome: "De Repente Uma Família",
    genero: "Comédia/Drama",
    anoDeLancamento: 2018,
    duracaoEmMinutos: 119,
    filmesSemelhantes: ["O Que Esperar Quando Você Está Esperando, Cartas  Para Julieta, Ensinando A Viver"],
    ehRemake: false,
  /*string:*/
},

{
    nome: "Tropa De Elite",
    genero: "Policial/Ação",
    anoDeLancamento: 2007,
    duracaoEmMinutos: 115,
    filmesSemelhantes: ["O Rei De Nova York, O Resgate", "Atraídos Pelo Crime"],
    ehRemake: true,
  /*string:*/
},

{
    nome: "Sorria",
    genero: "Terror",
    anoDeLancamento: 2022,
    duracaoEmMinutos: 105,
    filmesSemelhantes: ["Mar Do Medo, Gritos Do Além, Predadores"],
    ehRemake: false,
   /* string:*/
}]
/*
console.log(`Nome: ${filmes[0].nome}`)
console.log(`Gênero: ${filmes[0].genero}`)
console.log(`Ano de lançamento: ${filmes[0].anoDeLancamento}`)
console.log(`Duracao em minutos: ${filmes[0].duracaoEmMinutos}"`)
console.log(`Filmes semelhantes: "${filmes[0].filmesSemelhantes}`)
console.log(`EhRemake: ${filmes[0].ehRemake}`)

console.log("")

console.log(`Nome: ${filmes[1].nome}`)
console.log(`Gênero: ${filmes[1].genero}`)
console.log(`Ano de lançamento: ${filmes[1].anoDeLancamento}`)
console.log(`Duracao em minutos: ${filmes[1].duracaoEmMinutos}`)
console.log(`Filmes semelhantes: "${filmes[1].filmesSemelhantes}"`)
console.log(`EhRemake: ${filmes[1].ehRemake}`)

console.log("")

console.log(`Nome: ${filmes[2].nome}`)
console.log(`Gênero: ${filmes[2].genero}`)
console.log(`Ano de lançamento: ${filmes[2].anoDeLancamento}`)
console.log(`Duracao em minutos: ${filmes[2].duracaoEmMinutos}`)
console.log(`Filmes semelhantes: "${filmes[2].filmesSemelhantes}"`)
console.log(`EhRemake: ${filmes[2].ehRemake}`)

console.log("")
console.log("")


//PARTE 02 
//Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
const meusFilmes = [];

//PARTE 03
//Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push().

//meusFilmes.push(filme1, filme2, filme3);
//console.log(meusFilmes);

//PRTE 04 
//Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado /ao array se a propriedade booleana for true;

const verificando = filmes.filter((item) => {
    return item.ehRemake === true;
})

console.table(verificando);

console.log("")
console.log("")

*/
//semana 3
//////////////PARTE 01
//1. Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
const transformandoString = (filmes) => {
    for(let i in filmes){
       console.log(filmes[i].filmesSemelhantes = filmes[i].filmesSemelhantes.join());
        console.log("");
    }
}

transformandoString(filmes);

console.log("");
console.log("");
/*
//////////////PARTE 02
//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
for(filmes of filmes){
    for(propriedade in filmes){
        console.log(`${propriedade}: ${filmes[propriedade]}`)
    }
    console.log("")
    console.log("")
}
//////////////PARTE 03
//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
function objetoParametro (filmes) {
 for(retornaObjeto of filmes){
    for(objeto in retornaObjeto){
        console.log(`${objeto}: ${retornaObjeto[objeto].toString()}`)
    }
 }
}

objetoParametro(filmes)

//////////////PARTE 04
//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

function recebeArray (filmes, titulo){
    let novaVerificacao = "";
    for(let i in filmes){
        if(filmes[i].nome.includes(titulo)){
            novaVerificacao = filmes[i].nome;
            console.log(novaVerificacao);
             break;
        }
    }
    if(novaVerificacao == ""){
        alert("Nenhum item foi encontrado")
    }
};

recebeArray(filmes, "Tropa De Elite")
*/

//SEMANA 04







