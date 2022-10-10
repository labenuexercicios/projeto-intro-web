

const allAgentes = []

reyna = {
    nome: ("Reyna"),
    idade: (25),
    classe: ("Duelista"),
    existe: (true),
    habilidades: ["Comedora de Alma", "Intagibilidade", "Olho que cega", "Eles vão temer"]
}

viper = {
    nome: ("Viper"),
    idade: (30),
    classe: ("Controlador"),
    existe: (true),
    habilidades: ["Peido Tenebroso", "Parede de fumaça", "Veneninho Slime", "Bob Marley"],
}

sova = {
    nome: ("Sova"),
    idade: (33),
    classe: ("Iniciador"),
    existe: (true),
    habilidades: ["Flecha ricochete", "Flecha (não vai subir ninguém)", "Drone Abelha", "Não Existe Fusca!!!"]
}


const media = (sova.idade + reyna.idade + viper.idade) / 3
const existe = (sova.existe && reyna.existe && viper.existe)

console.log(media)
console.log(existe)

// SEMANA 2.2

// SEMANA 4.2 
if (sova.existe) {
    allAgentes.push(reyna)
} else {
    alert("Não foi adicionado ao array porque o agente não existe.")
}
if (reyna.existe) {
    allAgentes.push(viper)
} else {
    alert("Não foi adicionado ao array porque o agente não existe.")
}
if (viper.existe) {
    allAgentes.push(sova)
} else {
    alert("Não foi adicionado ao array porque o agente não existe.")
}

console.log(allAgentes)

// // SEMANA 5
let stringAgentes1 = ``
for (i in reyna.habilidades) {
    stringAgentes1 += `${reyna.habilidades[i]}, `
}

console.log(stringAgentes1)

let stringAgentes2 = ``
for (i in sova.habilidades) {
    stringAgentes2 += `${sova.habilidades[i]}, `
}

console.log(stringAgentes2)

let stringAgentes3 = ``
for (i in viper.habilidades) {
    stringAgentes3 += `${viper.habilidades[i]}, `
}

console.log(stringAgentes3)

// console.log(nome.toUpperCase(), idade1, classe1, existe1, habilidade1)
// console.log(nome.toUpperCase(), idade2, classe2, existe2, habilidade2)
// console.log(nome.toUpperCase(), idade3, classe3, existe3, habilidade3)

// SEMANA 5.2 
const agentes = []
agentes.push(reyna,sova,viper)

for(let i in allAgentes){
    for (j in allAgentes[i]){
        console.log(allAgentes[i][j])
    }
    
}

// SEMANA 6.1 

function imprimiAgente (objeto){
    let stringObjeto = ``
    stringObjeto = objeto
    console.log(stringObjeto)
}
 
imprimiAgente(reyna)

// SEMANA 6.2

function retornaAgente (allAgentes,string){
    let retornaAgente = {}
    for(let i in allAgentes){
        for(let j in allAgentes[i]){
            if(allAgentes[i][j]===string){
                retornaAgente = allAgentes[i]
            }
        }
    }
    console.log(retornaAgente)
} 

retornaAgente(allAgentes,"")












// const verificaExiste = (objeto, array) => {
//     if (objeto.existe) {
//         array.push(objeto)
//     } else {
//         alert("Não foi adicionado ao array porque o booleano é falso.")
//     }
// }
// verificaExiste(reyna, allAgentes);
// verificaExiste(sova, allAgentes);
// verificaExiste(viper, allAgentes);

// for (i in allAgentes) {
//     let stringsAgentes = ` Nome: ${allAgentes[i].nome.toUpperCase()}\n Idade: ${allAgentes[i].idade}\n Classe: ${allAgentes[i].classe}\n Existe: ${allAgentes[i].existe}\n`

//     for (j of allAgentes[i].habilidades) {
//         stringsAgentes += ` ${j},`
//     }
//     console.log(stringsAgentes)
// }

// // A função recebe um objeto e devolve a string do relátorio.

// const stringObjeto = (objeto) => {
//     let string = ""
//     for (i in objeto) {
//         string += i + ":" + objeto[i] + "\n"
//     }return string

// }

// console.log(stringObjeto(sova)) 

