//Cientistas mulheres incriveis
//Criei objetos com os dados de cada cientista
const cientista1 = {
    nome: "Katie Bouman",
    descoberta: "Primeira foto registrada de um buraco negro",
    idadeDescoberta: 29,
    anoDescoberta: 2019,
    pais: "Estados Unidos",
    viva: true,
    areaPesquisa: ["fotografia", "universo", "algoritimo"]  //array com caracteristicas (escolhi area de pesquisa)
}

const cientista2 = {
    nome: "Ada Lovelace",
    descoberta: "Desenvolveu o primeiro algoritmo que foi processado por uma máquina",
    idadeDescoberta: 28,
    anoDescoberta: 1843,
    pais: "Reino Unido",
    viva: false,
    areaPesquisa: ["matematica", "programacao", "computador"]
}

const cientista3 = {
    nome: "Maria Curie",
    descoberta: "Descobriu elementos químicos, como o polônio e rádio, que auxiliavam em tratamentos médicos. Foi a primeira mulher a ganhar o Prêmio Nobel de Física",
    idadeDescoberta: 31,
    anoDescoberta: 1898,
    pais: "Polônia",
    viva: false, 
    areaPesquisa: ["quimica", "medicina", "radioatividade"]
}

const cientista4 = {
    nome: "Jaqueline Goes de Jesus",
    descoberta: "Sequenciou o genoma da COVID-19 após 48 horas do primeiro caso no Brasil",
    idadeDescoberta: 32,
    anoDescoberta: 2020,
    pais: "Brasil",
    viva: true,
    areaPesquisa: ["biologia", "virus", "genetica"]
}

const cientista5 = {
    nome: "Hedy Lamarr",
    descoberta: "Criou o WiFi e um aparelho que fazia interferência em rádios (usado para despistar os radares nazistas na 2ª Guerra Mundial). Além de também ser atriz e cineasta",
    idadeDescoberta: 28,
    anoDescoberta: 1942,
    pais: "Austria",
    viva: false,
    areaPesquisa: ["tecnologia", "cinema", "computador"]  
}

////utilizando console.log(), mostre todos os dados de cada um dos itens criados
console.log("Detalhes das cientistas: \n", cientista1, "\n", cientista2, "\n", cientista3, "\n", cientista4, "\n", cientista5)

//Média entre os valores numéricos respectivos de cada item (idades)
const media = (cientista1.idadeDescoberta + cientista2.idadeDescoberta + cientista3.idadeDescoberta + cientista4.idadeDescoberta + cientista5.idadeDescoberta)/5
console.log(`Media das idades das mulheres ciêntistas: ${media}`)

//Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras
const verificarEstaViva = cientista1.viva && cientista2.viva && cientista3.viva && cientista4.viva && cientista5.viva
console.log("Todas as cientistas estão vivas? ", verificarEstaViva)


//Semana 2
//Crie um array vazio
const cientistas = []
//Adicione os objetos usando push() ao array, apenas se os booleans forem true
//Crie uma condição else, que, em caso de valor false, exiba um **ALERT** avisando para o usuário que o item não foi adicionado.
if (cientista1.viva) {
    cientistas.push(cientista1)
} else {
    alert("Katie Bouman não foi adicionada a lista, pois não está viva")
}
if (cientista2.viva) {
    cientistas.push(cientista2)
} else {
    alert("Ada Lovelace não foi adicionada a lista, pois não está viva")
}
if (cientista3.viva) {
    cientistas.push(cientista3)
} else {
    alert("Maria Curie não foi adicionada a lista, pois não está viva")
}
if (cientista4.viva) {
    cientistas.push(cientista4)
} else {
    alert("Jaqueline Goes de Jesus não foi adicionada a lista, pois não está viva")
}
if (cientista5.viva) {
    cientistas.push(cientista5)
} else {
    alert("Hedy Lamarr não foi adicionada a lista, pois não está viva")
}
//Checar como ficou a array final: console.log("Array com os objetos \"cientistas\" :", cientistas)