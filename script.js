// //Noticias do dia

// //futebol dia 25/11
// const noticiafutebol = true
// const resultadodojogo = "3X2"
// const noticiasdojogo = "Neymar sofre contusão no tornoselo e fica afastado ate as quartas de final."
// const numerodegolsdobrasil = 3
// const numerodegolsdojapao = 2

// //futebol dia 26/11
// const noticiafutebol2 = false
// const resultadodojogo2 
// const noticiasdojogo2 = "Neymar sofre contusão no tornoselo e fica afastado ate as quartas de final."
// const numerodegolsdobrasil2  
// const numerodegolsdojapao2 

// //politica
// const noticiapolitica = true//possui noticia hj
// const noticiasdapolitica = "Russia cessa ataque contra Ucrania, e estabelecem acordo de paz."

// let noticiadodia = true //temos noticias importantes hj?
// let noticiadefutebol = false // hoje não tem jogo da copa do mundo
// let resultadojogododiatimebrasil = 3
// let resultadojogododiatimejapao = 0
// const noticiaimportantespolitica = "Russia cessa ataque contra Ucrania, e estabelecem acordo de paz."
// const noticiademercado
// const noticiadepolitica
// const noticia


//Kit energia Solar comprado

const marcadopainel1 = "jinko"
const geracaopormes1 = 450
const possuisistemacontrasurto1 = true
const itensamaisdokit1 = ["painel solar jinko", "inversor growat", "suporte de apoio", "sistema anti-surto"]

const marcadopainel2 = "Canadian"
const geracaopormes2 = 560
const possuisistemacontrasurto2 = false
const itensamaisdokit2 = ["painel solar canadian", "inversor fronius", "suporte de apoio"]

const marcadopainel3 = "First"
const geracaopormes3 = 420
const possuisistemacontrasurto3 = true
const itensamaisdokit3 = ["painel solar first", "inversor growat", "suporte de apoio", "sistema anti-surto"]

const mediadegeracao = (geracaopormes1 + geracaopormes2 + geracaopormes3) / 3
const verificacaodeseguranca = possuisistemacontrasurto1 && possuisistemacontrasurto2 && possuisistemacontrasurto3
const guardainformacoesdoskits = [itensamaisdokit1, itensamaisdokit2, itensamaisdokit3]

console.log(mediadegeracao.toFixed(2))
console.log(verificacaodeseguranca)
console.log(marcadopainel1,'\n', `Geração: ${geracaopormes1}\n`,`Possui sistema solar? ${possuisistemacontrasurto1}\n`, `Itens do kit: ${itensamaisdokit1}\n\n`,marcadopainel2,'\n', `Geração: ${geracaopormes2}\n`,`Possui sistema solar? ${possuisistemacontrasurto2}\n`, `Itens do kit: ${itensamaisdokit2}\n\n`, marcadopainel3,'\n', `Geração: ${geracaopormes3}\n`,`Possui sistema solar? ${possuisistemacontrasurto3}\n`, `Itens do kit: ${itensamaisdokit3}\n`,)
//console.table(guardainformacoesdoskits)
