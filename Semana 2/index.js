console.log(" - FLORICULTURA CONWAY -")
console.log(" -- SEMANA 1 --")

// const flora = nome da planta
// const buySize = altura em centímetros da planta quando comprada
// const saleSize = altura em centímetros da planta quando vendida
// const costPrice = preço de custo
// const salePrice = preço de venda
// const sunnyPlant = planta de sol pleno?
// const shadePlant = planta de meia sombra?
// const partialShadePlant = planta de sombra?

const flora01 = "Podocarpus macrophyllus"
const buySize01 = 80
const saleSize01 = 100
const costPrice01 = 70.00
const salePrice01 = 140.00
const sunnyPlant01 = true
const shadePlant01 = false
const partialShadePlant01 = true
const nick01 = ["Pinheiro de Buda"," Podocarpo"]

const flora02 = "Rhapis excelsa"
const buySize02 = 50
const saleSize02 = 120
const costPrice02 = 30.00
const salePrice02 = 200.00
const sunnyPlant02 = true
const shadePlant02 = true
const partialShadePlant02 = true
const nick02 = ["Ráfia"," Palmeira dama"]

const flora03 = "Cordyline fruticosa"
const buySize03 = 20
const saleSize03 = 80
const costPrice03 = 15.00
const salePrice03 = 60.00
const sunnyPlant03 = true
const shadePlant03 = false
const partialShadePlant03 = true
const nick03 = ["Coqueiro de Vênus"," Dracena vermelha"," Dracena rubra"]

const medBuySize = (buySize01+buySize02+buySize03)/3
console.log(`A média de altura das plantas compradas é: ${medBuySize}cm.`)

const medSaleSize = (saleSize01+saleSize02+saleSize03)/3
console.log(`A média de altura das plantas vendidas é: ${ medSaleSize}cm.`)

const medCostPrice = ((costPrice01+costPrice02+costPrice03)/3).toFixed(2)
console.log(`A média do preço de custo das platas é: R$${medCostPrice}`)

const medSalePrice = ((salePrice01+salePrice02+salePrice03)/3).toFixed(2)
console.log(`A média do preço de venda das platas é: R$${medSalePrice}`)

const verSunnyPlant = sunnyPlant01&&sunnyPlant02&&sunnyPlant03
console.log(`Todas as plantas são de sol pleno? ${verSunnyPlant}`)

const verShadePlant = shadePlant01&&shadePlant02&&shadePlant03
console.log(`Todas as plantas são de sombra? ${verShadePlant}`)

const verPartialShadePlant = partialShadePlant01&&partialShadePlant02&&partialShadePlant03
console.log(`Todas as plantas são de meia-sombra? ${verPartialShadePlant}`)

console.log(`${flora01.toUpperCase()}\n
Também conhecida como: ${nick01}\n
Altura da planta comprada: ${buySize01}cm\n
Altura da planta para venda: ${saleSize01}cm\n
Preço de custo: R$ ${costPrice01}\n
Preço de venda: R$ ${salePrice01}\n
É planta de sol pleno? ${sunnyPlant01}\n
É planta de sombra? ${shadePlant01}\n
É planta de meia-sombra? ${partialShadePlant01}`)

console.log(`${flora02.toUpperCase()}\n
Também conhecida como: ${nick02}\n
Altura da planta comprada: ${buySize02}cm\n
Altura da planta para venda: ${saleSize02}cm\n
Preço de custo: R$ ${costPrice02}\n
Preço de venda: R$ ${salePrice02}\n
É planta de sol pleno? ${sunnyPlant02}\n
É planta de sombra? ${shadePlant02}\n
É planta de meia-sombra? ${partialShadePlant02}`)

console.log(`${flora03.toUpperCase()}\n
Também conhecida como: ${nick03}\n
Altura da planta comprada: ${buySize03}cm\n
Altura da planta para venda: ${saleSize03}cm\n
Preço de custo: R$ ${costPrice03}\n
Preço de venda: R$ ${salePrice03}\n
É planta de sol pleno? ${sunnyPlant03}\n
É planta de sombra? ${shadePlant03}\n
É planta de meia-sombra? ${partialShadePlant03}`)

console.log(" -- SEMANA 2 --")

const podocarpo = {
    flora: "Podocarpus macrophyllus",
    nick: ["Pinheiro de Buda"," Podocarpo"],
    buySize: 80,
    saleSize: 100,
    costPrice: 70.00,
    salePrice: 140.00,
    sunnyPlant: true,
    shadePlant: false,
    partialShadePlant: true,
}

const rafia = {
    flora: "Rhapis excelsa",
    nick: ["Ráfia"," Palmeira dama"],
    buySize: 50,
    saleSize: 120,
    costPrice: 30.00,
    salePrice: 200.00,
    sunnyPlant: true,
    shadePlant: true,
    partialShadePlant: true,
}

const dracena = {
    flora: "Cordyline fruticosa",
    nick: ["Coqueiro de Vênus"," Dracena vermelha"," Dracena rubra"],
    buySize: 20,
    saleSize: 80,
    costPrice: 15.00,
    salePrice: 60.00,
    sunnyPlant: true,
    shadePlant: false,
    partialShadePlant: true,
}

const allSunnyPlants = []
const allShadePlants = []
const allPartialShadePlants = []

// allSunnyPlants.push(podocarpo,rafia,dracena)
// allShadePlants.push(podocarpo,rafia,dracena)
// allPartialShadePlants.push(podocarpo,rafia,dracena)
// console.log(allSunnyPlants,allShadePlants,allPartialShadePlants)

function isSunnyPlant(object){
    if(object.sunnyPlant==true){
        allSunnyPlants.push(object)
    }else{
        alert(`${object.flora} não é planta de sol pleno, portanto não foi adicionada à lista de plantas de sol pleno.`)
    }
}

function isShadePlant(object){
    if(object.shadePlant==true){
        allShadePlants.push(object)
    }else{
        alert(`${object.flora} não é planta de sombra, portanto não foi adicionada à lista de plantas de sombra.`)
    }
}

function isPartialShadePlant(object){
    if(object.partialShadePlant==true){
        allPartialShadePlants.push(object)
    }else{
        alert(`${object.flora} não é planta de meia-sombra, portanto não foi adicionada à lista de plantas de meia-sombra.`)
    }
}

isSunnyPlant(podocarpo)
isSunnyPlant(rafia)
isSunnyPlant(dracena)

isShadePlant(podocarpo)
isShadePlant(rafia)
isShadePlant(dracena)

isPartialShadePlant(podocarpo)
isPartialShadePlant(rafia)
isPartialShadePlant(dracena)

console.log(allSunnyPlants,allShadePlants,allPartialShadePlants)
