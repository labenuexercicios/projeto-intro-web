/*const prato = {
    prato: "strogonoff vegetariano",
    tempoDePreparo: 30,
    categoria: "almoço",
    dificuldade: "facil",
    ehVege: true,
    ingredientes: ["1 colher(sopa) de azeite", "cebola picada", "1 dente de alho picado", "2 xicaras(chá)de palmito em rodelas", "200g de cogumelos paris fatiados", "2 colheres(sopa) conhaque", "1 colher(chá) de sal", "1 pitada pimenta do reino", "2 tomates sem sementes picados", "1 colher(sopa) mostarda", "2 colheres(sopa) ketchup", "1 caixa de creme de leite(veg)"]
}


const prato2 = {
    prato: "Batata-doce frita",
    tempoDePreparo: 20,
    categoria: "almoço",
    dificuldade: "facil",
    ehVege: true,
    ingredientes: ["2 batatas-doce lavadas", "2 colheres de chá de óleo", "sal a gosto", "pimenta negra a gosto"]
}


const prato3 = {
    prato: "Brownie vegano de feijão",
    tempoDePreparo: 45,
    categoria: "sobremesa",
    dificuldade: "médio",
    ehVege: true,
    ingredientes: ["1 e 1/2 xicara(chá) de feijão preto cozido sem tempero", "1 xicara(chá) de açucar mascavo", "1/2 xicara(chá) de aveia em flocos finos", "3 colheres de sopa de óleo de coco", "2 colheres(chá) de extrato de baunilha", "2 colheres(sopa) de cacau em pó", "1 colher(chá) de bicabornato de sódio", "xicara (chá) de chocolate amargo picado"]
}


const prato4 = {
    prato: "Panqueca de ricota e uva-passa",
    tempoDePreparo: 25,
    categoria: "café da manhã",
    dificuldade: "fácil",
    ehVege: false,
    ingredientes: ["para massa,2 xicara(chá) de farinha de trigo", "2 de 1/2 xicará(chá) de leite", "3 ovos", "1 colher(chá) de sal", "manteiga para fritar", "para o recheio,2 xicarás(chá) de ricota fresca", "1/2 xicará(chá) de uva passa"]
}


/*console.log(`${prato.toLocaleUpperCase()}\n tempo: ${tempoDePreparo} min\n categoria: ${categoria}\n dificuldade: ${dificuldade}\n É vegano: ${ehVege}\n ingredientes: ${ingredientes}.`)
console.log(`${prato2.toLocaleUpperCase()}\n tempo: ${tempoDePreparo2} min\n categoria: ${categoria2}\n dificuldade: ${dificuldade2}\n É vegano: ${ehVege2}\n ingredientes: ${ingredientes2}.`)
console.log(`${prato3.toLocaleUpperCase()}\n tempo: ${tempoDePreparo3} min\n categoria: ${categoria3}\n dificuldade: ${dificuldade3}\n É vegano: ${ehVege3}\n ingredientes: ${ingredientes3}.`)
console.log(`${prato4.toLocaleUpperCase()}\n tempo: ${tempoDePreparo4} min\n categoria: ${categoria4}\n dificuldade: ${dificuldade4}\n É vegano: ${ehVege4}\n ingredientes: ${ingredientes4}.`)*/

/*let objeto1 = [

]
if (prato.ehVege === true) {
    objeto1.push(prato)
}
else {
    alert("O item não foi adicionado")
}
if (prato2.ehVege === true) {
    objeto1.push(prato2)
}
else {
    alert("O item não foi adicionado")
}
if (prato3.ehVege === true) {
    objeto1.push(prato3)
}
else {
    alert("O item não foi adicionado")
}
if (prato4.ehVege === true) {
    objeto1.push(prato4)
}
else {
    //alert("O item não foi adicionado")
}
// console.log(objeto1)

for (coisas of objeto1) {
    for (coisas1 in coisas) {
        console.log(`${coisas1}:${coisas[coisas1]}`)
    }
};*/

