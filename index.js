// Título ---------------------------
console.log("Lista de Pets da Casa")

// Brisa ----------------------------
const nomePet1 = {
    nome: "brisa".toUpperCase(),
    idade: 9,
    especie: "Canina",
    raca: "Pastor Alemão",
    vacina: true, //confirm(`Brisa tomou vacina?`),
    arrayBriquedos: ["Bolinha", " orelha de boi", " ossinho", " bichinho de pelúcia", " bolinha."],
    imagem: `./asset/WhatsApp Image 2021-04-16 at 21.59.22 (43).jpeg`
};

console.log(nomePet1)

// Janis ----------------------------
const nomePet2 = {
    nome: "janis".toUpperCase(),
    idade: 8,
    especie: "Felina",
    raca: "SRD",
    vacina: true, //confirm(`Janis tomou vacina?`),
    arrayBriquedos: ["Caixa de papelão", " arranhador de tecido", " ervinha de gato."],
    imagem: `./asset/20220315_204709.jpg`
};

console.log(nomePet2)

// Lua ----------------------------
const nomePet3 = {
    nome: "marilyn".toUpperCase(),
    idade: 7,
    especie: "Felina",
    raca: "SRD",
    vacina: true, //confirm(`Lua tomou vacina?`),
    arrayBriquedos: ["Caixa de papelão", " barbante enrolado", " erva de gato", " bolinha de lã."],
    imagem: `./asset/IMG_2112.jpeg`,
};

console.log(nomePet3)

// Marilyn ----------------------------
const nomePet4 = {
    nome: "lua".toUpperCase(),
    idade: 2,
    especie: "Canina",
    raca: "Shih Tzu",
    vacina: true, //confirm(`Marilyn tomou vacina?`), 
    arrayBriquedos: ["Bolinha", " ossinho", " orelha de boi", " ursinho", " plantas da mamãe"],
    imagem: `./asset/IMG_4864.jpeg`
};

console.log(nomePet4)

//média
let mediaPets = (nomePet1.idade + nomePet2.idade + nomePet3.idade + nomePet4.idade) / 4

console.log(`Média de Idade dos meus pets: ${mediaPets}`)

//verificar booleanos
const verificarVacinas = nomePet1.vacina && nomePet2.vacina && nomePet3.vacina && nomePet4.vacina
console.log(`Todas vacinadas? ${verificarVacinas}`)

//array pra guardar os objetos

const todosPets = []

if (nomePet1.vacina) {
    todosPets.push(nomePet1)
    //console.log(`Brisa está vacinada.`)
} else {
    alert(`Brisa não foi vacinada!`)
}

if (nomePet2.vacina) {
    todosPets.push(nomePet2)
    //console.log(`Janis está vacinada.`)
} else {
    alert(`Janis não foi vacinada!`)
}

if (nomePet3.vacina) {
    todosPets.push(nomePet3)
    //console.log(`Lua está vacinada.`)
} else {
    alert(`Lua não foi vacinada!`)
}

if (nomePet4.vacina) {
    todosPets.push(nomePet4)
    //console.log(`Marilyn está vacinada.`)
} else {
    alert(`Marilyn não foi vacinada!`)
}

console.log(todosPets)

//valores da propriedade array do objeto em uma mesma string

console.log("=====EX01 - NOVO ARRAY STRING=====")

// let stringPet1 = nomePet1.arrayBriquedos.join()
// let stringPet2 = nomePet2.arrayBriquedos.join()
// let stringPet3 = nomePet3.arrayBriquedos.join()
// let stringPet4 = nomePet4.arrayBriquedos.join()

// console.log(stringPet1)
// console.log(stringPet2)
// console.log(stringPet3)
// console.log(stringPet4)


// for (let i = 0; i< todosPets.length; i++){
//     console.log(todosPets[i].nome)
//     console.log(todosPets[i].idade)
//     console.log(todosPets[i].especie)
//     console.log(todosPets[i].raca)
//     console.log(todosPets[i].vacina)
//     console.log(todosPets[i].arrayBriquedos.join())
// }

