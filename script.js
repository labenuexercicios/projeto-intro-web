

const item1 = {
    nome: "proteína da soja", 
    quantidadeProteina : 12,
    vegetariano: true,
    sugestoesPratos: ["Molho Bolonhesa", " Almôndegas", " Hamburguer"],
    imagem: "./imgProjeto/protSoja.jpg",
    link: "https://pt.wikipedia.org/wiki/Prote%C3%ADna_de_soja"
}
const item2= {
    nome: "grão de bico",
    quantidadeProteina: 12,
    vegetariano: true,
    sugestoesPratos: ["Strogonofe", " Cremes", " Sopas", " Pates"],
    imagem: "./imgProjeto/graoBico.jpg",
    link: "https://pt.wikipedia.org/wiki/Gr%C3%A3o-de-bico"
}

const item3= {
    nome: "lentilhas",
    quantidadeProteina: 9,
    vegetariano: true,
    sugestoesPratos: ["Acompanhando Arroz", " Sopas", " Cremes", " Hamburguer"],
    imagem: "./imgProjeto/Lentilha.jpg",
    link: "https://pt.wikipedia.org/wiki/Lentilha"

}

const mediaProteinas = (item1.quantidadeProteina + item2.quantidadeProteina + item3.quantidadeProteina) / 3
console.log("A média de proteínas é de", mediaProteinas);

const vegetariano = item1.vegetariano && item2.vegetariano && item3.vegetariano
console.log("Retornando o booleano informando se todos itens são vegetarianos: ", vegetariano)


let arrayObjetos = []

function pushArray(item){
    if(item.vegetariano){
        arrayObjetos.push(item)
    }else{
        alert("O item não é vegetariano!")
    }
}

pushArray(item1)
pushArray(item2)
pushArray(item3)

console.log("Os itens vegetarianos são: ", arrayObjetos)

let nomeString1 = ``
    for(let i in item1.sugestoesPratos){
        nomeString1 += `${item1.sugestoesPratos[i]}`
}

let nomeString2 = ``
    for(let i in item2.sugestoesPratos){
        nomeString2 += `${item2.sugestoesPratos[i]}`
}

let nomeString3 = ``
    for(let i in item3.sugestoesPratos){
        nomeString3 += `${item3.sugestoesPratos[i]}`
}

console.log(`${item1.nome.toUpperCase()} \n Quantidade de Proteínas: ${item1.quantidadeProteina} \n Vegetariano: ${item1.vegetariano} \n Sugestões de Pratos: ${nomeString1}`)

console.log(`${item2.nome.toUpperCase()} \n Quantidade de Proteínas: ${item2.quantidadeProteina} \n Vegetariano: ${item2.vegetariano} \n Sugestões de Pratos: ${nomeString2}`)

console.log(`${item3.nome.toUpperCase()} \n Quantidade de Proteínas: ${item3.quantidadeProteina} \n Vegetariano: ${item3.vegetariano} \n Sugestões de Pratos: ${nomeString3}`)

function imprimeObjeto(referencia){
    let stringObjeto = ``
    stringObjeto = referencia
}

imprimeObjeto(item1)
//itrem1?


const funcaoBusca = (array, input) => {
    for (i in array) {
      for (j in array[i]) {
        if (array[i][j] === input) {
            let main = document.getElementById("main");
            let div = document.createElement("div");
            let section = document.createElement("section");
            let img = document.createElement("img");
            let link = document.createElement("a")
            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            div.setAttribute("id" , "div-sections")
            img.src += array[i].imagem; 
            link.setAttribute("class" , "a-footer");
            link.setAttribute("href",array[i].link);
            link.setAttribute("target","_blank");
            link.innerHTML += array[i].nome.toUpperCase();
            li1.innerHTML += "Nome: ";
            li2.innerHTML += `Quantidade de Proteínas (100g.): ${array[i].quantidadeProteina}`;
            li3.innerHTML += `Sugestões de Pratos: ${array[i].sugestoesPratos}`;
            section.setAttribute("id", "section1");
            li1.appendChild(link);
            main.appendChild(div);
            div.appendChild(section);
            section.append(img);
            section.appendChild(ul);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            main.insertAdjacentElement("beforeend", div)
        }
      }
    }
  };

  function busca(event){
    event.preventDefault()
    let input = document.getElementById("input").value.toLowerCase()
    if (input === "") {
        alert("Nenhum item foi encontrado!");
    }else{
        document.getElementById("div-sections").remove()
        funcaoBusca(arrayObjetos, input)
    }
  }

  //function criaObj (arrayObj){
    for (i in arrayObjetos) {
            let div = document.getElementById("div-sections");
            let section = document.createElement("section");
            let img = document.createElement("img");
            let link = document.createElement("a");
            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            link.setAttribute("class" , "a-footer");
            img.src = arrayObjetos[i].imagem;
            link.setAttribute("href",arrayObjetos[i].link);
                link.setAttribute("target","_blank");
                link.innerHTML += arrayObjetos[i].nome.toUpperCase();
                li1.innerHTML += "Nome: ";
                li2.innerHTML += `Quantidade de Poteínas (100g): ${arrayObjetos[i].quantidadeProteina}`;
                li3.innerHTML += `Sugestões de Pratos: ${arrayObjetos[i].sugestoesPratos}`;
            section.setAttribute("id", "section1");
            div.appendChild(section);
            li1.appendChild(link);
            section.append(img);
            section.appendChild(ul);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
        }
    /* }
        
    criaObj(arrayObjetos) */  