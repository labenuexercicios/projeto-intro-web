console.log("semana 1")
//Projeto-integrador - semana 1

//1 pensar em algo (item) contavel e estruturado
//Criar 3 conjuntos de variáveis
const serie1 = "Outlander"
const temporadasOutlander = 6 
const temNaNetflix1 = true
const personagensPrincipais1 = ["Claire Fraser", " Jamie Fraser", " Jonathan Randall"]

const serie2 = "The Handmands Tale"
const temporadasTheHands = 5 
const temNaNetflix2 = false
const personagensPrincipais2 = ["June Osborne", " Serena Joy", " Comandante"]


const serie3 = "Greys Anatomy"
const temporadasGreys = 19
const temNaNetflix3 = false
const personagensPrincipais3 = ["Meredith Grey", " Derek Shepherd"," Cristina Yang"]

//3 fazendo calculo de média dos valores numericos
const mediaDeTemporadas = ((temporadasOutlander+temporadasTheHands+temporadasGreys)/3)
console.log(`A média de quantidade de temporadas de todas as séries é: ${mediaDeTemporadas}`) //imprime 10

//4 Checando se todas as variaveis apresentadas são verdadeiras
const todasTemNaNetflix = temNaNetflix1 && temNaNetflix2 && temNaNetflix3
console.log (todasTemNaNetflix)  // imprime false

//5 Crie mais uma caracteristica para o item que criou (series). Deve ser um array de mesmo tipo de dado

//Comando para Imprimir primeiro dado em maiusculo
const serie1Maiusculo = serie1.toUpperCase()
const serie2Maiusculo = serie2.toUpperCase()
const serie3Maiusculo = serie3.toUpperCase()

//6 imprima todos os dados
console.log("Imprimindo todos os dados:")
console.log (`${serie1Maiusculo} \n Numero de temporadas: ${temporadasOutlander} \n Titulo disponivel no streaming Netflix? ${temNaNetflix1} \n Principais personagens: ${personagensPrincipais1}`) 
console.log (`${serie2Maiusculo} \n Numero de temporadas: ${temporadasTheHands} \n Titulo disponivel no streaming Netflix? ${temNaNetflix2} \n Principais personagens: ${personagensPrincipais2}`) 
console.log (`${serie3Maiusculo} \n Numero de temporadas: ${temporadasGreys} \n Titulo disponivel no streaming Netflix? ${temNaNetflix3} \n Principais personagens: ${personagensPrincipais3}`)