const receitasJuntinhas = [
    {
        pratotitulo: "strogonoff vegetariano",
        tempoDePreparo: 30,
        categoria: "almoço",
        dificuldade: "facil",
        ehVege: true,
        ingredientes: ["1 colher(sopa) de azeite", "cebola picada", "1 dente de alho picado", "2 xicaras(chá)de palmito em rodelas", "200g de cogumelos paris fatiados", "2 colheres(sopa) conhaque", "1 colher(chá) de sal", "1 pitada pimenta do reino", "2 tomates sem sementes picados", "1 colher(sopa) mostarda", "2 colheres(sopa) ketchup", "1 caixa de creme de leite(veg)"],
        imagem:"./imagens/strogonoff-vegetariano.jpg" 
        
    },
    {

        pratotitulo: "batata-doce frita",
        tempoDePreparo: 20,
        categoria: "almoço",
        dificuldade: "facil",
        ehVege: true,
        ingredientes: ["2 batatas-doce lavadas", "2 colheres de chá de óleo", "sal a gosto", "pimenta negra a gosto"],
        imagem:"./imagens/batata-doce.jpg"
    },
    {
        pratotitulo: "brownie vegano de feijão",
        tempoDePreparo: 45,
        categoria: "sobremesa",
        dificuldade: "médio",
        ehVege: true,
        ingredientes: ["1 e 1/2 xicara(chá) de feijão preto cozido sem tempero", "1 xicara(chá) de açucar mascavo", "1/2 xicara(chá) de aveia em flocos finos", "3 colheres de sopa de óleo de coco", "2 colheres(chá) de extrato de baunilha", "2 colheres(sopa) de cacau em pó", "1 colher(chá) de bicabornato de sódio", "xicara (chá) de chocolate amargo picado"],
        imagem: "./imagens/Brownie vegano de feijão.jpg" 
    },
     {
        pratotitulo: "panqueca de ricota e uva-passa",
        tempoDePreparo: 25,
        categoria: "café da manhã",
        dificuldade: "fácil",
        ehVege: false,
        ingredientes: ["para massa,2 xicara(chá) de farinha de trigo", "2 de 1/2 xicará(chá) de leite", "3 ovos", "1 colher(chá) de sal", "manteiga para fritar", "para o recheio,2 xicarás(chá) de ricota fresca", "1/2 xicará(chá) de uva passa"],
        imagem:"./imagens/panquecas-de-ricota-25.jpg"
    }
]
console.log(receitasJuntinhas[1])

const arrayReceita = receitasJuntinhas
function filtroPrato(objPratos, aryReceitas) {
    let pratosRetorno = {};
    for (let i = 0; i < objPratos.length; i++) {
        if (objPratos[i].pratotitulo.toLowerCase() === aryReceitas.toLowerCase()) {
            pratosRetorno.pratopratotitulo = objPratos[i].pratotitulo;
            pratosRetorno.tempoDePreparo = objPratos[i].tempoDePreparo;
            pratosRetorno.categoria = objPratos[i].categoria;
            pratosRetorno.dificuldade = objPratos[i].dificuldade;
            pratosRetorno.ehVege = objPratos[i].ehVege;
            pratosRetorno.ingredientes = objPratos[i].ingredientes;
        }
        if (pratosRetorno.pratotitulo && pratosRetorno.pratotitulo.toLowerCase() !== aryReceitas.toLowerCase()) {
            alert("Não encontrei receita")

        }
        else {
            return pratosRetorno;
        }
    }



}
const Receitinhas = filtroPrato(arrayReceita,"brownie vegano de feijão")
console.log(Receitinhas)

const listaReceitas = document.createElement("ul")
const container = document.getElementById("container")
container.insertAdjacentElement("beforeend", listaReceitas);

listaReceitas.setAttribute("id", "receitas-listadas");

for (i = 0; i < receitasJuntinhas.length; i++) {
    listaReceitas.innerHTML += `<li> ${receitasJuntinhas[i].imagem}<\li>`

    listaReceitas.innerHTML += `<li><a href="https://www.guiadasemana.com.br/receitas/galeria/receitas-vegetarianas-praticas-e-faceis">${receitasJuntinhas[i].pratotitulo.toLocaleUpperCase()}<\a></li>`
    listaReceitas.innerHTML += `<li>CATEGORIA: ${receitasJuntinhas[i].categoria}<\li>`
    listaReceitas.innerHTML += `<li>DIFICULDADE: ${receitasJuntinhas[i].dificuldade}<\li>`
    listaReceitas.innerHTML += `<li>È VEGANO? ${receitasJuntinhas[i].ehVege}<\li>`
    listaReceitas.innerHTML += `<li id="ingredientes">INGREDIENTES: ${receitasJuntinhas[i].ingredientes}<\li>`
}
function buscar() {
    const receitasDigitadas = document.getElementById("buscar")
    const pesquisarReceita = receitasDigitadas.value
    const receitaPesquisada = filtroPrato(receitasJuntinhas, pesquisarReceita)
    console.log(receitaPesquisada)
}

