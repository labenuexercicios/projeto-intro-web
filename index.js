const audi = {
    nome: "Audi R8 2012",
    direcaoHidraulica: true,
    potenciaCv: 450,
    caracteristica: ["Peso 1.635 kg", "Velocidade maxima 310km/h", "0 a 100 em 4.2sec"],
    imagem: "./Imagens/AudiR8.jpg",
    imagem2: "/Imagens/audiR8 2.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=3288"
}

const maserati = {
    nome: "Maserati GranTurismo 2012",
    direcaoHidraulica: true,
    potenciaCv: 439,
    caracteristica: ["Peso 1.770 kg", "Velocidade maxima 301km/h", "0 a 100 em 4.6sec"],
    imagem: './Imagens/maserati.jpg',
    imagem2: "./Imagens/maserati2.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=4385"
}
const mercedes = {
    nome: "Mercedes-Benz SLR McLaren 2004",
    direcaoHidraulica: true,
    potenciaCv: 626,
    caracteristica: ["Peso 1.768 kg", "Velocidade maxima 334km/h", "0 a 100 em 3.8sec"],
    imagem: "./Imagens/mercedes.jpg",
    imagem2: "./Imagens/mercedes2.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=484"
}

const lambo = {
    nome: "Lamborghini Huracán 2015",
    direcaoHidraulica: true,
    potenciaCv: 610,
    caracteristica: ["Peso 1.422 kg", "Velocidade maxima 325km/h", "0 a 100 em 3.2sec"],
    imagem: "./Imagens/huracan2.jpg",
    imagem2: "./Imagens/huracanboa.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=2360"
}

const mustang = {
    nome: "Ford Mustang GT Premium 2018",
    direcaoHidraulica: false,
    potenciaCv: 466,
    caracteristica: ["Peso 1.422 kg", "Velocidade maxima 250km/h", "0 a 100 em 4.3sec"],
    imagem: "./Imagens/mustang.jpg",
    imagem2: "./Imagens/mustang2.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=8495"
}

const mcLaren = {
    nome: "McLaren P1 2014",
    direcaoHidraulica: false,
    potenciaCv: 737,
    caracteristica: ["Peso 1.450 kg", "Velocidade maxima 350km/h", "0 a 100 em 2.8sec"],
    imagem: "./Imagens/P1.jpg",
    imagem2: "./Imagens/mclaren2.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=2480"
}

const porsche = {
    nome: "Porsche 911 Carrera 2018",
    direcaoHidraulica: false,
    potenciaCv: 370,
    caracteristica: ["Peso 1.450 kg", "Velocidade maxima 293km/h", "0 a 100 em 4.2sec"],
    imagem: "./Imagens/porsche.jpg",
    imagem2: "./Imagens/porsche2.jpg",
    link: "https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=8222"
}



const media = (audi.potenciaCv + maserati.potenciaCv + mercedes.potenciaCv + lambo.potenciaCv + mustang.potenciaCv + mcLaren.potenciaCv + porsche.potenciaCv) / 7
console.log(`a media entre os items é ${media}`)

const verdadeOuFalso = audi.direcaoHidraulica && maserati.direcaoHidraulica && mercedes.direcaoHidraulica && lambo.direcaoHidraulica && mustang.direcaoHidraulica && mcLaren.direcaoHidraulica && porsche.direcaoHidraulica
console.log(`Verificação de todos os items: ${verdadeOuFalso}`)

// console.log(`${audi.nome.toUpperCase()}
// Direção hidraulica: ${audi.direcaoHidraulica}
// potenciaCv: ${audi.potenciaCv}
// características: ${audi.caracteristica.join(", ")}`)

// console.log(`${maserati.nome.toUpperCase()}
// Direção hidraulica: ${maserati.direcaoHidraulica}
// potenciaCv: ${maserati.potenciaCv}
// características: ${maserati.caracteristica.join(", ")}`)

