const receita1 = "arroz básico"
const tempo1 = 30
const forno1 = false
const ingredientes1 = ["1 colher(sopa) de óleo", "meia cebola picada", "1 dente de alho picado", "1 chícara(chá) de arroz", "2 chícaras(chá) água fervente"]
const preparo1 = ["Em uma panela, aqueça o óleo e refogue a cebola e o alho até que estejam transparentes", "Junte o arroz e refogue bem até ficar brilhante", "Abaixe o fogo, tampe parcialmente a panela e deixe cozinhar até o arroz secar", "Desligue o fogo, tampe a panela por mais 5 minutos para que o arroz termine o cozimento em seu próprio vapor"]


const receita2 = "batata assada"
const tempo2 = 25
const forno2 = true
const ingredientes2 = ["4 batatas médias", "3 Colheres de sopa de azeite", "Sal e pimenta a gosto", "Orégano", "1 dente de alho"]
const preparo2 = ["Descasque as batatas e corte em pedaços", "Coloque as batatas em uma panela com água fervente e deixe cozinhar por 10 minutos", "Escorra a água e coloque as batatas em uma travessa", "Tempere com o sal, orégano e a pimenta, regue com azeite e jogue o alho picado", "Leve ao forno pré-aquecido a 180°C por 30 minutos"]


const receita3 = "frango grelhado"
const tempo3 = 30
const forno3 = false
const ingredientes3 = ["1 filé de peito de frango", "1 colher(sopa) de sal", "1 colher(chá) de açúcar", "meia colher(sopa) de coentro em pó", "meia colher(sopa) de páprica picante", "1 dente de alho amassado", "água", "1 colher(chá) de azeite", "Pimenta-do-reino a gosto"]
const preparo3 = ["Em um recipiente, tempere o frango com açúcar, o sal, o coentro, a páprica, o alho e misture bem para o tempero pegar em toda a carne", "Adicione água até cobrir o filé, cubra o recipiente e deixe marinar por 20 minutos na geladeira.", "Retire o frango da salmoura e lave a carne para retirar o excesso do tempero", "Esquente uma frigideira de fundo triplo (ou a bistequeira) em fogo médio", "Coloque o azeite, adicione o frango com a parte lisa para baixo e deixe por 2 minutos sem mexer", "Salpique um pouco de pimenta, sal, vire e deixe selar o outro lado por mais 2 minutos", "Vire de novo, tempere apenas com pimenta e deixe mais 3 minutos. Mais uma vez, vire a carne, salpique pimenta e deixe mais 3 minutos"]

//1

const ingredientes1String = []
const preparo1String = []

for (let i = 0; i < ingredientes1.length; i++) {
    ingredientes1String.push(ingredientes1[i])
}

for (let i = 0; i < preparo1.length; i++) {
    preparo1String.push(preparo1[i])
}

console.log(receita1.toUpperCase() + "\n\nTempo de preparo:", tempo1.toString(), "min\n\nVai ao forno:", forno1 + "\n\nIngredientes:", ingredientes1String.toString(), "\n\nModo de Preparo:", preparo1String.toString() + "\n\n")

const ingredientes2String = []
const preparo2String = []

for (let i = 0; i < ingredientes2.length; i++) {
    ingredientes2String.push(ingredientes2[i])
}

for (let i = 0; i < preparo2.length; i++) {
    preparo2String.push(preparo2[i])
}

console.log(receita2.toUpperCase() + "\n\nTempo de preparo:", tempo2.toString(), "min\n\nVai ao forno:", forno2 + "\n\nIngredientes:", ingredientes2String.toString(), "\n\nModo de Preparo:", preparo2String.toString() + "\n\n")

const ingredientes3String = []
const preparo3String = []

for (let i = 0; i < ingredientes3.length; i++) {
    ingredientes3String.push(ingredientes3[i])
}

for (let i = 0; i < preparo3.length; i++) {
    preparo3String.push(preparo3[i])
}

console.log(receita3.toUpperCase() + "\n\nTempo de preparo:", tempo3.toString(), "min\n\nVai ao forno:", forno3 + "\n\nIngredientes:", ingredientes3String.toString(), "\n\nModo de Preparo:", preparo3String.toString() + "\n\n")

// 2

const objReceita1 = {
    nome: "arroz básico",
    tempo: 30,
    forno: false,
    ingredientes: ["1 colher(sopa) de óleo", "meia cebola picada", "1 dente de alho picado", "1 chícara(chá) de arroz", "2 chícaras(chá) água fervente"],
    preparo: ["Em uma panela, aqueça o óleo e refogue a cebola e o alho até que estejam transparentes", "Junte o arroz e refogue bem até ficar brilhante", "Abaixe o fogo, tampe parcialmente a panela e deixe cozinhar até o arroz secar", "Desligue o fogo, tampe a panela por mais 5 minutos para que o arroz termine o cozimento em seu próprio vapor"]
}

const objReceita2 = {
    nome: "batata assada",
    tempo: 25,
    forno: true,
    ingredientes: ["4 batatas médias", "3 Colheres de sopa de azeite", "Sal e pimenta a gosto", "Orégano", "1 dente de alho"],
    preparo: ["Descasque as batatas e corte em pedaços", "Coloque as batatas em uma panela com água fervente e deixe cozinhar por 10 minutos", "Escorra a água e coloque as batatas em uma travessa", "Tempere com o sal, orégano e a pimenta, regue com azeite e jogue o alho picado", "Leve ao forno pré-aquecido a 180°C por 30 minutos"]
}

const objReceita3 = {
    nome: "frango grelhado",
    tempo: 30,
    forno: false,
    ingredientes: ["1 filé de peito de frango", "1 colher(sopa) de sal", "1 colher(chá) de açúcar", "meia colher(sopa) de coentro em pó", "meia colher(sopa) de páprica picante", "1 dente de alho amassado", "água", "1 colher(chá) de azeite", "Pimenta-do-reino a gosto"],
    preparo: ["Em um recipiente, tempere o frango com açúcar, o sal, o coentro, a páprica, o alho e misture bem para o tempero pegar em toda a carne", "Adicione água até cobrir o filé, cubra o recipiente e deixe marinar por 20 minutos na geladeira.", "Retire o frango da salmoura e lave a carne para retirar o excesso do tempero", "Esquente uma frigideira de fundo triplo (ou a bistequeira) em fogo médio", "Coloque o azeite, adicione o frango com a parte lisa para baixo e deixe por 2 minutos sem mexer", "Salpique um pouco de pimenta, sal, vire e deixe selar o outro lado por mais 2 minutos", "Vire de novo, tempere apenas com pimenta e deixe mais 3 minutos. Mais uma vez, vire a carne, salpique pimenta e deixe mais 3 minutos"]
}

let objetos = []

objetos.push(objReceita1, objReceita2, objReceita3)

for (obj of objetos) {
    for (propriedade in obj) {
        console.log(`${propriedade}: ${obj[propriedade]}`)
    }
    console.log("")
}

//3

function objReports(obj) {
    for (o of obj) {
        for (propriedade in o) {
            console.log(`${propriedade}: ${o[propriedade]}`)
        }
        console.log("")
    }
}
objReports(objetos)

//4

function search(arr, input) {
    const resultado = arr.filter((obj) => {
        return obj.nome.includes(input)
    })
    if (resultado.length > 0) {
        console.log(resultado)
    } else {
        alert("Nenhum item encontrado.")
    }
}

search(objetos, "frango")