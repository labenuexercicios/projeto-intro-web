//Filmes para ver antes de morrer

let objeto1 ={
    nome: "OS VINGADORES",
    anoLancamento: 2012,
    valeAPena: true,
    diretor: "Joss Whedon",
    elenco: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Rufallo", "Chris Hemsworth", "Jeremy Renner",
"Tom Hiddleston", "Samuel L. Jackson"],
    imagem: `./imagens/vingadores.jpg`,
};
    

let objeto2 = {
    nome: "VINGADORES: ERA DE ULTRON",
    anoLancamento: 2015,
    valeAPena: true,
    diretor: "Joss Whedon",
    elenco: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Rufallo", "Chris Hemsworth", "Jeremy Renner",
    "Tom Hiddleston", "Samuel L. Jackson", "Elizabeth Olsen", "James Spader", "Paul Bettany", ],
    imagem: `./imagens/vingadores2.jpg`,
};

let objeto3 = {
    nome: "VINGADORES: GUERRA INFINITA",
    anoLancamento: 2018,
    valeAPena: true,
    diretor: "Anthony e Joe Russo",
    elenco: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Rufallo", "Chris Hemsworth", "Jeremy Renner",
    "Tom Hiddleston", "Samuel L. Jackson", "Elizabeth Olsen", "Paul Bettany",],
    imagem: `./imagens/vingadores-guerra-infinita.webp`,
};

let objeto4 = {
    nome: "VINGADORES: ULTIMATO",
    anoLancamento: 2019,
    valeAPena: true,
    diretor: "Anthony e Joe Russo",
    elenco: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Rufallo", "Chris Hemsworth", "Jeremy Renner",
    "Tom Hiddleston", "Samuel L. Jackson", "Elizabeth Olsen", "Paul Bettany"],
    imagem: `./imagens/vingadores-ultimato.jpg`,
};

let arrayObjetos = []
arrayObjetos.push(objeto1, objeto2, objeto3, objeto4)

let media = 0
for(let i in arrayObjetos){
    media += arrayObjetos[i].anoLancamento
}
console.log(`Media dos anos de lançamento: ${media/arrayObjetos.length}`)

let verificarValeAPena = arrayObjetos[0].valeAPena && arrayObjetos[1].valeAPena && arrayObjetos[2].valeAPena && arrayObjetos[3].valeAPena
console.log(verificarValeAPena)

 
//Semana 4 exercício 1
let lista = []
let filmes = []
for(i in arrayObjetos){
    filmes.push(arrayObjetos[i].nome)
}

for(i in arrayObjetos){
    arrayObjetos[i].valeAPena ? lista.push(arrayObjetos[i]) : alert(`O filme ${filmes[i]} não foi adicionado`)
}
console.log(lista)



let elenco1 = ``
for(i in objeto1.elenco){
    elenco1 += `${objeto1.elenco[i]}, `
}

let elenco2 = ``
for(i in objeto2.elenco){
    elenco2 += `${objeto2.elenco[i]}, `
}

let elenco3 = ``
for(i in objeto3.elenco){
    elenco3 += `${objeto3.elenco[i]}, `
}

let elenco4 = ``
for(i in objeto4.elenco){
    elenco4 += `${objeto4.elenco[i]}, `
}

let listaElencos = []
listaElencos.push(elenco1, elenco2, elenco3, elenco4)




// for(i in arrayObjetos){
//  console.log(`nome: ${arrayObjetos[i].nome} \nlançamento: ${arrayObjetos[i].anoLancamento} \nvale a pena?: ${arrayObjetos[i].valeAPena} \ndiretor: ${arrayObjetos[i].diretor} \nroteiro: ${listaElencos[i]}`)
// }



impressaoRelatorio = (objeto) =>{
    let imprimir = ``
    for(i in objeto){
        imprimir += `${i}: ${objeto[i]}\n`
    }
    return imprimir
}
console.log(impressaoRelatorio(objeto1))
console.log(impressaoRelatorio(objeto2))
console.log(impressaoRelatorio(objeto3))
console.log(impressaoRelatorio(objeto4))

funcBusca = (arrayObjetos, string) =>{
    let retorno = []
    for(i in arrayObjetos){
        if(arrayObjetos[i].nome === string){
            retorno.push(arrayObjetos[i])
        }
    }
    if(retorno.length === 0){
     alert(`Nenhum item foi encontrado`)   
    }
    return retorno
}
console.log(funcBusca(arrayObjetos, `OS VINGADORES`))


itens = (texto, posicao, id) => {
    let listagem = document.getElementById(id)
    let item = document.createElement("li")
    let text = document.createTextNode(texto)
    item.appendChild(text)
    console.log(listagem)
    listagem.insertAdjacentElement(posicao, item)
}

itens("Nome: Vingadores", "beforeend", "lista1")
itens("Ano de Lançamento: 2012", "beforeend", "lista1")
itens("Vale a pena ? Sim", "beforeend", "lista1")
itens("Diretor: Joss Whedon", "beforeend", "lista1")
itens(`Robert Downey Jr., Scarlett Johansson, Chris Evans, Mark Rufallo, Chris Hemsworth, Jeremy Renner,
Tom Hiddleston, Samuel L. Jackson`, "beforeend", "lista1")

itens("NOME: VINGADORES ERA DE ULTRON", "beforeend", "lista2")
itens("Ano de lançamento: 2015", "beforeend", "lista2")
itens("Vale a Pena ? Sim", "beforeend", "lista2")
itens("Diretor: Joss Whedon", "beforeend", "lista2")
itens(`Elenco: Robert Downey Jr., Scarlett Johansson, Chris Evans, Mark Rufallo, Tom Hiddletons, Samuel L. Jackson, Elizabeth Olsen, James Spader, Paul Bettany`, "beforeend", "lista2")

itens("NOME: VINGADORES: GUERRA INFINITA", "beforeend", "lista3")
itens("Ano de Lançamento: 2018", "beforeend", "lista3")
itens("Vale a pena ? Sim", "beforeend", "lista3")
itens("Diretor: Anthony e Joe Russo", "beforeend", "lista3")
itens(`Elenco: Robert Downey Jr., Scarlett Johansson, Chris Evans, Mark Rufallo, Tom Hiddletons, Samuel L. Jackson, Elizabeth Olsen, Paul Bettany`, "beforeend", "lista3")

itens("NOME: VINGADORES ULTIMATO", "beforeend", "lista4")
itens("Ano de lançamento: 2019", "beforeend", "lista4")
itens("Vale a Pena? Sim", "beforeend", "lista4")
itens("Diretor: Anthony e Joe Russo", "beforeend", "lista4")
itens(`Elenco: Robert Downey Jr., Scarlett Johansson, Chris Evans, Mark Rufallo,Jeremy Renner, Tom Hiddletons, Samuel L. Jackson, Elizabeth Olsen, Paul Bettany`, "beforeend", "lista4")



