// Projeto Semana: 1
// Item: Jogos Eletronicos

//Parte 1: Caracteristicas de jogos eletronicos que eu gosto.

"Nome" //Qual nome do jogo eletronico?
"Tempo"; // Horas jogadas?
"Massive Multiplayer Online"; // Ele e um Massively Multiplayer Online? True=Sim/False=Nao
"Estilo"; // Quais os 3 principais estilos de jogos presente nele?

//Parte 2: Tres conjuntos

const nome1 = "Frostpunk"
const tempo1 = 135
const massiveMultiplayer1 = false

const nome2 = "Hunt: Showdown"
const tempo2 = 213
const massiveMultiplayer2 = false

const nome3 = "Tibia"
const tempo3 = 500
const massiveMultiplayer3 = true

// Parte 3: Media de Tempo

const media = ((tempo1+tempo2+tempo3)/3)
console.log("Media de Horas Jogadas",media)

// Parte 4: Todos valores sao verdadeiros?

const massivo = (massiveMultiplayer1 && massiveMultiplayer2 && massiveMultiplayer3)
console.log("Algum deles nao e um MMO?",massivo)

// Parte 5: Crie Arrays de String

const estilo1 = ["Psicologico","RTS","Offline"]
const estilo2 = ["Terror","FPS","Online"]
const estilo3 = ["Aventura","RPG","Online"]

// Parte 6: Relatorio

console.log(nome1.toUpperCase(),`\n`,"Tempo Jogado",tempo1,`\n`,"E um MMO?",massiveMultiplayer1,`\n`,"Estilo:",estilo1)
console.log(nome2.toUpperCase(),`\n`,"Tempo Jogado",tempo2,`\n`,"E um MMO?",massiveMultiplayer2,`\n`,"Estilo:",estilo2)
console.log(nome3.toUpperCase(),`\n`,"Tempo Jogado",tempo3,`\n`,"E um MMO?",massiveMultiplayer3,`\n`,"Estilo:",estilo3)