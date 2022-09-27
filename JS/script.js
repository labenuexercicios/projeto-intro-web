

const allAgentes = [] 

 reyna = {
    nome: ("Reyna"),
    idade: (25),
    classe: ("Duelista"),
    existe: (true),
    habilidades: ["Comedora de Alma", "Intagibilidade rsrs", "Olho que Cega", "Mulé fico brava"]
}

viper = {
    nome: ("Viper"),
    idade: (30),
    classe: ("Controladora"),
    existe: (true),
    habilidades2: ["Peido Tenebroso", "Parede de fumaça", "Veneninho Slime", "Bob Marley"],
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

// console.log(nome1.toUpperCase(), idade1, classe1, existe1, habilidade1)
// console.log(nome2.toUpperCase(), idade2, classe2, existe2, habilidade2)
// console.log(nome3.toUpperCase(), idade3, classe3, existe3, habilidade3)


// if(reyna.existe){
//     allAgentes.push(reyna)
// }else{
//     alert("Não foi adicionado o ao array porque o booleano é falso.")
// }

const verificaExiste = (objeto,array) => {
    if(objeto.existe){
        array.push(objeto)
    }else{
        alert("Não foi adicionado o ao array porque o booleano é falso.")
    }
} 
verificaExiste(reyna,allAgentes);
verificaExiste(sova,allAgentes);
verificaExiste(viper,allAgentes);





