const MugiwarasBando = [{
    Pirata: "Monkey D. Luffy",
    idade: 19,
    procurado: true,
    Recompensa: "B$: 3.000.000,00",
    Atributos: ["Capitão dos Chapeús de Palha" ,"Gomu Gomu no MI" ,"Haki Do conquistador" ,"Haki da observação" ,"Força incomum"]
},
    {

    Pirata: "Roronoa Zoro",
    idade: 21,
    procurado:true,
    Recompensa: "B$: 1.111.000,00",
    Atributos: ["Espadachim" ,"Haki Da Observação" ,"Primeiro imediato dos Mugiwaras" ,"Velocidade e Agilidade"]
},
    {

    Pirata: "Vinsmoke Sanji",
    idade: 20,
    procurado:true,
    Recompensa: "B$: 1.032.000,00",
    Atributos: ["Cozinheiro", "Força incomum", "Resistência", "velocidade", "Senso de cavalheirismo"]
},
    {

    Pirata: "Nami",
    idade: 20,
    procurado:true,
    Recompensa: "B$: 366.000,00",
    Atributos: ["Navegadora do bando", "Navegação e Cartografia", "Ladra e batedora de carteiras"]
},
    {
    
    Pirata: "Tony Tony Chopper",
    idade: 17,
    procurado:true,
    Recompensa: "B$: 1.000,00",
    Atributos: ["médico do bando", "Hito Hito no Mi", "Fruta tipo Zoan", "Inteligência"]
},
    {

    Pirata: "Nico Robin",
    idade: 30,
    procurado:true,
    Recompensa: "B$: 930.000,00",
    Atributos: ["Inteligência e conhecimento vasto", "Arqueológa", "Fruta: Hana Hana no Mi", "Espionagem"]
},
    {

    Pirata: "Franky",
    idade: 36,
    procurado:true,
    Recompensa: "B$: 394.000,00",
    Atributos: ["Cyborg", "Construtor e Engenheiro Naval dos Mugiwaras", "Super força"]
},
    {

    Pirata: "Brook",
    idade: 90,
    procurado:true,
    Recompensa: "B$: 383.000,00",
    Atributos: ["Músico", "Fruta: Yomi Yomi no Mi", "Inteligência Tática"]
},
    {

    Pirata: "Jinbei",
    idade: 46,
    procurado:true,
    Recompensa: "B$: 1.100.000,00",
    Atributos: ["Homem-Peixe", "Gyojin Karatê", "Super força"]
}]

// const Mugiwaras = MugiwarasBando.slice()
// Mugiwaras.push({
//     nome: "Yamato",
//     idade: 18,
//     procurado: false,
//     Recompensa: "B$: 1.100.000,00",
//     Atributos: ["Super força", "Agilidade", "Inteligência"]

// })
// console.log(Mugiwaras)

//semana 4//

const Mugiwaras ={
    Pirata: "Yamato",
    idade: 18,
    procurado: false,
    Recompensa: "B$: 1.100.000,00",
    Atributos: ["Super força", "Agilidade", "Inteligência"]

}
if (Mugiwaras.procurado){
    MugiwarasBando.push(Mugiwaras)
} else {
    alert ("Yamato está cuidando de Wano, ainda não faz parte do bando")
}

// Semana 5 

// for (let indexM of MugiwarasBando){
//     console.log(`"${indexM.Atributos}"`)
// }

for (let index of MugiwarasBando) {
    console.log(`Pirata: ${index.Pirata}, \n Idade: ${index.idade}, \n ${index.procurado}, \n Recompensa: ${index.Recompensa}, \n Atributos: ${index.Atributos} `)
}


//------------------------------------------------------------------