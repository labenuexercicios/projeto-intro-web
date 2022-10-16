const arrayDeObjetos = [
    objeto1 = {
        nome: "Frozen Café Tradicional",
        preco: 16.00,
        disponivel: true,
        tamanho: 350,
        sabor: "Tradicional",
        ingredientes: ["Frozen artesanal da casa, ", "expresso duplo e ", "leite cremoso."],
        img: "/midias/cafe2.png",
    },

    objeto2 = {
        nome: "Frozen Café Doce de Leite",
        preco: 17.00,
        disponivel: true,
        tamanho: 350,
        sabor: "Doce de Leite",
        ingredientes: ["Frozen artesanal doce de leite, ", "expresso duplo e ", "leite cremoso."],
        img: "/midias/cafe4.png",
    },

    objeto3 = {
        nome: "Frozen Café Limão",
        preco: 18.00,
        disponivel: true,
        tamanho: 350,
        sabor: "Limão",
        ingredientes: ["Frozen de limão siciliano e ", "capuccino tradicional."],
        img: "/midias/cafe1.png",
    },
]


let img = new Image(200, 200)
img.src = "/midias/cafe2.png"

let titulo = document.createElement("h2")
titulo.innerHTML = "Frozen Café Tradicional"

let preco = document.createElement("li")
preco.innerHTML = "16R$"

let botao = document.createElement("button")
botao.innerHTML = "+"

let listaVar = document.getElementById("lista1")
listaVar.appendChild(img)
listaVar.insertAdjacentElement("beforeend", titulo)
listaVar.insertAdjacentElement("beforeend", preco)
listaVar.insertAdjacentElement("beforeend", botao)

///////////////////////////////////////////////////////////////////////

let img2 = new Image(200, 200)
img2.src = "/midias/cafe4.png"

let titulo2 = document.createElement("h2")
titulo2.innerHTML = "Frozen Café Doce de Leite"

let preco2 = document.createElement("li")
preco2.innerHTML = "17R$"

let botao2 = document.createElement("button")
botao2.innerHTML = "+"

let lista2Var = document.getElementById("lista2")
lista2Var.appendChild(img2)
lista2Var.insertAdjacentElement("beforeend", titulo2)
lista2Var.insertAdjacentElement("beforeend", preco2)
lista2Var.insertAdjacentElement("beforeend", botao2)

///////////////////////////////////////////////////////////////////////////

let img3 = new Image(200, 200)
img3.src = "/midias/cafe1.png"

let titulo3 = document.createElement("h2")
titulo3.innerHTML = "Frozen Café Limão"

let preco3 = document.createElement("li")
preco3.innerHTML = "18R$"

let botao3 = document.createElement("button")
botao3.innerHTML = "+"

let lista3Var = document.getElementById("lista3")
lista3Var.appendChild(img3)
lista3Var.insertAdjacentElement("beforeend", titulo3)
lista3Var.insertAdjacentElement("beforeend", preco3)
lista3Var.insertAdjacentElement("beforeend", botao3)

//////////////////////////////////////////////////////////////////////////

function buscaItem(arrayDeObjetos) {
    console.log(arrayDeObjetos.nome);
    let inputVar = document.getElementById("input")
    listaVar.innerHTML = ""
    lista2Var.innerHTML = ""
    lista3Var.innerHTML = ""
    listaVar.classList.remove('ul')
    lista2Var.classList.remove('ul')
    lista3Var.classList.remove('ul')

    for (let i in arrayDeObjetos) {
        if (arrayDeObjetos[i].nome === inputVar.value) {
            let img = new Image(200, 200)
            img.src = arrayDeObjetos[i].img

            let titulo = document.createElement("h2")
            titulo.innerHTML = arrayDeObjetos[i].nome

            let preco = document.createElement("li")
            preco.setAttribute("id", "listaPreco")
            preco.innerHTML = arrayDeObjetos[i].preco + "R$"

            let tamanho = document.createElement("li")
            tamanho.setAttribute("id", "listaTamanho")
            tamanho.innerHTML = arrayDeObjetos[i].tamanho + "ml"

            let string = "\nFeito com "
            for (let j of arrayDeObjetos[i].ingredientes) {
                string += `${j} `
            }
            let ingredientes = document.createElement("li")
            ingredientes.innerHTML = string

            let listaVar = document.getElementById("lista1")
            listaVar.setAttribute("class", "classLista1")
            listaVar.appendChild(img)
            listaVar.insertAdjacentElement("beforeend", titulo)
            listaVar.insertAdjacentElement("beforeend", ingredientes)
            listaVar.insertAdjacentElement("beforeend", preco)
            listaVar.insertAdjacentElement("beforeend", tamanho)
        }
    }

    if (inputVar.value != "Frozen Café Doce de Leite" && inputVar.value != "Frozen Café Tradicional" && inputVar.value != "Frozen Café Limão") {
        alert("Pedido não encontrado")
        window.location.reload(true);
    }
}

function pagInicial(event) {
    window.location.reload(true);
    event.preventDefault()
}

