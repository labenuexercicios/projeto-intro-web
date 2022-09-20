// Título ---------------------------
//console.log("Lista de Pets da Casa")

// Brisa ----------------------------
const nomePet1 = {
    nome: "Brisa".toUpperCase(),
    idade: 9,
    especie: "Canina",
    raca: "Pastor Alemão",
    vacina: confirm(`Brisa tomou vacina?`),
    arrayBriquedos: ["Bolinha", "orelha de boi", " ossinho."]
};

//console.log(nomePet1)

// Janis ----------------------------
const nomePet2 = {
    nome: "Janis".toUpperCase(),
    idade: 8,
    especie: "Felina",
    raca: "SRD",
    vacina: confirm(`Janis tomou vacina?`),
    arrayBriquedos: ["Caixa de papelão", " arranhador de tecido", " ervinha de gato."]
};

//console.log(nomePet2)

// Lua ----------------------------
const nomePet3 = {
    nome: "Lua".toUpperCase(),
    idade: 2,
    especie: "Canina",
    raca: "Shin Tzu",
    vacina: confirm(`Lua tomou vacina?`),
    arrayBriquedos: ["Bolinha", " ossinho", " orelha de boi", " ursinho."]
}; 

//console.log(nomePet3)

// Marilyn ----------------------------
const nomePet4 = {
    nome: "Marilyn".toUpperCase(),
    idade: 7,
    especie: "Felina",
    raca: "SRD",
    vacina: confirm(`Marilyn tomou vacina?`), 
    arrayBriquedos: ["Caixa de papelão", " barbante enrolado", " erva de gato", " bolinha de lã."]
};

//console.log(nomePet4)

//média
let mediaPets = (nomePet1.idade + nomePet2.idade + nomePet3.idade + nomePet4.idade) / 4

console.log(`Média de Idade dos meus pets: ${mediaPets}`)

//verificar booleanos
const verificarVacinas = nomePet1.vacina && nomePet2.vacina && nomePet3.vacina && nomePet4.vacina
console.log(`Todas vacinadas? ${verificarVacinas}`)

//array pra guardar os objetos

const todosPets = []

if (nomePet1.vacina) {
    todosPets.push(nomePet1)
    //console.log(`Brisa está vacinada.`)
} else {
    alert(`Brisa não foi vacinada!`)
}

if (nomePet2.vacina) {
    todosPets.push(nomePet2)
    //console.log(`Janis está vacinada.`)
} else {
    alert(`Janis não foi vacinada!`)
}

if (nomePet3.vacina) {
    todosPets.push(nomePet3)
    //console.log(`Lua está vacinada.`)
} else {
    alert(`Lua não foi vacinada!`)
}

if (nomePet4.vacina) {
    todosPets.push(nomePet4)
    //console.log(`Marilyn está vacinada.`)
} else {
    alert(`Marilyn não foi vacinada!`)
}

console.log(todosPets)

//valores da propriedade array do objeto em uma mesma string

console.log("=====EX01 - NOVO ARRAY STRING=====")

// let stringPet1 = nomePet1.arrayBriquedos.join()
// let stringPet2 = nomePet2.arrayBriquedos.join()
// let stringPet3 = nomePet3.arrayBriquedos.join()
// let stringPet4 = nomePet4.arrayBriquedos.join()

// console.log(stringPet1)
// console.log(stringPet2)
// console.log(stringPet3)
// console.log(stringPet4)

for (let i = 0; i< todosPets.length; i++){
    console.log(todosPets[i].nome)
    console.log(todosPets[i].idade)
    console.log(todosPets[i].especie)
    console.log(todosPets[i].raca)
    console.log(todosPets[i].vacina)
    console.log(todosPets[i].arrayBriquedos.join())
}

// let arrayStringPets = []

// for (let i = 0; i< todosPets.length; i++){
//     arrayStringPets.push(todosPets[i].nome) 
//     arrayStringPets.push(todosPets[i].idade)
//     arrayStringPets.push(todosPets[i].especie)
//     arrayStringPets.push(todosPets[i].raca)
//     arrayStringPets.push(todosPets[i].vacina)
//     arrayStringPets.push(todosPets[i].arrayBriquedos.join())
// }

// console.log(arrayStringPets)

console.log("=====EX02 - LOOP ARRAY STRING=====")

//Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir 
// individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. 
// Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

for(pet of todosPets){
    for (let i in pet){
        console.log(`${i}: ${pet[i]}`)
    }
    //console.log("----------------------");
}

// let stringPets = []

//     for (let i in todosPets){
//         stringPets.push(`${Number(i)+1}: ${todosPets[i].arrayBriquedos}`)
//         console.log("Nome:",todosPets[i].nome.toUpperCase(),"\nIdade:", 
//         todosPets[i].idade, "\nEspécie:",todosPets[i].especie,"\nRaça:", 
//         todosPets[i].raca,"\nBrinquedos:", todosPets[i].arrayBriquedos.join())
//     }

//Crie uma função que receba como parâmetro um objeto, e devolva a string 
//do relatório com os dados do objeto.

console.log("=====EX03 - FUNÇÃO RECEBE OBJETO=====")

//         console.log("Nome:",todosPets[i].nome.toUpperCase(),"\nIdade:", 
//         todosPets[i].idade, "\nEspécie:",todosPets[i].especie,"\nRaça:", 
//         todosPets[i].raca,"\nBrinquedos:", todosPets[i].arrayBriquedos.join())
//     }

// const comMap = copiaTodosPets.map((novoPetz) => {
//     return novoPetz.join()
// })

// console.log(copiaTodosPets(todosPets))

const funcaoPets = (novoPets) => {
    for (let i = 0; i <todosPets.length; i++){
        console.log(`${novoPets[i].nome}, ${novoPets[i].idade}, ${novoPets[i].especie}, ${novoPets[i].raca}, ${novoPets[i].vacina}, ${novoPets[i].arrayBriquedos}`)
    }  
}

funcaoPets(todosPets)

//Crie uma função que recebe um array de objetos e uma string. 
//Esta função deve retornar um objeto, e o objeto 
// retornado deve possuir apenas os itens que tenham o nome/título igual 
//à string passada como parâmetro. Caso não exista um item, exiba um 
//ALERT indicando que nenhum item foi encontrado.

console.log("=====EX04 - FUNÇÃO RECEBE OBJETO=====")

const funcaoDupla = (objeto, buscaItem) =>{
    for (let i in todosPets){
        if (todosPets[i].nome === buscaItem){
            return objeto[i]
            // Vazio
        // }else if(todosPets[i].idade === buscaItem){
        //     //Vazio
        // }else if(todosPets[i].especie === buscaItem){ 
        //     //Vazio
        // }else if(todosPets[i].raca === buscaItem){
        //     //Vazio
        // }else if(todosPets[i].vacina === buscaItem){
        //     //Vazio
        // }else if(todosPets[i].arrayBriquedos === buscaItem){
        //     //Vazio
        // }else{
            
        }}
        return alert(`Nenhum pet foi encontrado!`) 
    }

    console.log(funcaoDupla(todosPets, "BRISA"))

    