let arrayStringPets = []

for (let i = 0; i < todosPets.length; i++) {
    arrayStringPets.push(todosPets[i].nome)
    arrayStringPets.push(todosPets[i].idade)
    arrayStringPets.push(todosPets[i].especie)
    arrayStringPets.push(todosPets[i].raca)
    arrayStringPets.push(todosPets[i].vacina)
    arrayStringPets.push(todosPets[i].arrayBriquedos.join())
}

console.log(arrayStringPets)

console.log("=====EX02 - LOOP ARRAY STRING=====")

//Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir 
// individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. 
// Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

for (pet of todosPets) {
    for (let i in pet) {
        console.log(`${i}: ${pet[i]}`)
    }
    //console.log("----------------------");
}

// let stringPets = []

//     for (let i in todosPets){
//         stringPets.push(`${Number(i)+1}: ${todosPets[i].arrayBriquedos}`)
//         console.log("Nome:",todosPets[i].nome.toUpperCase(),"\nIdade:", 
//         todosPets[i].idade, "\nEspécie:",todosPets[i].especie,"\nRaça:", 
//         todosPets[i].raca,"\nBrinquedos:", todosPets[i].arrayBriquedos.join())
//     }

//Crie uma função que receba como parâmetro um objeto, e devolva a string 
//do relatório com os dados do objeto.

console.log("=====EX03 - FUNÇÃO RECEBE OBJETO=====")

//         console.log("Nome:",todosPets[i].nome.toUpperCase(),"\nIdade:", 
//         todosPets[i].idade, "\nEspécie:",todosPets[i].especie,"\nRaça:", 
//         todosPets[i].raca,"\nBrinquedos:", todosPets[i].arrayBriquedos.join())
//     }

// const comMap = copiaTodosPets.map((novoPetz) => {
//     return novoPetz.join()
// })

// console.log(copiaTodosPets(todosPets))

const funcaoPets = (novoPets) => {
    for (let i = 0; i < todosPets.length; i++) {
        console.log(`${novoPets[i].nome}, ${novoPets[i].idade}, ${novoPets[i].especie}, ${novoPets[i].raca}, ${novoPets[i].vacina}, ${novoPets[i].arrayBriquedos}`)
    }
}

funcaoPets(todosPets)

//Crie uma função que recebe um array de objetos e uma string. 
//Esta função deve retornar um objeto, e o objeto 
// retornado deve possuir apenas os itens que tenham o nome/título igual 
//à string passada como parâmetro. Caso não exista um item, exiba um 
//ALERT indicando que nenhum item foi encontrado.

console.log("=====EX04 - FUNÇÃO RECEBE OBJETO=====")

const recebeArrayObjetos = (arrayInformado, stringInformada) => {
    const resultado = arrayInformado.filter((item) => {

        return item.nome === stringInformada
    })
    if (resultado.length > 0) {
        console.log(resultado)
    } else {
        alert("Nenhum pet encontrado")
    }
}

console.log(recebeArrayObjetos(todosPets, "BRISA"))
// const funcaoDupla = (objeto, buscaItem) =>{
//     for (let i in todosPets){
//         if (todosPets[i].nome === buscaItem){
//             return objeto[i]
//             // Vazio
//         // }else if(todosPets[i].idade === buscaItem){
//         //     //Vazio
//         // }else if(todosPets[i].especie === buscaItem){ 
//         //     //Vazio
//         // }else if(todosPets[i].raca === buscaItem){
//         //     //Vazio
//         // }else if(todosPets[i].vacina === buscaItem){
//         //     //Vazio
//         // }else if(todosPets[i].arrayBriquedos === buscaItem){
//         //     //Vazio
//         // }else{

//         }}
//         return alert(`Nenhum pet foi encontrado!`) 
//     }

//DOM INSERIR OBJETOS

