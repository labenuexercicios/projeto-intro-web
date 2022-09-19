const leao = {
    nome: "leão".toUpperCase(),
    tempoMedioDeVida: 15,
    classe: true,
    array: ["rei da selva", "dono da mordida que tem uma potencia de 600 a 650 PSI", "sempre é o primeiro a comer"]
}

const urso = {
    nome: "urso-pardo".toUpperCase(),
    tempoMedioDeVida: 26,
    classe: true,
    array: ["têm pelagens grossas e em camadas", " são grandes, fortes e rápidos", "podem andar apenas com as patas traseiras"]
}

const cachorro = {
    nome: "cachorro".toUpperCase(),
    tempoMedioDeVida: 13,
    classe: true,
    array: ["O olfato de um cachorro é 1 milhão de vezes melhor do que o dos humanos", "se não for castrada, uma pode ter 66 filhotes em 6 anos", "são onívoros, eles precisam comer mais do que apenas carne"]
}

// const escolha = prompt("Digite " + "\"Sim\"" + " pra adcionar os objetos ao array de objetos ou " + "\"Não\"" + " para não adcionar os objeotos no array de objetos").toUpperCase()

// const variavel = ("SIM" === escolha)  //solução mais legal 

const variavel = true

if (variavel) {
    const adc = []
    adc.push(leao)
    adc.push(urso)
    adc.push(cachorro)
    console.log(adc)
} else {
    alert("Itens não foram adcionados")
}

