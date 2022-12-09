
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


const champions = [
{
name: "Annie",
difficulty: 2,
freeChampionRotation: false,
abilities: ["Piromania", " Desintegrar", " Incinerar", " Escudo Fundido", " Invocar: Tibbers"]
},
{
name: "Viego",
difficulty: 2,
freeChampionRotation: true,
abilities: ["Dominação Monárquica", " Espada do Rei Destruído", " Posse Espectral", " Domínio Atormentado", " Destruidor de corações"]
},
{
name: "Yummi",
difficulty: 1,
freeChampionRotation: true,
abilities: ["Bater e Bloquear", " Projétil Errante", " Você e eu!", " Frenética", " Capítulo Final"]
}
]

const averageDifficulty = (champions[0].difficulty + champions[1].difficulty + champions[2].difficulty)/3;
console.log("Essa é média de dificuldade dos campeões:", Number(averageDifficulty.toFixed(1)));


const checkFreeChampionRotation = champions[0].freeChampionRotation&&champions[1].freeChampionRotation&&champions[0].freeChampionRotation;
console.log("Todos os campeões estão em rotação gratuita?", checkFreeChampionRotation);


//relatório alterado usando laços
function report (champions) {
for(champion of champions){
    for (property in champion){
        console.log(`${property}: ${champion[property]}`)
    }
console.log("----------------------");
}
}

report(champions)

let championsFreeRotation = []

// champions.push(annie, viego, yummi)
// console.log(champions)

function freeRotation (champions) {
    for(i in champions){
    if (champions[i].freeChampionRotation) {
        championsFreeRotation.push(champions[i])
    } else {
        alert( `${champions[i].name} não adicionado(a), pois não faz parte da Rotação Gratuita dessa semana.`)
    }
    }
}

freeRotation(champions)
console.log(championsFreeRotation)

const returnObject = (array, string) => {
    for(i in array){1
        if (array[i].name.toUpperCase() === string.toUpperCase()) {
            return(array[i])
        } else {
            alert( `${string} não foi encontrado.`)
        }
    }
}

console.log(returnObject(champions, "Viego"))