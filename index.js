const filmeLuca = {
    titulo: "Filme: " + "Luca",
    // sinopse: "Luca vive aventuras com seu novo melhor amigo, mas a diversão é ameaçada por um segredo: seu amigo é um monstro marinho de outro mundo que fica abaixo da superfície da água.",
    duracaoEmMinutos: "Duração: " + 101,
    anoLancamento: "Ano de lançamento: " +  2021,
    // genero: "Animação",
    // producaoPixar: "Produção: Pixar",
    personagensPrincipais: ["Luca", " Alberto", " Giulia", " Massimo", " Ercole"]
}

// console.log ("Filme: " , titulo.toLocaleUpperCase(), "\nSinopse: " , sinopse, "\nDuração:", duracaoEmMinutos, "\nAno de lançamento:", anoLancamento1, "\nGenêro:", genero, "\nEsse filme é um remake: ", remake1, "\nPrincipais personagens:", personagensPrincipais1)

const filmeDivertida = {
    titulo: "Filme:" + 'Divertida Mente',
    // sinopse: "Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente.",
    duracaoEmMinutos:"Duração: " + 94,
    anoLancamento:"Ano de lançamento: " +  2015,
    // genero: "Animação",
    // producaoPixar: true,
    personagensPrincipais: ["Riley", " Alegria", " Tristesa", " Raiva", " Nojinho", " Medo"]
}

// console.log ("\nFilme: " , titulo.toLocaleUpperCase(), "\nSinopse: " , sinopse, "\nDuração:", duracaoEmMinutos, "\nAno de lançamento:", anoLancamento, "\nGenêro:", genero, "\nEsse filme é um remake: ", remake, "\nPrincipais personagens:", personagensPrincipais)


const filmeViva = {
    titulo: "Filme: " + "Viva a vida é uma festa",
    // sinopse: "Apesar da proibição da música por gerações de sua família, o jovem Miguel sonha em se tornar um músico talentoso como seu ídolo Ernesto de la Cruz. Desesperado para provar seu talento, Miguel se encontra na deslumbrante e colorida Terra dos Mortos. Depois de conhecer um charmoso malandro chamado Héctor, os dois novos amigos embarcam em uma jornada extraordinária para desvendar a verdadeira história por trás da história da família de Miguel.",
    duracaoEmMinutos: "Duração: " + 104,
    anoLancamento: "Ano de lançamento: " +  2017,
    // genero: "Animação",
    // producaoPixar: true,
    personagensPrincipais: ["Miguel", " Ernesto de la Cruz", " Héctor",]

}

// console.log ("\nFilme: " , titulo.toLocaleUpperCase(), "\nSinopse: " , sinopse, "\nDuração:", duracaoEmMinutos, "\nAno de lançamento:", anoLancamento, "\nGenêro:", genero, "\nEsse filme é um remake: ", remake, "\nPrincipais personagens:", personagensPrincipais)

const filmeDoisIrmaos = {
    titulo: "Filme: " +  "Dois Irmãos Uma jornada fantástica",
    // sinopse: "Em um mundo transformado, no qual as criaturas não dependiam mais da magia para viver, dois irmãos elfos recebem um cajado de bruxo de seu falecido pai, capaz de trazê-lo de volta à vida. Inexperientes com qualquer tipo de magia, Ian e Barley não conseguem executar o feitiço e acabam gerando uma criatura sem cabeça. Para passar mais um dia com seu pai, eles embarcam em uma jornada fantástica. Ao perceber a ausência dos filhos, sua mãe se une à uma lendária manticora para encontrá-los.",
    duracaoEmMinutos: "Duração: " + 104,
    anoLancamento: "Ano de lançamento: " +  2017,
    // genero: "Animação",
    // producaoPixar: true,
    personagensPrincipais: ["Ian", " Barley", " Laurel", " Wilden"]
}

// semana1
// Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// console.log (typeof(filmeDivertida.duracaoEmMinutos)) - verificar o tipo (number)
const mediaDaDuração = (filmeDivertida.duracaoEmMinutos + filmeLuca.duracaoEmMinutos + filmeDoisIrmaos.duracaoEmMinutos + filmeViva.duracaoEmMinutos) / 4
// console.log('media da duração',mediaDaDuração)

