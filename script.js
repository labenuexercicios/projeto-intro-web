 
 let jogadores = [{
    nome : "Cristiano Ronaldo",
    idade : 37,
    melhorDoMundo : true,
    clubesJogou : ["Sporting", "Manchester", "Real Madrid", "Juventus"],
    imagem : "./Imagens/Cristiano.jpg"
 },

 {
    nome : "Neymar",
    idade : 30,
    melhorDoMundo : false,
    clubesJogou : ["Santos", "Barcelona", "Psg"],
    imagem : ""
 },

{
    nome : "Messi",
    idade : 35,
    melhorDoMundo : true,
    clubesJogou : ["Barcelona", "Psg"],
    imagem : "./Imagens/Messi.jpg"
},

{
    nome : "Erling Haaland",
    idade : 22,
    clubesJogou : ["Salzburg, Borussia Dortmund, Manchester City"],
    imagem : "./Imagens/Haaland.jpg"
}
];

const soma = 37 + 30 + 35 ;
console.log (`soma dos valores numéricos ${soma}`)

const divisao = 102 / 3 ;
console.log (`média dos valores numéricos ${divisao}`)

const media = 34

// const melhorDoMundo = melhorDoMundoCr7 && melhorDoMundoNey && melhorDoMundoM;
// console.log(melhorDoMundo);

// console.log()


// console.log(jogadorCr7)
// console.log(jogadorNey)
// console.log(jogadorM)

//  const arrayJogadores = []

 
// if(jogadorCr7.melhorDoMundo === true){
//     arrayJogadores.push(jogadorCr7)
// }if(jogadorNey.melhorDoMundo === true){
//     arrayJogadores.push(jogadorNey)
// }if(jogadorM.melhorDoMundo === true){
//     arrayJogadores.push(jogadorM)    
// }else {
//     alert("O item não foi adicionado")
// }

// console.log(arrayJogadores)

// const cristianoRonaldo = arrayJogadores[0]
// console.log(cristianoRonaldo)

// let frase0 = "";
// for( let i = 0; i < cristianoRonaldo.clubesJogou.length; i++ ){
//     console.log(cristianoRonaldo.clubesJogou[i])
//     frase0+=cristianoRonaldo.clubesJogou[i]+",";
//     console.log(frase0)
// }

// const fraseQuebrada = frase0.split(",")
// console.log(fraseQuebrada)

// jogadorCr7.clubesJogou = `${fraseQuebrada}`
// console.log(jogadorCr7)
//semana 5

// const messi = arrayJogadores[1]
// console.log(messi)

// let frase1 = "";
// for( let i = 0; i < messi.clubesJogou.length; i++ ){
//     console.log(messi.clubesJogou[i])
//     frase1+=messi.clubesJogou[i]+",";
//     console.log(frase1)
// }

// const fraseMessi = frase1.split(",")
// console.log(fraseMessi)

// jogadorNey.clubesJogou = `${fraseMessi}`
// console.log(jogadorM)


for(jogadores of jogadores){
    for (propriedade in jogadores){
        console.log(`${propriedade}:${jogadores[propriedade]}`)}
console.log("-----------------");
    }

//semana 6

function devolvendoString (objeto) {
    return objeto;
}

console.log(devolvendoString(`O jogador ${jogadores.nome} jogou nos times ${jogadores.clubesJogou} e tem ${jogadores.idade} anos`))


function buscar (event) {
    const valor = document.getElementById("nome")
     console.log(event.target.value)
}



