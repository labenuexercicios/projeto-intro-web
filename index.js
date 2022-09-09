//Teste
/*const nome = prompt("Olá, qual seu nome?")
const idade = prompt("Quantos anos voce tem?")
const altura = prompt("Qual sua altura?")
const pessoa = `Nome: ${nome} \nIdade: ${idade} \nAltura: ${altura}`
console.log(pessoa)*/


/*const tituloLivro1 = "Bhagavad-Gita: Como ele é"
const autorLivro1 = "Swami Maharaj"
const anoDeEdicao1 = 1997
const adiquirido1 = true
const sequencias1 = [0]*/
const livro1 = {
    titulo: "Bhagavad-Gita: Como Ele É",
    autor: "Swami Maharaj",
    edicao: 1997,
    adiquirido: true,
    sequencias: 0,
}
console.log('livro'.toUpperCase())
console.log(`Tituto: \"${livro1.titulo}\" \nAutor: ${livro1.autor} \nAno da Edição: ${livro1.edicao} \nSequencias: ${livro1.sequencias}`)

/*const tituloLivro2 = "Pedra no Céu"
const autorLivro2 = "Isaac Azimov"
const anoDeEdicao2 = 2019
const adiquirido2 = true
const sequencias2 = [5, "Saga Fundação"]*/
const livro2 = {
    titulo: "Pedra no Ceu",
    autor: "Isaac Azimov",
    edicao: 2019,
    adiquirido: true,
    sequencias: [5, "Saga Fundacao"],
}
console.log(`Tituto: \"${livro2.titulo}\" \nAutor: ${livro2.autor} \nAno da Edição: ${livro2.edicao} \nSequencias: ${livro1.sequencias}`)

/*const tituloLivro3 = "Jurassic Park"
const autorLivro3 = "Michael Crichton"
const anoDeEdicao3 = 2020
const adiquirido3 = false
const sequencias3 = [1, "Jurassic World"]*/
const livro3 = {
    titulo: "Jurassic Park",
    autor: "Michael Crichton",
    edicao: 2020,
    adiquirido: false,
    sequencias: [1, "Jurassic World"]
}
console.log(`Tituto: \"${livro3.titulo}\" \nAutor: ${livro3.autor} \nAno da Edição: ${livro3.edicao} \nSequencias: ${livro3.sequencias}`)

const acervo = []
console.log (livro1.adiquirido, livro2.adiquirido, livro3.adiquirido)

/*if (livro1.adiquirido === true){
    acervo.push(livro1)
} else {
    alert (`Livro: ${livro1.titulo} não adiquirido`)
} if (livro2.adiquirido === true){
    acervo.push(livro2)
} else {
    alert (`Livro: ${livro2.titulo} não adiquirido`)
} if (livro3.adiquirido === true){
    acervo.push(livro3)
}else {
    alert (`Livro: ${livro3.titulo} não adiquirido`)
}*/

livro1.adiquirido === true ? acervo.push(livro1) : alert (`Livro: ${livro1.titulo} não adiquirido`)
livro2.adiquirido === true ? acervo.push(livro2) : alert (`Livro: ${livro2.titulo} não adiquirido`)
livro3.adiquirido === true ? acervo.push(livro3) : alert (`Livro: ${livro3.titulo} não adiquirido`)

//acervo.push(livro1, livro2, livro3)

console.log(acervo)