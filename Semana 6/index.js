const objReceita1 = {
    nome: "Arroz Básico",
    tempo: 30,
    forno: false,
    ingredientes: ["1 colher(sopa) de óleo", "Meia cebola picada", "1 dente de alho picado", "1 chícara(chá) de arroz", "2 chícaras(chá) de água fervente"],
    preparo: ["Em uma panela, aqueça o óleo e refogue a cebola e o alho até que estejam transparentes", "Junte o arroz e refogue bem até ficar brilhante", "Abaixe o fogo, tampe parcialmente a panela e deixe cozinhar até o arroz secar", "Desligue o fogo, tampe a panela por mais 5 minutos para que o arroz termine o cozimento em seu próprio vapor"],
    imgSrc: "Assets\\Arroz.jpg",
    link: "https://pt.wikipedia.org/wiki/Arroz"
}

const objReceita2 = {
    nome: "Batata Assada",
    tempo: 25,
    forno: true,
    ingredientes: ["4 batatas médias", "3 Colheres de sopa de azeite", "Sal e pimenta a gosto", "Orégano", "1 dente de alho"],
    preparo: ["Descasque as batatas e corte em pedaços", "Coloque as batatas em uma panela com água fervente e deixe cozinhar por 10 minutos", "Escorra a água e coloque as batatas em uma travessa", "Tempere com o sal, orégano e a pimenta, regue com azeite e jogue o alho picado", "Leve ao forno pré-aquecido a 180°C por 30 minutos"],
    imgSrc: "Assets\\Batata Assada.jpg",
    link: "https://pt.wikipedia.org/wiki/Batata"
}

const objReceita3 = {
    nome: "Frango Grelhado",
    tempo: 30,
    forno: false,
    ingredientes: ["1 filé de peito de frango", "1 colher(sopa) de sal", "1 colher(chá) de açúcar", "Meia colher(sopa) de coentro em pó", "Meia colher(sopa) de páprica picante", "1 dente de alho amassado", "água", "1 colher(chá) de azeite", "Pimenta-do-reino a gosto"],
    preparo: ["Em um recipiente, tempere o frango com açúcar, o sal, o coentro, a páprica, o alho e misture bem para o tempero pegar em toda a carne", "Adicione água até cobrir o filé, cubra o recipiente e deixe marinar por 20 minutos na geladeira.", "Retire o frango da salmoura e lave a carne para retirar o excesso do tempero", "Esquente uma frigideira de fundo triplo (ou a bistequeira) em fogo médio", "Coloque o azeite, adicione o frango com a parte lisa para baixo e deixe por 2 minutos sem mexer", "Salpique um pouco de pimenta, sal, vire e deixe selar o outro lado por mais 2 minutos", "Vire de novo, tempere apenas com pimenta e deixe mais 3 minutos. Mais uma vez, vire a carne, salpique pimenta e deixe mais 3 minutos"],
    imgSrc: "Assets\\Frango Grelhado.jpg",
    link: "https://pt.wikipedia.org/wiki/Frango"
}

const objetos = []

objetos.push(objReceita1, objReceita2, objReceita3)

//Itens manipulados com DOM

