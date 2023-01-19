const objReceita1 = {
    nome: "arroz básico",
    tempo: 30,
    forno: false,
    ingredientes: ["1 colher(sopa) de óleo", "meia cebola picada", "1 dente de alho picado", "1 chícara(chá) de arroz", "2 chícaras(chá) água fervente"],
    preparo: ["Em uma panela, aqueça o óleo e refogue a cebola e o alho até que estejam transparentes", "Junte o arroz e refogue bem até ficar brilhante", "Abaixe o fogo, tampe parcialmente a panela e deixe cozinhar até o arroz secar", "Desligue o fogo, tampe a panela por mais 5 minutos para que o arroz termine o cozimento em seu próprio vapor"],
    imgSrc: "Assets\Arroz.jpg"
}

const objReceita2 = {
    nome: "batata assada",
    tempo: 25,
    forno: true,
    ingredientes: ["4 batatas médias", "3 Colheres de sopa de azeite", "Sal e pimenta a gosto", "Orégano", "1 dente de alho"],
    preparo: ["Descasque as batatas e corte em pedaços", "Coloque as batatas em uma panela com água fervente e deixe cozinhar por 10 minutos", "Escorra a água e coloque as batatas em uma travessa", "Tempere com o sal, orégano e a pimenta, regue com azeite e jogue o alho picado", "Leve ao forno pré-aquecido a 180°C por 30 minutos"],
    imgSrc: "Assets\Batata Assada.jpg"
}

const objReceita3 = {
    nome: "frango grelhado",
    tempo: 30,
    forno: false,
    ingredientes: ["1 filé de peito de frango", "1 colher(sopa) de sal", "1 colher(chá) de açúcar", "meia colher(sopa) de coentro em pó", "meia colher(sopa) de páprica picante", "1 dente de alho amassado", "água", "1 colher(chá) de azeite", "Pimenta-do-reino a gosto"],
    preparo: ["Em um recipiente, tempere o frango com açúcar, o sal, o coentro, a páprica, o alho e misture bem para o tempero pegar em toda a carne", "Adicione água até cobrir o filé, cubra o recipiente e deixe marinar por 20 minutos na geladeira.", "Retire o frango da salmoura e lave a carne para retirar o excesso do tempero", "Esquente uma frigideira de fundo triplo (ou a bistequeira) em fogo médio", "Coloque o azeite, adicione o frango com a parte lisa para baixo e deixe por 2 minutos sem mexer", "Salpique um pouco de pimenta, sal, vire e deixe selar o outro lado por mais 2 minutos", "Vire de novo, tempere apenas com pimenta e deixe mais 3 minutos. Mais uma vez, vire a carne, salpique pimenta e deixe mais 3 minutos"],
    imgSrc:"Assets\Frango Grelhado.jpg"
}

let objetos = []

objetos.push(objReceita1, objReceita2, objReceita3)

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

/*search(objetos, input)*/