const valoresObjeto = ["Nome", "Idade", "Espécie", "Raça", "Vacina", "Brinquedos", ""]
const tabela = document.getElementsByClassName("listaPet")

let c = 0
for (let i in nomePet1) {
    if (i !== "imagem") {
        let linha = document.createElement("li")
        const conteudoNovo = document.createTextNode(`${valoresObjeto[c]}: ${nomePet1[i]}`)
        linha.appendChild(conteudoNovo)
        tabela[0].insertAdjacentElement("beforeend", linha)
        console.log(i)
        c++
    }
}

let c1 = 0
for (let i in nomePet2) {
    if (i !== "imagem") {
        let linha = document.createElement("li")
        const conteudoNovo = document.createTextNode(`${valoresObjeto[c1]}: ${nomePet2[i]}`)
        linha.appendChild(conteudoNovo)
        tabela[1].insertAdjacentElement("beforeend", linha)
        console.log(i)
        c1++
    }
}

let c2 = 0
for (let i in nomePet3) {
    if (i !== "imagem") {
        let linha = document.createElement("li")
        const conteudoNovo = document.createTextNode(`${valoresObjeto[c2]}: ${nomePet3[i]}`)
        linha.appendChild(conteudoNovo)
        tabela[2].insertAdjacentElement("beforeend", linha)
        console.log(i)
        c2++
    }
}

let c3 = 0
for (let i in nomePet4) {
    if (i !== "imagem") {
        let linha = document.createElement("li")
        const conteudoNovo = document.createTextNode(`${valoresObjeto[c3]}: ${nomePet4[i]}`)
        linha.appendChild(conteudoNovo)
        tabela[3].insertAdjacentElement("beforeend", linha)
        console.log(i)
        c3++
    }
}

//DOM INSERIR TÍTULO

// const conteinerPet = document.getElementsByClassName("todosPets")
// let elementoNovo = document.createElement("h2")
// const tituloNovo = document.createTextNode(nomePet1.nome)
// elementoNovo.appendChild(tituloNovo)
// conteinerPet.insertAdjacentElement("afterbegin", elementoNovo)

for (let i in todosPets) {
    let titulo = document.getElementsByClassName("tituloH2")
    const criarTagH = document.createElement("h2")
    const novoConteudo = document.createTextNode(todosPets[i].nome)
    criarTagH.appendChild(novoConteudo)
    titulo[i].insertAdjacentElement("afterbegin", criarTagH)
    console.log(i)
}

//DOM BUSCADOR

let input = document.getElementById ("nome")
const todosPetsHtml = document.querySelectorAll(".todosPets")
const listaPet = document.querySelectorAll(".listaPet")
const imagemPet = document.querySelectorAll(".imagem")
const tituloPet = document.querySelectorAll(".tituloH2")
const geralPets = document.querySelectorAll(".geralPets")

const removerPet1 = document.querySelector("#removerPet1")
const paiPet1 = removerPet1.parentNode
const removerPet2 = document.querySelector("#removerPet2")
const paiPet2 = removerPet2.parentNode
const removerPet3 = document.querySelector("#removerPet3")
const paiPet3 = removerPet3.parentNode
const removerPet4 = document.querySelector("#removerPet4")
const paiPet4 = removerPet4.parentNode

function selecionarPet (){
    if(nomePet1.nome === input.value){
        paiPet2.removeChild(removerPet2)
        paiPet3.removeChild(removerPet3)
        paiPet4.removeChild(removerPet4)
        input.value = ""
    } else if(nomePet2.nome === input.value){
        removerPet1.parentNode.removeChild(removerPet1)
        removerPet3.parentNode.removeChild(removerPet3)
        removerPet4.parentNode.removeChild(removerPet4)
        input.value = ""
    } else if(nomePet3.nome === input.value){
        removerPet1.parentNode.removeChild(removerPet1)
        removerPet2.parentNode.removeChild(removerPet2)
        removerPet4.parentNode.removeChild(removerPet4)
        input.value = ""
    } else if (nomePet4.nome === input.value){
        removerPet1.parentNode.removeChild(removerPet1)
        removerPet2.parentNode.removeChild(removerPet2)
        removerPet3.parentNode.removeChild(removerPet3)
        input.value = ""
    } else{
        alert("Nenhum pet encontrado")
    }
}

