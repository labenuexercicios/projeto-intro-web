// SEMANA 1:

const  dino = "Tiranossauro rex"
const alimentacao = "Carnívoro"
const tamanhoEmMetros = 5.60
const eBipede = true

const dino2 = "Triceratops"
const alimentacao2 = "Herbívoro"
const tamanhoEmMetros2 = 3.00
const eBipede2 = false

const dino3 = "Velociraptor"
const alimentacao3 = "Carnívoro"
const tamanhoEmMetros3 = 1.00
const eBipede3 = true

const dino4 = "Stegosaurus"
const alimentacao4 = "Herbívoro"
const tamanhoEmMetros4 = 4.00
const eBipede4 = false

const mediaDeAltura = ((tamanhoEmMetros+tamanhoEmMetros2+tamanhoEmMetros3+tamanhoEmMetros4)/4)

console.log(mediaDeAltura)

const todosSaobipedes = eBipede && eBipede2 && eBipede3 && eBipede4

console.log(todosSaobipedes)








