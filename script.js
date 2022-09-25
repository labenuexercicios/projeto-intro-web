//Cientistas mulheres incriveis
//Criei objetos com os dados de cada cientista
const cientista1 = {
    nome: "Katie Bouman",
    descoberta: "Primeira foto registrada de um buraco negro",
    idadeDescoberta: 29,
    anoDescoberta: 2019,
    pais: "Estados Unidos",
    viva: true,
    areaPesquisa: ["fotografia", "universo", "algoritimo"],  //array com caracteristicas (escolhi area de pesquisa)
    linkImagem: "https://s2.glbimg.com/LC0BkSbOs0672gk85aQQDlysN4c=/e.glbimg.com/og/ed/f/original/2019/04/11/captura_de_tela_2019-04-11_as_13.13.44.png"
}

const cientista2 = {
    nome: "Ada Lovelace",
    descoberta: "Desenvolveu o primeiro algoritmo que foi processado por uma máquina",
    idadeDescoberta: 28,
    anoDescoberta: 1843,
    pais: "Reino Unido",
    viva: false,
    areaPesquisa: ["matematica", "programacao", "computador"],
    linkImagem: "https://blogdaengenharia.com/wp-content/uploads/ada-lovelace-blog-da-engenharia-3.jpg"
}

const cientista3 = {
    nome: "Marie Curie",
    descoberta: "Descobriu elementos químicos, como o polônio e rádio, que auxiliavam em tratamentos médicos. Foi a primeira mulher a ganhar o Prêmio Nobel de Física",
    idadeDescoberta: 31,
    anoDescoberta: 1898,
    pais: "Polônia",
    viva: false, 
    areaPesquisa: ["quimica", "medicina", "radioatividade"],
    linkImagem: "https://super.abril.com.br/wp-content/uploads/2021/04/Marie-Curie-a-polonesa-mais-brilhante-da-historia.png?w=1024&resize=1200,800"
}

const cientista4 = {
    nome: "Jaqueline Goes de Jesus",
    descoberta: "Sequenciou o genoma da COVID-19 após 48 horas do primeiro caso no Brasil",
    idadeDescoberta: 32,
    anoDescoberta: 2020,
    pais: "Brasil",
    viva: true,
    areaPesquisa: ["biologia", "medicina", "genetica"],
    linkImagem: "https://claudia.abril.com.br/wp-content/uploads/2022/02/Copia-de-IMG_7294-2.jpg?quality=85&strip=info"
}

const cientista5 = {
    nome: "Hedy Lamarr",
    descoberta: "Criou o WiFi e um aparelho que fazia interferência em rádios (usado para despistar os radares nazistas na 2ª Guerra Mundial). Também foi atriz e cineasta",
    idadeDescoberta: 28,
    anoDescoberta: 1942,
    pais: "Austria",
    viva: false,
    areaPesquisa: ["tecnologia", "cinema", "computador"],
    linkImagem: "https://i0.wp.com/jornalgrandeabc.com/wp-content/uploads/2021/04/Everett-Collection.jpg?fit=960%2C1099&ssl=1"
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