// console.log(`${mercedes.nome.toUpperCase()}
// Direção hidraulica: ${mercedes.direcaoHidraulica}
// potenciaCv: ${mercedes.potenciaCv}
// características: ${mercedes.caracteristica.join(", ")}`)

// console.log(`${lambo.nome.toUpperCase()}
// Direção hidraulica: ${lambo.direcaoHidraulica}
// potenciaCv: ${lambo.potenciaCv}
// características: ${lambo.caracteristica.join(", ")}`)

// console.log(`${mustang.nome.toUpperCase()}
// Direção hidraulica: ${mustang.direcaoHidraulica}
// potenciaCv: ${mustang.potenciaCv}
// características: ${mustang.caracteristica.join(", ")}`)

// console.log(`${mcLaren.nome.toUpperCase()}
// Direção hidraulica: ${mcLaren.direcaoHidraulica}
// potenciaCv: ${mcLaren.potenciaCv}
// características: ${mcLaren.caracteristica.join(", ")}`)

// console.log(`${porsche.nome.toUpperCase()}
// Direção hidraulica: ${porsche.direcaoHidraulica}
// potenciaCv: ${porsche.potenciaCv}
// características: ${porsche.caracteristica.join(", ")}`)

const carroValidado = []

// audi.direcaoHidraulica === true? carroValidado.push(audi): alert(`${audi.nome} não foi adicionado`)
// maserati.direcaoHidraulica === true? carroValidado.push(maserati): alert(`${maserati.nome} não foi adicionado`)
// mercedes.direcaoHidraulica === true? carroValidado.push(mercedes): alert(`${mercedes.nome} não foi adicionado`)
// lambo.direcaoHidraulica === true? carroValidado.push(lambo): alert(`${lambo.nome} não foi adicionado`)
// mustang.direcaoHidraulica === true? carroValidado.push(mustang): alert(`${mustang.nome} não foi adicionado`)
// mcLaren.direcaoHidraulica === true? carroValidado.push(mcLaren): alert(`${mcLaren.nome} não foi adicionado`)
// porsche.direcaoHidraulica === true? carroValidado.push(porsche): alert(`${porsche.nome} não foi adicionado`)

// console.log(carroValidado)

// Semana 3

const todosCarros = [audi, maserati, mercedes, lambo, mustang, mcLaren, porsche,]

// for (let i in audi){
//     console.log(`${i.toUpperCase()}: ${audi[i]}`)
// }
// for (let i in maserati){
//     console.log(`${i.toUpperCase()}: ${maserati[i]}`)
// }
// for (let i in mercedes){
//     console.log(`${i.toUpperCase()}: ${mercedes[i]}`)
// }
// for (let i in lambo){
//     console.log(`${i.toUpperCase()}: ${lambo[i]}`)
// }
// for (let i in mustang){
//     console.log(`${i.toUpperCase()}: ${mustang[i]}`)
// }
// for (let i in mcLaren){
//     console.log(`${i.toUpperCase()}: ${mcLaren[i]}`)
// }
// for (let i in porsche){
//     console.log(`${i.toUpperCase()}: ${porsche[i]}`)
// }

const funcaoTodos = (carros) => {
    for (i of carros) {
        for (j in i) {
            console.log(`${j.toUpperCase()}: ${i[j]}`)
        }
    }
}
funcaoTodos(todosCarros)


// const retornaCarro = (carros, escrita) =>{
//     console.log(escrita)
//     const achou = carros.find((carros) => carros.nome === escrita)
//     if (!achou){
//         alert ("Nenhum resultado encontrado")
//     }
//     return console.log(achou)
// }
// retornaCarro(todosCarros,document.getElementById("pesquisa").value)

// const retornaCarro = () => {
//     const pesquisa = document.getElementById("pesquisa").value
//     const achou = todosCarros.find((carros) => carros.nome === pesquisa)
//     if (achou) {
//         document.querySelector("div.geral").style.visibility = 'hidden'
//         return document.getElementById("").style.visibility = "visible"
//     }

