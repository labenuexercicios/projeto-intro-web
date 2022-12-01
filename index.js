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
console.log(medBuySize)

const medSaleSize = (saleSize01+saleSize02+saleSize03)/3
console.log(medSaleSize)

const medCostPrice = ((costPrice01+costPrice02+costPrice03)/3).toFixed(2)
console.log(medCostPrice)

const medSalePrice = ((salePrice01+salePrice02+salePrice03)/3).toFixed(2)
console.log(medSalePrice)

const verSunnyPlant = sunnyPlant01&&sunnyPlant02&&sunnyPlant03
console.log(verSunnyPlant)

const verShadePlant = shadePlant01&&shadePlant02&&shadePlant03
console.log(verShadePlant)

const verPartialShadePlant = partialShadePlant01&&partialShadePlant02&&partialShadePlant03
console.log(verPartialShadePlant)

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