function renderListaItems(arr) {
    arr.forEach(obj => {
        const cards = document.getElementById("cards")

        const section = document.createElement("section")

        const img = document.createElement("img")
        img.src = obj.imgSrc

        const ul = document.createElement("ul")

        const titulo = document.createElement("li")
        titulo.setAttribute("class", "tituloReceita")

        const tituloCont = document.createElement("a")
        tituloCont.href = obj.link
        tituloCont.innerHTML = obj.nome

        titulo.append(tituloCont)

        const tempo = document.createElement("li")
        tempo.innerHTML = ("Tempo de preparo: " + obj.tempo + " minutos")

        const forno = document.createElement("li")
        forno.innerHTML = (`Vai ao forno: ${obj.forno ? "Sim" : "Não"}`)

        const ingredientes = document.createElement("li")
        ingredientes.setAttribute("class", "ingredientes")

        const ingrTitulo = document.createElement("a")
        ingrTitulo.setAttribute("class", "ingTitulo")
        ingrTitulo.innerHTML = "Ingredientes:"

        const ingrUl = document.createElement("ul")

        obj.ingredientes.forEach(renderProductList);

        function renderProductList(element) {
            const li = document.createElement('li');

            ingrUl.appendChild(li);

            li.innerHTML = li.innerHTML + element;
        }

        ingredientes.append(ingrTitulo, ingrUl)

        const preparo = document.createElement("li")
        preparo.setAttribute("class", "preparo")

        const prepTitulo = document.createElement("a")
        prepTitulo.setAttribute("class", "prepTitulo")
        prepTitulo.innerHTML = "Preparo:"

        const prepUl = document.createElement("ul")

        obj.preparo.forEach(renderPrepList);

        function renderPrepList(element) {
            const li = document.createElement('li');

            prepUl.appendChild(li);

            li.innerHTML = li.innerHTML + element;
        }

        preparo.append(prepTitulo, prepUl)

        section.append(img, ul)

        ul.append(titulo, tempo, forno, ingredientes, preparo)

        cards.append(section)
    });
}

renderListaItems(objetos)

//Pesquisa

function voltar() {
    cards.innerHTML = ""
    input.value = ""
    window.scrollTo(0, localStorage.getItem('position'))
    renderListaItems(objetos)
}

function search(arr) {

    const cards = document.getElementById("cards")
    cards.innerHTML = ""

    const input = document.getElementById("input")

    const resultado = arr.filter((obj) => {

        return obj.nome.toLowerCase().includes(input.value.toLowerCase().trim())
    })

    if (resultado.length > 0) {
        
        renderListaItems(resultado)
        const nCards = document.getElementById("cards")
        const nSection = document.createElement("section")
        nSection.setAttribute("id", "secVoltar")

        const voltarButton = document.createElement("button")
        voltarButton.innerHTML = "Voltar"
        voltarButton.setAttribute("onclick", "voltar()")

        nSection.append(voltarButton)
        nCards.append(nSection)

    } else{
        
        const nCards = document.getElementById("cards")
        const nSection = document.createElement("section")
        nSection.setAttribute("id", "secVoltar")

        const voltarButton = document.createElement("button")
        voltarButton.innerHTML = "Voltar"
        voltarButton.setAttribute("onclick", "voltar()")

        const semResultado = document.createElement("h2")
        semResultado.setAttribute("class", "semResultados")
        semResultado.innerHTML = "Pesquisa sem resultados"

        nSection.append(semResultado, voltarButton)
        nCards.append(nSection)
        /*alert("Busca sem resultados")*/
    }
    if (input.value.length === 0 && resultado.length !== 0) {
        const voltarButton = document.getElementById("secVoltar")
        voltarButton.remove()
        alert("Digite algo para pesquisar")
    }
}

/*CONSOLE*/

//Relatório

for (obj of objetos) {
    for (propriedade in obj) {
        console.log(`${propriedade}: ${obj[propriedade]}`)
    }
    console.log("")
}

//Média dos valores númericos de cada item

let soma = 0
let media = 0
for (obj of objetos) {
    media = (soma += obj.tempo) / objetos.length
}
console.log(`A média de tempo das receitas é de ${media}`)

//Verificar se todos os val booleanos dos objetos são true

const booleanCheck = []

for (obj of objetos) {
    booleanCheck.push(obj.forno)
}

let check = 0
for (item of objetos) {
    if (item.forno === true) {
        check += 0
    } else {
        check += 1
    }
}
if (check === 0) {
    console.log("Todos os itens possuem valor boleano True")
} else {
    console.log("Nem todos os itens possuem valor boleano True")
}