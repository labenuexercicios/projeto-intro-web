// Título ---------------------------
console.log("Lista de Pets da Casa")

// Brisa ----------------------------
const nomePet1 = {
    nome: "Brisa".toUpperCase(),
    idade: 9,
    especie: "Canina",
    raca: "Pastor Alemão",
    vacina: confirm(`Brisa tomou vacina?`),
    vermifugo: confirm(`Brisa tomou vermifugo?`),
    arrayBriquedos: ["Bolinha", " ossinho."]
};

//console.log(nomePet1)

// Janis ----------------------------
const nomePet2 = {
    nome: "Janis".toUpperCase(),
    idade: 8,
    especie: "Felina",
    raca: "SRD",
    vacina: confirm(`Janis tomou vacina?`),
    vermifugo: confirm(`Janis tomou vermifugo?`),
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
    vermifugo: confirm(`Lua tomou vermifugo?`),
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
    vermifugo: confirm(`Marilyn tomou vermifugo?`),   
    arrayBriquedos: ["Caixa de papelão", " barbante enrolado", " erva de gato", " bolinha de lã."]
};

//console.log(nomePet4)

//média
let mediaPets = (nomePet1.idade + nomePet2.idade + nomePet3.idade + nomePet4.idade) / 4

console.log(`Média de Idade dos meus pets: ${mediaPets}`)

//verificar booleanos
const verificarVacinas = nomePet1.vacina && nomePet2.vacina && nomePet3.vacina && nomePet4.vacina
const verificarVermifugo = nomePet1.vermifugo && nomePet2.vermifugo && nomePet3.vermifugo && nomePet4.vacina

console.log(`Todas vacinadas? ${verificarVacinas}
Todas vermifugadas? ${verificarVermifugo}
`)

//array pra guardar os objetos

const todosPets = []

if ((verificarVacinas === true) && (verificarVermifugo === true)) {
    todosPets.push(nomePet1, nomePet2, nomePet3, nomePet4)
    console.log(`Todos os pets foram vacinados e vermifugados: ${todosPets}`)
} else if ((verificarVacinas === false && verificarVermifugo === false)) {
    alert(`Os pets não foram vacinados e nem vermifugados!`)
    console.log(`Os pets não foram vacinados e nem vermifugados!`)
} else {
    alert(`Os pets não foram vacinados e nem vermifugados!`)
    console.log(`Os pets não foram vacinados e nem vermifugados!`)
}
