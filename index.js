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
    console.log(jogadora1)

    jogadora2 = {
    tenista2: "Laura Pigossi", 
    idade: 28,
    posicaoRanking2: 100,
    vencedoraGrandslam2: false,
    torneiosVencidos2: ["ITF São Paulo, Brasil", "ITF Cairo, Egito","ITF Hammamet"]
    }
    console.log(jogadora2)

    jogadora3 = {
    tenista3: "Carolina Meligeni Alves",
    idade: 26,
    posicaoRanking3: 175,
    vencedoraGrandeslam3: false,
    torneiosVencidos3: ["ITF São José do Rio Preto, Brasil", "ITF São Paulo, Brasil", "ITF Itu, Brasil"]
    }
    console.log(jogadora3)

    jogadora4 = {
    tenista4: "Gabriela Cé",
    idade: 29,
    posicaoranking4: 286,
    vencedoraGrandslam4: false,
    torneiosVencidos4: ["ITF Campos do Jordão, Brasil", "ITF Santos, Brasil", "ITF Ribeirão Preto, Brasil"]
    }
    console.log(jogadora4)

    const guardarMedia = ((jogadora1.idade + jogadora2.idade + jogadora3.idade + jogadora4.idade)/4)
    console.log("A média de idade das tenistas é", (guardarMedia)) //Média dos numeros de jogadores
    

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
}