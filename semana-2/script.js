
/* Nome: 
Slogan: 
História:
Data de lançamento: 
Função: 
Dificuldade: 
Habilidades: 
Rota sugerida:
Feitiço de Invocador:
Está em rotação gratuita? */


const annie = {
name: "Annie",
difficulty: 2,
freeChampionRotation: false,
abilities: ["Piromania", " Desintegrar", " Incinerar", " Escudo Fundido", " Invocar: Tibbers"]
}

const viego = {
name: "Viego",
difficulty: 2,
freeChampionRotation: true,
abilities: ["Dominação Monárquica", " Espada do Rei Destruído", " Posse Espectral", " Domínio Atormentado", " Destruidor de corações"]
}

const yummi = {
name: "Yummi",
difficulty: 1,
freeChampionRotation: true,
abilities: ["Bater e Bloquear", " Projétil Errante", " Você e eu!", " Frenética", " Capítulo Final"]
}

const averageDifficulty = (annie.difficulty + viego.difficulty + yummi.difficulty)/3;
console.log("Essa é média de dificuldade dos campeões:", Number(averageDifficulty.toFixed(1)));


const checkFreeChampionRotation = annie.freeChampionRotation&&viego.freeChampionRotation&&yummi.freeChampionRotation;
console.log("Todos os campeões estão em rotação gratuita?", checkFreeChampionRotation);



// FULANO
// idade: 33
// verificou email?: false
// projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"]

function relatorio (nome, dificuldade, rotacao, habilidades)
{
    console.log(`${nome.toUpperCase()}
Dificuldade: ${dificuldade}
Está na rotação gratuita? ${rotacao}
Habilidades: ${habilidades}
    `)
}

relatorio(annie.name, annie.difficulty, annie.freeChampionRotation, annie.abilities);
relatorio(viego.name, viego.difficulty, viego.freeChampionRotation, viego.abilities);
relatorio(yummi.name, yummi.difficulty, yummi.freeChampionRotation, yummi.abilities);


let champions = []

// champions.push(annie, viego, yummi)
// console.log(champions)

function freeRotation (champion) {
    if (champion.freeChampionRotation) {
        champions.push(champion)
    } else {
        alert( `${champion.name} não adicionado(a), pois não faz parte da Rotação Gratuita dessa semana.`)
    }
}


freeRotation(annie)
freeRotation(viego)
freeRotation(yummi)
console.log(champions)