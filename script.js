const MugiwarasBando = [{
    Pirata: "Monkey D. Luffy",
    idade: 19,
    procurado: true,
    Recompensa: "B$: 3.000.000,00",
    Atributos: ["Capitão dos Chapeús de Palha" ,"Gomu Gomu no MI" ,"Haki Do conquistador" ,"Haki da observação" ,"Força incomum"],
    imagem: "https://images4.alphacoders.com/127/thumbbig-1273867.webp",
    link: "https://onepiece.fandom.com/pt/wiki/Monkey_D._Luffy"
    },
    {

    Pirata: "Roronoa Zoro",
    idade: 21,
    procurado:true,
    Recompensa: "B$: 1.111.000,00",
    Atributos: ["Espadachim" ,"Haki Da Observação" ,"Primeiro imediato dos Mugiwaras" ,"Velocidade e Agilidade"],
    imagem: "https://images8.alphacoders.com/864/thumbbig-864739.webp",
    link: "https://onepiece.fandom.com/pt/wiki/Roronoa_Zoro" 
},
    {

    Pirata: "Vinsmoke Sanji",
    idade: 20,
    procurado:true,
    Recompensa: "B$: 1.032.000,00",
    Atributos: ["Cozinheiro", "Força incomum", "Resistência", "velocidade", "Senso de cavalheirismo"],
    link: "https://onepiece.fandom.com/wiki/Sanji",
    imagem: "https://images8.alphacoders.com/100/thumbbig-1002981.webp"
},
    {

    Pirata: "Nami",
    idade: 20,
    procurado:true,
    Recompensa: "B$: 366.000,00",
    Atributos: ["Navegadora do bando", "Navegação e Cartografia", "Ladra e batedora de carteiras"],
    link: "https://onepiece.fandom.com/wiki/Nami",
    imagem: "https://images2.alphacoders.com/993/thumbbig-993898.webp"
},
    {
    
    Pirata: "Tony Tony Chopper",
    idade: 17,
    procurado:true,
    Recompensa: "B$: 1.000,00",
    Atributos: ["médico do bando", "Hito Hito no Mi", "Fruta tipo Zoan", "Inteligência"],
    link: "https://onepiece.fandom.com/pt/wiki/Tony_Tony_Chopper",
    imagem: "https://images3.alphacoders.com/165/thumbbig-165015.webp"
},
    {

    Pirata: "Nico Robin",
    idade: 30,
    procurado:true,
    Recompensa: "B$: 930.000,00",
    Atributos: ["Inteligência e conhecimento vasto", "Arqueológa", "Unica leitora de Poneglyphos", "Fruta: Hana Hana no Mi", "Espionagem"],
    link: "https://onepiece.fandom.com/pt/wiki/Nico_Robin",
    imagem: "https://images7.alphacoders.com/727/thumbbig-727975.webp"
},
    {

    Pirata: "Franky",
    idade: 36,
    procurado:true,
    Recompensa: "B$: 394.000,00",
    Atributos: ["Cyborg", "Construtor e Engenheiro Naval dos Mugiwaras", "Super força"],
    link: "https://onepiece.fandom.com/pt/wiki/Franky", 
    imagem: "https://images2.alphacoders.com/790/thumbbig-790619.webp"
},
    {

    Pirata: "Brook",
    idade: 90,
    procurado:true,
    Recompensa: "B$: 383.000,00",
    Atributos: ["Músico", "Fruta: Yomi Yomi no Mi", "Inteligência Tática"],
    link: "https://onepiece.fandom.com/pt/wiki/Brook",
    imagem: "https://images.alphacoders.com/938/thumbbig-938944.webp"
},
    {

    Pirata: "Jinbei",
    idade: 46,
    procurado:true,
    Recompensa: "B$: 1.100.000,00",
    Atributos: ["Homem-Peixe", "Gyojin Karatê", "Super força", "Mestre dos mares"],
    link: "https://onepiece.fandom.com/wiki/Jinbe",
    imagem: "https://images6.alphacoders.com/122/thumbbig-1225550.webp"
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

// Semana 6 

const stringPirata = MugiwarasBando.map(p => p.Pirata);
console.log(stringPirata)

const Capitão = MugiwarasBando.filter((objeto)=>{return objeto.Pirata==="Monkey D. Luffy"})
console.log(`${Capitão}`? Capitão : alert ("tripulante não encontrado"))


//------------------------------------------------------------------ 
