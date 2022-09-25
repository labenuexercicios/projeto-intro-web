//Cientistas mulheres incriveis
//Criei objetos com os dados de cada cientista
const cientista1 = {
    nome: "Katie Bouman",
    descoberta: "Primeira foto registrada de um buraco negro",
    idadeDescoberta: 29,
    anoDescoberta: 2019,
    pais: "Estados Unidos",
    viva: true,
    areaPesquisa: ["fotografia", "universo", "algoritimo"]  //array com caracteristicas (escolhi area de pesquisa)
}

const cientista2 = {
    nome: "Ada Lovelace",
    descoberta: "Desenvolveu o primeiro algoritmo que foi processado por uma máquina",
    idadeDescoberta: 28,
    anoDescoberta: 1843,
    pais: "Reino Unido",
    viva: false,
    areaPesquisa: ["matematica", "programacao", "computador"]
}

const cientista3 = {
    nome: "Maria Curie",
    descoberta: "Descobriu elementos químicos, como o polônio e rádio, que auxiliavam em tratamentos médicos. Foi a primeira mulher a ganhar o Prêmio Nobel de Física",
    idadeDescoberta: 31,
    anoDescoberta: 1898,
    pais: "Polônia",
    viva: false, 
    areaPesquisa: ["quimica", "medicina", "radioatividade"]
}

const cientista4 = {
    nome: "Jaqueline Goes de Jesus",
    descoberta: "Sequenciou o genoma da COVID-19 após 48 horas do primeiro caso no Brasil",
    idadeDescoberta: 32,
    anoDescoberta: 2020,
    pais: "Brasil",
    viva: true,
    areaPesquisa: ["biologia", "virus", "genetica"]
}

const cientista5 = {
    nome: "Hedy Lamarr",
    descoberta: "Criou o WiFi e um aparelho que fazia interferência em rádios (usado para despistar os radares nazistas na 2ª Guerra Mundial). Além de também ser atriz e cineasta",
    idadeDescoberta: 28,
    anoDescoberta: 1942,
    pais: "Austria",
    viva: false,
    areaPesquisa: ["tecnologia", "cinema", "computador"]  
}

//Semana 3
//item 1
let guardarObjeto = [cientista1, cientista2, cientista3, cientista4, cientista5]
for (i of guardarObjeto) {
    i.areaPesquisa = i.areaPesquisa.join(", ")
}

// console.log(cientista3);

//item 2
// for (i in cientista1) {
//     console.log(cientista1[i]);
// }  -->  isso seria sem função, ai teria que colocar um objeto de cada vez

//usando função
function imprimirPropriedades (objeto) {
    for (propriedade in objeto) {
        console.log(objeto[propriedade]);
    }
    console.log("======================================================");
}


// imprimirPropriedades(cientista1)
// imprimirPropriedades(cientista2)
// imprimirPropriedades(cientista3)
// imprimirPropriedades(cientista4)
// imprimirPropriedades(cientista5)

//item 3
function stringComPropriedades (objeto) {
    let arrayPropriedades = []
    let paraString = ""
    for (i in objeto) {
        arrayPropriedades.push(objeto[i])
        paraString = arrayPropriedades.join(", ")
    }
    console.log(paraString);
    console.log("=====================================================");
}

// stringComPropriedades(cientista1)
// stringComPropriedades(cientista2)
// stringComPropriedades(cientista3)
// stringComPropriedades(cientista4)
// stringComPropriedades(cientista5)

//item 4
function procurarString (arrayObjetos, stringPesquisar) {
    const stringFiltrada = arrayObjetos.filter((objeto) => {
        if (objeto.nome === stringPesquisar) {
            return objeto
        }
    })

    if (stringFiltrada.length === 0) {
        alert ("Nome não encontrado")
    } else {
        console.log(stringFiltrada);
    }
}

// procurarString(guardarObjeto, "Ada Lovelace")