function abreTradicional(arrayDeObjetos) {
    listaVar.innerHTML = ""
    lista2Var.innerHTML = ""
    lista3Var.innerHTML = ""
    listaVar.classList.remove('ul')
    lista2Var.classList.remove('ul')
    lista3Var.classList.remove('ul')

    for (let i in arrayDeObjetos) {
        if (arrayDeObjetos[i].nome === titulo.innerHTML) {
            let img = new Image(200, 200)
            img.src = arrayDeObjetos[i].img

            let titulo = document.createElement("h2")
            titulo.innerHTML = arrayDeObjetos[i].nome

            let preco = document.createElement("li")
            preco.setAttribute("id", "listaPreco")
            preco.innerHTML = arrayDeObjetos[i].preco + "R$"

            let tamanho = document.createElement("li")
            tamanho.setAttribute("id", "listaTamanho")
            tamanho.innerHTML = arrayDeObjetos[i].tamanho + "ml"

            let string = "\nFeito com "
            for (let j of arrayDeObjetos[i].ingredientes) {
                string += `${j} `
            }
            let ingredientes = document.createElement("li")
            ingredientes.innerHTML = string

            let listaVar = document.getElementById("lista1")
            listaVar.setAttribute("class", "classLista1")
            listaVar.appendChild(img)
            listaVar.insertAdjacentElement("beforeend", titulo)
            listaVar.insertAdjacentElement("beforeend", ingredientes)
            listaVar.insertAdjacentElement("beforeend", preco)
            listaVar.insertAdjacentElement("beforeend", tamanho)
        }
    }
}

function abreDoceDeLeite(arrayDeObjetos) {
    listaVar.innerHTML = ""
    lista2Var.innerHTML = ""
    lista3Var.innerHTML = ""
    listaVar.classList.remove('ul')
    lista2Var.classList.remove('ul')
    lista3Var.classList.remove('ul')
    listaVar.setAttribute("onclick", "")


    for (let i in arrayDeObjetos) {
        if (arrayDeObjetos[i].nome === titulo2.innerHTML) {
            let img = new Image(200, 200)
            img.src = arrayDeObjetos[i].img

            let titulo = document.createElement("h2")
            titulo.innerHTML = arrayDeObjetos[i].nome

            let preco = document.createElement("li")
            preco.setAttribute("id", "listaPreco")
            preco.innerHTML = arrayDeObjetos[i].preco + "R$"

            let tamanho = document.createElement("li")
            tamanho.setAttribute("id", "listaTamanho")
            tamanho.innerHTML = arrayDeObjetos[i].tamanho + "ml"

            let string = "\nFeito com "
            for (let j of arrayDeObjetos[i].ingredientes) {
                string += `${j} `
            }
            let ingredientes = document.createElement("li")
            ingredientes.innerHTML = string

            let listaVar = document.getElementById("lista1")
            listaVar.setAttribute("class", "classLista1")
            listaVar.appendChild(img)
            listaVar.insertAdjacentElement("beforeend", titulo)
            listaVar.insertAdjacentElement("beforeend", ingredientes)
            listaVar.insertAdjacentElement("beforeend", preco)
            listaVar.insertAdjacentElement("beforeend", tamanho)
        }
    }
}


function abreLimao(arrayDeObjetos) {
    listaVar.innerHTML = ""
    lista2Var.innerHTML = ""
    lista3Var.innerHTML = ""
    listaVar.classList.remove('ul')
    lista2Var.classList.remove('ul')
    lista3Var.classList.remove('ul')
    listaVar.setAttribute("onclick", "")

    for (let i in arrayDeObjetos) {
        if (arrayDeObjetos[i].nome === titulo3.innerHTML) {
            let img = new Image(200, 200)
            img.src = arrayDeObjetos[i].img

            let titulo = document.createElement("h2")
            titulo.innerHTML = arrayDeObjetos[i].nome

            let preco = document.createElement("li")
            preco.setAttribute("id", "listaPreco")
            preco.innerHTML = arrayDeObjetos[i].preco + "R$"

            let tamanho = document.createElement("li")
            tamanho.setAttribute("id", "listaTamanho")
            tamanho.innerHTML = arrayDeObjetos[i].tamanho + "ml"

            let string = "\nFeito com "
            for (let j of arrayDeObjetos[i].ingredientes) {
                string += `${j} `
            }
            let ingredientes = document.createElement("li")
            ingredientes.innerHTML = string

            let listaVar = document.getElementById("lista1")
            listaVar.setAttribute("class", "classLista1")
            listaVar.appendChild(img)
            listaVar.insertAdjacentElement("beforeend", titulo)
            listaVar.insertAdjacentElement("beforeend", ingredientes)
            listaVar.insertAdjacentElement("beforeend", preco)
            listaVar.insertAdjacentElement("beforeend", tamanho)
        }
    }
}


for (let i in arrayDeObjetos) {
    let string = ""
    string = `\n${arrayDeObjetos[i].nome.toUpperCase()}
    \nPreço:${arrayDeObjetos[i].preco}R$
    \nEstá Disponível:${arrayDeObjetos[i].disponivel}
    \nTamanho:${arrayDeObjetos[i].tamanho}ml
    \nSabor:${arrayDeObjetos[i].sabor}
    \nIngredientes:`
    for (let j of arrayDeObjetos[i].ingredientes) {
        string += j
    }
    console.log("Relatório" + string);
}

let mediaPreco = 0

function mediaDePreco(arrayDeObjetos) {
    for (i in arrayDeObjetos)
        mediaPreco += arrayDeObjetos[i].preco

    return mediaPreco /= arrayDeObjetos.length
}

console.log("Media de preco:", mediaDePreco(arrayDeObjetos));

for (i in arrayDeObjetos) {
    if (arrayDeObjetos[i].disponivel === true) {
        console.log("Estão disponíveis?", true);
    }
}