//     return alert("Nenhum resultado encontrado")
// }

const retornaCarro = (pagina) => {
    const pesquisa = document.getElementById("pesquisa").value.toLowerCase()
    let achado = todosCarros.filter((carro) => carro.nome.toLowerCase().includes(pesquisa))
    if (achado) {
    } if (achado.length === 0) {
        alert("Carro não encontrado")
        if (pagina === 2) { mostarCarrosCara(achado = todosCarros) }
        else { mostarCarrosInicial(achado = todosCarros) }
    } else if (pagina === 2) {
        mostarCarrosCara(achado)
    } else {
        mostarCarrosInicial(achado)
    }
}


const botao = document.getElementById("pesquisa");
botao.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("botao").click();
    }
});


const mostarCarrosInicial = (carros) => {
    document.getElementById("div-inicial").remove()
    const main = document.getElementById("main")
    const div = document.createElement("div")
    div.setAttribute("id", "div-inicial")
    div.classList.add("geralInicial")
    main.insertAdjacentElement("beforeend", div)
    if (!carros) { carros = todosCarros }
    carros.forEach(carro => {
        const paiInicial = document.getElementById("div-inicial")
        const novoItem = document.createElement("section")
        const imagem = document.createElement("img")
        const card = document.createElement("div")
        const list = document.createElement("ul")
        const link = document.createElement("a")
        const nome = document.createElement("h3")
        link.setAttribute("target", "_blank")
        nome.innerHTML = carro.nome
        imagem.classList.add("imagem")
        link.href = carro.link
        card.classList.add("card-body")
        imagem.src = carro.imagem
        novoItem.appendChild(imagem)
        novoItem.appendChild(card)
        card.appendChild(list)
        link.appendChild(nome)
        list.appendChild(link)
        paiInicial.insertAdjacentElement("beforeend", novoItem)
    });

}
const mostarCarrosCara = (carros) => {
    document.getElementById("div-pai").remove()
    const main = document.getElementById("main")
    const div = document.createElement("div")
    div.setAttribute("id", "div-pai")
    div.classList.add("geral")
    main.insertAdjacentElement("beforeend", div)
    if (!carros) { carros = todosCarros }
    carros.forEach(carro => {
        const pai = document.getElementById("div-pai")
        const novoItem = document.createElement("section")
        const imagem = document.createElement("img")
        const card = document.createElement("div")
        const list = document.createElement("ul")
        const link = document.createElement("a")
        const nome = document.createElement("h3")
        const cara1 = document.createElement("li")
        const cara2 = document.createElement("li")
        const cara3 = document.createElement("li")
        const cara4 = document.createElement("li")
        const cara5 = document.createElement("li")
        cara1.innerHTML = (`Direção hidráulica: ${carro.direcaoHidraulica ? "Sim" : "Não"}`)
        cara2.innerHTML = (`${carro.potenciaCv} Potência(cv)`)
        cara3.innerHTML = (`${carro.caracteristica[0]}`)
        cara4.innerHTML = (`${carro.caracteristica[1]}`)
        cara5.innerHTML = (`${carro.caracteristica[2]}`)
        link.setAttribute("target", "_blank")
        nome.innerHTML = carro.nome
        imagem.classList.add("imagem")
        link.href = carro.link
        card.classList.add("card-body")
        imagem.src = carro.imagem2
        novoItem.appendChild(imagem)
        novoItem.appendChild(card)
        card.appendChild(list)
        link.appendChild(nome)
        list.appendChild(link)
        list.appendChild(cara1)
        list.appendChild(cara2)
        list.appendChild(cara3)
        list.appendChild(cara4)
        list.appendChild(cara5)
        novoItem.classList.add("card-cara")
        pai.insertAdjacentElement("beforeend", novoItem)
    });
}

