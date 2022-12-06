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
const aumentaletra1 = marcadopainel1.toLocaleUpperCase()

const marcadopainel2 = "canadian"
const geracaopormes2 = 560
const possuisistemacontrasurto2 = false
const itensamaisdokit2 = ["painel solar canadian", "inversor fronius", "suporte de apoio"]
const aumentaletra2 = marcadopainel2.toLocaleUpperCase()

const marcadopainel3 = "first"
const geracaopormes3 = 420
const possuisistemacontrasurto3 = true
const itensamaisdokit3 = ["painel solar first", "inversor growat", "suporte de apoio", "sistema anti-surto"]
const aumentaletra3 = marcadopainel3.toLocaleUpperCase()

const mediadegeracao = (geracaopormes1 + geracaopormes2 + geracaopormes3) / 3
const verificacaodeseguranca = possuisistemacontrasurto1 && possuisistemacontrasurto2 && possuisistemacontrasurto3
const guardainformacoesdoskits = [itensamaisdokit1, itensamaisdokit2, itensamaisdokit3]

console.log(mediadegeracao.toFixed(2))
console.log(verificacaodeseguranca)
console.log(aumentaletra1,'\n', `Geração: ${geracaopormes1}\n`,`Possui sistema solar? ${possuisistemacontrasurto1}\n`, `Itens do kit: ${itensamaisdokit1}\n\n`,aumentaletra2,'\n', `Geração: ${geracaopormes2}\n`,`Possui sistema solar? ${possuisistemacontrasurto2}\n`, `Itens do kit: ${itensamaisdokit2}\n\n`, aumentaletra3,'\n', `Geração: ${geracaopormes3}\n`,`Possui sistema solar? ${possuisistemacontrasurto3}\n`, `Itens do kit: ${itensamaisdokit3}\n`,)
//console.table(guardainformacoesdoskits)


const objeto1 = {
    nomedoobjeto1: "jinko",
    geracaodoobjeto1: 450,
    possuisistemaobjeto1: true 
}

const objeto2 = {
    nomedoobjeto2: "canadian",
    geracaodoobjeto2: 560,
    possuisistemaobjeto2: false
}

const objeto3 = {
    nomedoobjeto3: "first",
    geracaodoobjeto3: 420, 
    possuisistemaobjeto3: true
}

const arraypraguardaosobjeto = []

arraypraguardaosobjeto.push(objeto1,objeto2,objeto3)
console.log(arraypraguardaosobjeto)

const alterar = confirm("Deseja alterar o objeto 3, pelo novo objeto que ja temos cadastrado?")
//console.log(`O item que substituira é o: ${nomedonovoobjeto3.nomedonovoobjeto3}`)

if(alterar){
    arraypraguardaosobjeto.pop()
    const novoobjeto3 = {
        nomedonovoobjeto3 : "Growat",
        geracaodonovoobjeto3 : 640,
        possuisistemanovoobjeto3: true
    }
    arraypraguardaosobjeto.push(novoobjeto3)
    alert("Item foi alterado.")
}
else{
    alert("Item não foi alterado.")
}

const adicionar = confirm("Deseja adicionar 1 novo objeto?")

if(adicionar){
    const novoobjeto4 = {
        nomedonovoobjeto4 : prompt("Digite o nome do novo objeto:"),
        geracaodonovoobjeto4 : +(prompt("Digite a geração do novo objeto:")),
        possuisistemanovoobjeto4: confirm("O novo objeto possui sistema contra surto?")
    }
    arraypraguardaosobjeto.push(novoobjeto4)
    alert("Novo objeto foi adicionado.")
}
else{
    alert("Não foi adicionado nada.")
}



