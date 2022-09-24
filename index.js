// 4 Melhores tenistas do Brasil que competem na atualidade

//===========SEMANA 1====================================================

// const tenista1 =  "Beatriz Haddad Maia"
// const idade1 = 26
// const posicaoRanking1 = 15
// const vencedoraGrandslam1 = false
// const torneiosVencidos1 = ["WTA 250 de Nottingham", "WTA 125 de Saint Malo", " WTA 500 de Sydney"]

// const tenista2 = "Laura Pigossi" 
// const idade2 = 28
// const posicaoRanking2 = 100
// const vencedoraGrandslam2 = false
// const torneiosVencidos2 = ["ITF São Paulo, Brasil", "ITF Cairo, Egito","ITF Hammamet"]

// const tenista3 = "Carolina Meligeni Alves"
// const idade3 = 26
// const posicaoRanking3 = 175
// const vencedoraGrandeslam3 = false
// const torneiosVencidos3 = ["ITF São José do Rio Preto, Brasil", "ITF São Paulo, Brasil", "ITF Itu, Brasil"]

// const tenista4 = "Gabriela Cé"
// const idade4 = 29
// const posicaoranking4 = 286
// const vencedoraGrandslam4 = false
// const torneiosVencidos4 = ["ITF Campos do Jordão, Brasil", "ITF Santos, Brasil", "ITF Ribeirão Preto, Brasil"]



// console.log(`"São vencedoras de Grand Slam? " ${ vencedoraGrandslam1 && vencedoraGrandslam2 && vencedoraGrandeslam3 && vencedoraGrandslam4}`)

// console.log(`${tenista1.toUpperCase()}
// "Idade: " ${idade1}
// "Qual sua posição no Ranking?" ${posicaoRanking1}
// "É vencedora de Grand Slam?" ${vencedoraGrandslam1}
// "Quais torneios a tenista já venceu? ${torneiosVencidos1}`)

// console.log(`${tenista2.toUpperCase()}
// "Idade: " ${idade2}
// "Qual sua posição no Ranking?" ${posicaoRanking2}
// "É vencedora de Grand Slam?" ${vencedoraGrandslam2}
// "Quais torneios a tenista já venceu? ${torneiosVencidos2}`)

// console.log(`${tenista3.toUpperCase()}
// "Idade: " ${idade3}
// "Qual sua posição no Ranking?" ${posicaoRanking3}
// "É vencedora de Grand Slam?" ${vencedoraGrandslam3}
// "Quais torneios a tenista já venceu? ${torneiosVencidos3}`)

// console.log(`${tenista4.toUpperCase()}
// "Idade: " ${idade4}
// "Qual sua posição no Ranking?" ${posicaoRanking4}
// "É vencedora de Grand Slam?" ${vencedoraGrandslam4}
// "Quais torneios a tenista já venceu? ${torneiosVencidos4}`)

//==========================SEMANA 2===========================================================

jogadora1 = {

    tenista1: "Beatriz Haddad Maia",
    idade: 26,
    posicaoRanking1: 15,
    vencedoraGrandslam1: false,
    torneiosVencidos1: ["WTA 250 de Nottingham", "WTA 125 de Saint Malo", " WTA 500 de Sydney"]
    }
    // console.log(jogadora1)

    jogadora2 = {

    tenista2: "Laura Pigossi", 
    idade: 28,
    posicaoRanking2: 100,
    vencedoraGrandslam2: false,
    torneiosVencidos2: ["ITF São Paulo, Brasil", "ITF Cairo, Egito","ITF Hammamet"]
    }
    // console.log(jogadora2)

    jogadora3 = {
    tenista3: "Carolina Meligeni Alves",
    idade: 26,
    posicaoRanking3: 175,
    vencedoraGrandeslam3: false,
    torneiosVencidos3: ["ITF São José do Rio Preto, Brasil", "ITF São Paulo, Brasil", "ITF Itu, Brasil"]
    }
    // console.log(jogadora3)

    jogadora4 = {
    tenista4: "Gabriela Cé",
    idade: 29,
    posicaoranking4: 286,
    vencedoraGrandslam4: false,
    torneiosVencidos4: ["ITF Campos do Jordão, Brasil", "ITF Santos, Brasil", "ITF Ribeirão Preto, Brasil"]
    }
    // console.log(jogadora4)

    // const guardarMedia = ((jogadora1.idade + jogadora2.idade + jogadora3.idade + jogadora4.idade)/4)
    // console.log("A média de idade das tenistas é", (guardarMedia)) //Média dos numeros de jogadores
    

const melhoresTenistasBra = [] //array para guardar objetos

melhoresTenistasBra.push(jogadora1, jogadora2, jogadora3,jogadora4)
console.log(melhoresTenistasBra)

// if (jogadora1.vencedoraGrandslam1 === true){
//     melhoresTenistasBra.push(jogadora1)
// } else {
//     alert(`Tenista ${jogadora1.tenista1} não é vencedora de GranSlam`)

// }

