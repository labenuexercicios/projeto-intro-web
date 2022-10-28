const pizza = (true)
const sabor = ("pepperoni")
const fatias = (8)
const vegano = (false)
const numeroPizzas = (1)
const marca = ('Dominos')

console.log(pizza)
console.log(sabor.includes("pepperoni"))

const pizza1 = (false)
const sabor1 = ("calabresa")
const fatias1 = (12)
const vegano1 = (false)
const numeroPizzas1 = (3)
const marca1 = ('Baggio')

const pizza2 = (false)
const sabor2 = ("pizza integral vegana")
const fatias2 = (6)
const vegano2 = (true)
const numeroPizzas2 = (5)
const marca2 = ('DomCorleone')

const pizza3 = (true)
const sabor3 = ("pizza de cogumelo")
const fatias3 = (4)
const vegano3 = (true)
const numeroPizzas3 = (2)
const marca3 = ('ZeDaEsquina')


const mediaFatias = ((fatias + fatias1 + fatias2 + fatias3) / 4)
console.log(mediaFatias)


const verificarSabor = (sabor && sabor && sabor && sabor)
console.log(verificarSabor)


const pizzaArray =([' com ' + 'cebola'])
console.log(pizza + pizzaArray)

console.log((pizza + pizzaArray + pizza1 + pizza2 + pizza3 + ' ' + fatias + ' ' + fatias1 + ' ' + fatias2 + ' ' + fatias3 + ' ' + sabor + ' ' + sabor1 + ' ' + sabor2 + ' ' + sabor3).toUpperCase()) 