function devolverPesquisaPet (){
    if (input.value === ""){
        paiPet1.appendChild(removerPet1)
        paiPet2.appendChild(removerPet2)
        paiPet3.appendChild(removerPet3)
        paiPet4.appendChild(removerPet4)
    }
}


// function selecionarPet (){
//     if(nomePet1.nome === input.value){
//         delete(nomePet2)
//         listaPet[1].classList.remove("listaPet")
//         listaPet[2].classList.remove("listaPet")
//         listaPet[3].classList.remove("listaPet")
//         geralPets[1].classList.remove(".geralPets")
//         geralPets[2].classList.remove(".geralPets")
//         geralPets[3].classList.remove(".geralPets")
//         imagemPet[1].classList.remove(".imagem")
//         imagemPet[2].classList.remove(".imagem")
//         imagemPet[3].classList.remove(".imagem")
//         tituloPet[1].classList.remove(".tituloH2")
//         tituloPet[2].classList.remove(".tituloH2")
//         tituloPet[3].classList.remove(".tituloH2")
//         todosPetsHtml[1].classList.remove("todosPets")
//         todosPetsHtml[2].classList.remove("todosPets")
//         todosPetsHtml[3].classList.remove("todosPets")
//     } else if (nomePet2.nome === input.value){
//         listaPet[0].classList.remove("listaPet")
//         listaPet[2].classList.remove("listaPet")
//         listaPet[3].classList.remove("listaPet")
//         imagemPet[0].classList.remove(".imagem")
//         imagemPet[2].classList.remove(".imagem")
//         imagemPet[3].classList.remove(".imagem")
//         tituloPet[0].classList.remove(".tituloH2")
//         tituloPet[2].classList.remove(".tituloH2")
//         tituloPet[3].classList.remove(".tituloH2")
//         todosPetsHtml[0].classList.remove("todosPets")
//         todosPetsHtml[2].classList.remove("todosPets")
//         todosPetsHtml[3].classList.remove("todosPets")
//     } else if (nomePet3.nome === input.value){
//         listaPet[0].classList.remove("listaPet")
//         listaPet[1].classList.remove("listaPet")
//         listaPet[3].classList.remove("listaPet")
//         imagemPet[0].classList.remove(".imagem")
//         imagemPet[1].classList.remove(".imagem")
//         imagemPet[3].classList.remove(".imagem")
//         tituloPet[0].classList.remove(".tituloH2")
//         tituloPet[1].classList.remove(".tituloH2")
//         tituloPet[3].classList.remove(".tituloH2")
//         todosPetsHtml[0].classList.remove("todosPets")
//         todosPetsHtml[1].classList.remove("todosPets")
//         todosPetsHtml[3].classList.remove("todosPets")
//     } else if (nomePet4.nome === input.value){
//         listaPet[0].classList.remove("listaPet")
//         listaPet[1].classList.remove("listaPet")
//         listaPet[2].classList.remove("listaPet")
//         imagemPet[0].classList.remove(".imagem")
//         imagemPet[1].classList.remove(".imagem")
//         imagemPet[2].classList.remove(".imagem")
//         tituloPet[0].classList.remove(".tituloH2")
//         tituloPet[1].classList.remove(".tituloH2")
//         tituloPet[2].classList.remove(".tituloH2")
//         todosPetsHtml[0].classList.remove("todosPets")
//         todosPetsHtml[1].classList.remove("todosPets")
//         todosPetsHtml[2].classList.remove("todosPets")
//     } else{
//         alert("Nenhum pet encontrado")
//     }
// }