// if (jogadora2.vencedoraGrandslam2 === true) {
//     melhoresTenistasBra.push(jogadora2)
// }else {
//     alert(`Tenista ${jogadora2.tenista2} não é vencedora de GranSlam`)
// }

// if (jogadora3.vencedoraGrandeslam3 === true) {
//     melhoresTenistasBra.push(jogadora2)
// }else {
//     alert(`Tenista ${jogadora3.tenista3} não é vencedora de GranSlam`)
// }

// if (jogadora4.vencedoraGrandslam4 === true) {
//     melhoresTenistasBra.push(jogadora2)
// }else {
//     alert(`Tenista ${jogadora4.tenista4} não é vencedora de GranSlam`)
// }

//=====================SEMANA3=============================================================


// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
// 2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
//ja ta feito com o 1

//===============jogadora1===============

for(let i in jogadora1.torneiosVencidos1) {
    stringTorneiosVencidos1 = jogadora1.torneiosVencidos1.join()
}
// console.log(stringTorneiosVencidos1)

console.log(`tenista1: ${jogadora1.tenista1} \n idade: ${jogadora1.idade} \n posicaoranking1: ${jogadora1.posicaoRanking1} \n vencedoraGrandslam: ${jogadora1.vencedoraGrandslam1} \n torneiosVencidos1: ${jogadora1.torneiosVencidos1}`)

// //=============jogadora2================

for(let i in jogadora2.torneiosVencidos2) {
    stringTorneiosVencidos2 = jogadora2.torneiosVencidos2.join()
}
// console.log(stringTorneiosVencidos1)

console.log(`tenista2: ${jogadora2.tenista2} \n idade: ${jogadora2.idade} \n posicaoranking2: ${jogadora2.posicaoRanking2} \n vencedoraGrandslam: ${jogadora2.vencedoraGrandslam2} \n torneiosVencidos2: ${jogadora2.torneiosVencidos2}`)

// //=============jogadora3================

for(let i in jogadora3.torneiosVencidos3) {
    stringTorneiosVencidos3 = jogadora3.torneiosVencidos3.join()
}
// console.log(stringTorneiosVencidos1)

console.log(`tenista3: ${jogadora3.tenista2} \n idade: ${jogadora3.idade} \n posicaoranking3: ${jogadora3.posicaoRanking3} \n vencedoraGrandslam: ${jogadora3.vencedoraGrandslam3} \n torneiosVencidos3: ${jogadora3.torneiosVencidos3}`)

// //=============jogadora4================

for(let i in jogadora4.torneiosVencidos4) {
    stringTorneiosVencidos4 = jogadora4.torneiosVencidos4.join()
}
// console.log(stringTorneiosVencidos1)

console.log(`tenista4: ${jogadora4.tenista4} \n idade: ${jogadora4.idade} \n posicaoranking4: ${jogadora4.posicaoRanking4} \n vencedoraGrandslam: ${jogadora4.vencedoraGrandslam4} \n torneiosVencidos4: ${jogadora4.torneiosVencidos4}`)



// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
//vou chamar a array que foi criada la em cima

const funcaoJogadoras= (tenista1) => {
    for(let i in tenista1) {
        console.log(` ${jogadora1.tenista1} \n ${jogadora1.idade} \n ${jogadora1.posicaoRanking1} \n ${jogadora1.vencedoraGrandslam1} \n ${jogadora1.torneiosVencidos1}`)
    }
}
funcaoJogadoras()

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

let todasJogadoras= [
    {

        tenista: "Beatriz Haddad Maia",
        idade: 26,
        posicaoRanking1: 15,
        vencedoraGrandslam1: false,
        torneiosVencidos1: ["WTA 250 de Nottingham", "WTA 125 de Saint Malo", " WTA 500 de Sydney"]
        },
    
        {
    
        tenista: "Laura Pigossi", 
        idade: 28,
        posicaoRanking2: 100,
        vencedoraGrandslam2: false,
        torneiosVencidos2: ["ITF São Paulo, Brasil", "ITF Cairo, Egito","ITF Hammamet"]
        },
       
    {
        tenista: "Carolina Meligeni Alves",
        idade: 26,
        posicaoRanking3: 175,
        vencedoraGrandeslam3: false,
        torneiosVencidos3: ["ITF São José do Rio Preto, Brasil", "ITF São Paulo, Brasil", "ITF Itu, Brasil"]
        },
       

        {
        tenista: "Gabriela Cé",
        idade: 29,
        posicaoranking4: 286,
        vencedoraGrandslam4: false,
        torneiosVencidos4: ["ITF Campos do Jordão, Brasil", "ITF Santos, Brasil", "ITF Ribeirão Preto, Brasil"]
        }
]

function verificacaoNomes(todasJogadoras, nome){
    let itensEncontrados = 0
    for(i of todasJogadoras){
    if (i.tenista.toLowerCase() === nome.toLowerCase()){
        console.log(i)
        itensEncontrados++
    }
    
    }
    if(itensEncontrados === 0){
        alert("Nenhum item encontrado!")
    }
}

let perguntaJogadora= prompt("Digite o nome de uma tenista brasileira")

verificacaoNomes(todasJogadoras,perguntaJogadora)



