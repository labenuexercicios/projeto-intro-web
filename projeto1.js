//Cientistas mulheres incriveis

const nome1 = "Katie Bouman"
const descoberta1 = "Primeira foto registrada de um buraco negro"
const idadeDescoberta1 = 29
const anoDescoberta1 = 2019
const pais1 = "Estados Unidos"
const viva1 = true
//array com caracteristicas do item
const areaPesquisa1 = ["fotografia", "universo", "algoritimo"]
//utilizando console.log(), mostre todos os dados de cada um dos itens criados
console.log(`${nome1.toUpperCase()} \n${descoberta1} \n${idadeDescoberta1} \n${anoDescoberta1} \n${pais1} \n${viva1} \n${areaPesquisa1}`)


const nome2 = "Ada Lovelace"
const descoberta2 = "Desenvolveu o primeiro algoritmo que foi processado por uma máquina"
const idadeDescoberta2 = 28
const anoDescoberta2 = 1843
const pais2 = "Reino Unido"
const viva2 = true
//array com caracteristicas do item
const areaPesquisa2 = ["matematica", "programacao", "computador"]
//utilizando console.log(), mostre todos os dados de cada um dos itens criados
console.log(`${nome2.toUpperCase()} \n${descoberta2} \n${idadeDescoberta2} \n${anoDescoberta2} \n${pais2} \n${viva2} \n${areaPesquisa2}`)


const nome3 = "Maria Curie"
const descoberta3 = "Descobriu elementos químicos, como o polônio e rádio, que auxiliavam em tratamentos médicos. Foi a primeira mulher a ganhar o Prêmio Nobel de Física"
const idadeDescoberta3 = 31
const anoDescoberta3 = 1898
const pais3 = "Polônia"
const viva3 = false
//array com caracteristicas do item
const areaPesquisa3 = ["quimica", "medicina", "radioatividade"]
//utilizando console.log(), mostre todos os dados de cada um dos itens criados
console.log(`${nome3.toUpperCase()} \n${descoberta3} \n${idadeDescoberta3} \n${anoDescoberta3} \n${pais3} \n${viva3} \n${areaPesquisa3}`)


const nome4 = "Jaqueline Goes de Jesus"
const descoberta4 = "Sequenciou o genoma da COVID-19 após 48 horas do primeiro caso no Brasil"
const idadeDescoberta4 = 32
const anoDescoberta4 = 2020
const pais4 = "Brasil"
const viva4 = true
//array com caracteristicas do item
const areaPesquisa4 = ["biologia", "virus", "genetica"]
//utilizando console.log(), mostre todos os dados de cada um dos itens criados
console.log(`${nome4.toUpperCase()} \n${descoberta4} \n${idadeDescoberta4} \n${anoDescoberta4} \n${pais4} \n${viva4} \n${areaPesquisa4}`)


const nome5 = "Hedy Lamarr"
const descoberta5 = "Criou o WiFi e um aparelho que fazia interferência em rádios (usado para despistar os radares nazistas na 2ª Guerra Mundial). Além de também ser atriz e cineasta"
const idadeDescoberta5 = 28
const anoDescoberta5 = 1942
const pais5 = "Austria"
const viva5 = false
//array com caracteristicas do item
const areaPesquisa5 = ["tecnologia", "cinema", "computador"]  
//utilizando console.log(), mostre todos os dados de cada um dos itens criados
console.log(`${nome5.toUpperCase()} \n${descoberta5} \n${idadeDescoberta5} \n${anoDescoberta5} \n${pais5} \n${viva5} \n${areaPesquisa5}`)


//Média entre os valores numéricos respectivos de cada item (idades)
const media = (idadeDescoberta1 + idadeDescoberta2 + idadeDescoberta3 + idadeDescoberta4 + idadeDescoberta5)/5
console.log(`Media das idades das mulheres ciêntistas: ${media}`)


//Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras
const verificarEstaViva = viva1 && viva2 && viva3 && viva4 && viva5
console.log(verificarEstaViva)