// verificar se todos os valores booleanos são verdadeiros:
const verificarBooleanos = filmeDivertida.producaoPixar && filmeDoisIrmaos.producaoPixar && filmeLuca.producaoPixel && filmeViva.producaoPixel
// console.log (`Os filmes são produções da Pixel? ${verificarBooleanos}`)

// semana2

// array fazia para que seja puxado depois os objetos
let arrayComTodosOsFilmes = []

arrayComTodosOsFilmes.push(filmeDivertida, filmeDoisIrmaos, filmeLuca, filmeViva)
// console.log ('array com o push',arrayComTodosOsFilmes)

// Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

// if (filmeDivertida.producaoPixel === true) {
//     // console.log("Todos os filmes foram adicionados")
// } else {
//     alert ("Filme não adicionado")
// }

// if (filmeViva.producaoPixel === true) {
//     // console.log("Todos os filmes foram adicionados")
// } else {
//     alert ("Filme não adicionado")
// }

// if (filmeDoisIrmaos.producaoPixel === true) {
//     // console.log("Todos os filmes foram adicionados")
// } else {
//     alert ("Filme não adicionado")
// }

// if (filmeLuca.producaoPixel === true) {
//     // console.log("Todos os filmes foram adicionados")
// } else {
//     alert ("Filme não adicionado")
// }

// semana3:
//altere a forma que a característica array dos itens seja escrista como string como um laço/loop
// o array precisa ser transformado em string

for (let i in arrayComTodosOsFilmes) {
    arrayComTodosOsFilmes[i].personagensPrincipais = arrayComTodosOsFilmes[i].personagensPrincipais.toString()
}

// console.log('transformnado o array em string: \n', arrayComTodosOsFilmes)

// Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

for (objeto of arrayComTodosOsFilmes) {
    for (let i in objeto) {
        // console.log(`${i} : ${objeto[i]}`)
    }
    // console.log("-----------------------------------------")
}

// Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto

function stringObj(objeto) {
    return objeto.titulo
}

// crie uma função que receba um objeto e uma string

// console.log(buscarTodosOsfilmes("Diverti"))

function buscarString(array, string) {
    const buscarFilme = array.filter((elemento) => {
        if (elemento.titulo === string) {
            return elemento
        }
    })
    if (buscarFilme.length === 0) {
        alert("Filme não localizado")
    } else {
        console.log(buscarFilme)
    }
}

// -------------

arrayFilmes = [filmeDivertida, filmeDoisIrmaos, filmeLuca, filmeViva]

console.log("teste", arrayFilmes)

function inserirFilmes(objeto, id) {
    for (elemento in objeto) {
        const armazenarId = document.getElementById(id)
        const criarLista = document.createElement("li")
        criarLista.innerHTML = objeto[elemento]
        armazenarId.appendChild(criarLista)
    }
}


console.log(inserirFilmes)

inserirFilmes(filmeDivertida, "idDivertida")
inserirFilmes(filmeLuca, "idLuca")
inserirFilmes(filmeDoisIrmaos, "idDois")
inserirFilmes(filmeViva, "idViva")

function pesquisarFilme(event) {
    event.preventDefault()
    const pesquisarClasse = document.getElementsByClassName("container_cards")
    let valorInput = document.getElementById("pesquisar").value
    valorInput = valorInput.toLowerCase()
    for (let i = 0; i < pesquisarClasse.length; i++) {
        if (!pesquisarClasse[i].innerHTML.toLowerCase().includes(valorInput)) {
            pesquisarClasse[i].style.display = "none"
        } else {
            pesquisarClasse[i].style.display = flex
        }
    }
}

window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        pesquisarFilme(event)
    }
})

const botao = document.querySelector("#id_botao")

botao.addEventListener("click", function (e) {
    const receberInput = document.querySelector("#pesquisar")
    const valorInput = receberInput.value
    pesquisarFilme(event)
}) 















