//TEMA Series
//Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
// * uma característica String;
// * uma característica Number;
// * uma característica Boolean;
let Himym= {
 nome:"How I met your mother",
 AnoDeLancamento: 2005,
 episodios: 208,
 continuaLancando: false,
 genero:["siticom"," romance"," drama"," comedia"," misterio"],
 notaPessoal: 9.5
}

// console.log(`nome:${nomeHimym}
// ano de lancamento:${AnoDeLancamentoHimym}
// Continua sendo lancado novos episodios? ${continuaLancandoHimym}
// Generos:${generoHimym}`)
//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

let Friends= {
    nome:"Friends",
    AnoDeLancamento: 1994,
    episodios: 236,
    continuaLancando: false,
    genero:["siticom", "romance", "comedia"],
    NotaPessoal: 10
}
// console.log(`nome:${nomeFriends}
// ano de lancamento:${AnoDelancamentoFriends}
// Continua sendo lancado novos episodios? ${continuaLancandoFriends}
// Generos:${generoFriends}`)


let blackMirror= {
    nome:"Black Mirror",
    AnoDeLancamento: 2011,
    episodios: 22,
    continuaLancando: true,
    genero:[" Distopia", " Ficção científica", " Suspense", " Drama", " Sátira", " Ficção especulativa"],
    NotaPessoal:9
}
// console.log(`nome:${nomeBlackMirror}
// ano de lancamento:${AnoDeLancamentoBlackMirror}
// Continua sendo lancado novos episodios? ${continuaLancandoBlackMirror}
// Generos:${generoBlackMirror}`)

//ideia posso tamber criar outro boolean "continua no ar?" ou seja continua na tv aberta ou em programas de streaming.

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const.
const media= (blackMirror.episodios + Himym.episodios + Friends.episodios)/3;
console.log("A media de episodios das 3 series e de: "+ media) 


// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const continuamLancando= (Friends.continuaLancando && Himym.continuaLancando && blackMirror.continuaLancando);
console.log(`Checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras: ${continuamLancando}`)


// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

for (const i in Friends) {
    console.log(`${i}: ${Friends[i]}`)
}
for (const i in Himym) {
    console.log(`${i}: ${Himym[i]}`)
}
for (const i in blackMirror) {
    console.log(`${i}: ${blackMirror[i]}`)
}

// Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é,
//  se é um array de strings, só deve receber strings.
const array= []

//crie uma array para guardar os objetos
if(Friends.continuaLancando===true){
    array.push(Friends)
}else{
    alert('Objeto "friends" nao foi adcionado na array')
}
if(Himym.continuaLancando===true){
    array.push(Himym)
}else{
    alert('Objeto "himym" nao foi adcionado na array')
}
if(blackMirror.continuaLancando===true){
    array.push(blackMirror)
}else{
    alert('objeto nao foi adcionado na array')
}

for (const i in array) {
    console.log(array[i])
}


ArrayParaString=(array) =>{
    for(let i in array){
        for(let j in array){
            let arrayString ="";
        arrayString+= array[i].genero
        console.log(arrayString)
        }
    }
}
ArrayParaString(array)

///semana 4






