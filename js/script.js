
// const porteDaRaça: ['Grande porte', 'Medio porte', 'Pequeno porte']

const dog1 = {
    raca: 'Golden retriever',
    origem: 'Escócia',
    pesoKg: 25 + ' a ' + 34,
    alturaCm: 56 + ' a ' + 60,
    expectativaDeVidaAno: 10 + ' a ' + 12,
    racaParaApartamento: false,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
};

const dog2 = {
    raca: 'Buldogue inglês',
    origem: 'Inglaterra',
    pesoKg: 18 + ' a ' + 22,
    alturaCm: 35 + ' a ' + 38,
    expectativaDeVidaAno: 8 + ' a ' + 10,
    racaParaApartamento: true,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
};

const dog3 = {
    raca: 'Basset hound',
    origem: 'Escócia',
    pesoKg: 25 + ' a ' + 34,
    alturaCm: 56 + ' a ' + 60,
    expectativaDeVidaAno: 10 + ' a ' + 12,
    racaParaApartamento: true,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
};

const dog4 = {
    raca: 'Pug',
    origem: 'China',
    pesoKg: 6 + ' a ' + 8,
    alturaCm: 25 + ' a ' + 30,
    expectativaDeVidaAno: 13 + ' a ' + 15,
    racaParaApartamento: true,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
}

const dog5 = {
    raca: 'Beagle',
    origem: 'Inglaterra e Estados Unidos',
    pesoKg: 9 + ' a ' + 13.5,
    alturaCm: 33 + ' a ' + 38,
    expectativaDeVidaAno: 10 + ' a ' + 15,
    racaParaApartamento: true,
    porteDaRaca: ['Grande porte', ' Medio porte', ' Pequeno porte']
}

const listaDeDogs = [];

const arrayDeDogs = (objeto, array) => {

    if (objeto.racaParaApartamento) {
        return array.push(objeto)
    } else {
        // alert("Essa raça não é apropriada para apartamento.");
    };

}
arrayDeDogs(dog1, listaDeDogs)
arrayDeDogs(dog2, listaDeDogs)
arrayDeDogs(dog3, listaDeDogs)
arrayDeDogs(dog4, listaDeDogs)
arrayDeDogs(dog5, listaDeDogs)

// console.log(listaDeDogs);


for (let i in listaDeDogs) {
    listaDeDogs[i].raca = listaDeDogs[i].raca.toUpperCase()
}
// console.log(listaDeDogs);

//  TRANSFORMAR A ARRAY DO OBJETO EM STRING

for (let string in listaDeDogs) {
    listaDeDogs[string].porteDaRaca = listaDeDogs[string].porteDaRaca.toString()
}
console.log(listaDeDogs)


