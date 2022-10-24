// SEMANA 06 - PASSANDO TUDO POR MEIO DO DOM
// Imprimindo para ver como o documento está
console.log(document)
// A ideia é que agora, os dados que compõem os elementos HTML devem ser criados a partir do nosso código JS. Para isso, 
// devemos manipular os objetos do HTML e do CSS utilizando o DOM.

// Criando os elementos:

// let containerBodyPai = document.createElement("body")
// console.log(containerBodyPai)
// let criandoDivFakeBody = document.createElement("div")
// console.log(criandoDivFakeBody)
// let criandoHeader = document.createElement("header")
// console.log(criandoHeader)
// let criandoMain = document.createElement("main")
// console.log(criandoMain)
// let criandoDivBuscadorPizza = document.createElement("div")
// console.log(criandoDivBuscadorPizza)
let criandoDivPaiDasPizzas = document.createElement("div")
// console.log(criandoDivPaiDasPizzas)
let criandoDivPadraoContainerPizzas = document.createElement("div")
// console.log(criandoDivPadraoContainerPizzas)
// let criandoFooter = document.createElement("footer")
// console.log(criandoFooter)
// let elementosCriados = [containerBodyPai, criandoDivFakeBody, criandoHeader, criandoMain,
//      criandoDivBuscadorPizza, criandoDivPaiDasPizzas, criandoDivPadraoContainerPizzas, criandoFooter]
//  console.log(elementosCriados)


// Chamando os elementos do HTML pela class:

// let elementoBodyPai= document.getElementsByClassName("containerBodyPai")
// console.log(elementoBodyPai)
// let elementoBodyFakeDiv = document.getElementsByClassName("containerBody")
// console.log(elementoBodyFakeDiv)
// let elementoHeader = document.getElementsByClassName("header01")
// console.log(elementoHeader)
// let elementoMain = document.getElementsByClassName("main")
// console.log(elementoMain)
// let elementoDivBuscadorPizza = document.getElementsByClassName("buscadorPizza")
// console.log(elementoDivBuscadorPizza)
let elementoDivPaiDasPizzas = document.getElementsByClassName("paiDasPizzas")
console.log(elementoDivPaiDasPizzas)
let elementoDivPadraoContainerPizzas = document.getElementsByClassName("padraoContainerPizzas")
 console.log(elementoDivPadraoContainerPizzas)
// let elementoFooter = document.getElementsByClassName("footer")
// console.log(elementoFooter)
// let chamandoElementosPorClass = [elementoBodyPai, elementoBodyFakeDiv, elementoHeader,
//     elementoMain, elementoDivBuscadorPizza, elementoDivPaiDasPizzas, elementoDivPadraoContainerPizzas, elementoFooter]
// console.log(chamandoElementosPorClass)
