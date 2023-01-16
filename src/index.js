//Comida

const cardapio = [];

const food1 = {
  nome: "pizza",
  descricao: "Uma massa com 'recheio' em cima",
  ingredientes:
    "farinha de trigo, água, sal, açucar, fermento biológico, +recheio opicional",
  preco: (20.0).toFixed(2).replace(".", ","),
  vegetariano: true,
  sabores: "frango, queijo, carne, outros",
  img: "./img/pizza.jpg",
};

const food2 = {
  nome: "coxinha de frango",
  descricao: "Uma massa com 'recheio' dentro de frango",
  ingredientes:
    "farinha de trigo, leite, caldo de frango, margarina, +recheio de frango",
  preco: (5.25).toFixed(2).replace(".", ","),
  vegetariano: false,
  sabores: "Apenas frango",
  img: "./img/coxinha.jpg",
};

const food3 = {
  nome: "pastel",
  descricao: "Uma massa frita com recheio dentro",
  ingredientes:
    "farinha de trigo, água, sal, óleo, aguardente, +recheio opicional",
  preco: (10.0).toFixed(2).replace(".", ","),
  vegetariano: true,
  sabores: "frango, queijo, carne, outros",
  img: "./img/pastel.jpg",
};

cardapio.push(food1, food2, food3);

//média dos valores de number
const avarange = () => {
  let media = 0;
  let soma = 0;

  for (let comida of cardapio) {
    comida = comida.preco.replace(",", ".");
    soma += Number(comida);
  }

  media = soma / cardapio.length;
  console.log(`Média dos valores: ${Math.floor(media)} reais`);
};

//se são todos true
const itsTrue = () => {
  let itsTrue = 0;
  let itsFalse = 0;
  for (let comida of cardapio) {
    comida.vegetariano != true ? itsFalse++ : itsTrue++;
  }
  if (itsFalse > itsTrue) {
    console.log("Nem todas as comidas são vegetariana");
  } else {
    console.log("Todas as comidas são vegetariana");
  }
};

//DOM para imprimir na tela
const section = document.querySelector("#catalogo");
section.classList.toggle("blur");
const main = document.querySelector("#set");

function createBlock(cardapio) {
  main.innerHTML = "";
  for (let comida of cardapio) {
    let block = document.createElement("article");
    block.setAttribute("class", "block");

    // for (let i in comida) {
    //   let paragraph = document.createElement("paragraph");
    //   paragraph.setAttribute("class", "conteudo");
    //   if (i == "nome") {
    //     paragraph.innerHTML = `${comida[i][0].toUpperCase()}${comida[
    //       i
    //     ].substring(1)}`;
    //     block.appendChild(paragraph);
    //   } else if (i === "preço") {
    //     paragraph.innerHTML = `R$${comida[i]}`;
    //     block.appendChild(paragraph);
    //   } else if (i === "img") {
    //     let img = document.createElement("img");
    //     img.setAttribute("src", comida[i]);
    //     paragraph.appendChild(img);
    //     block.appendChild(paragraph);
    //   } else if (i === "sabores") {
    //   } else {
    //     paragraph.innerHTML = `${i}: ${comida[i]}`;
    //     block.appendChild(paragraph);
    //   }
    // }

    block.insertAdjacentHTML(
      "beforeend",
      `
      <div>
      <p class="conteudo"><img src="${comida.img}"></p>
      <p class="conteudo" id="preco">R$${comida.preco}</p>
      </div>

      <div>
      <h2><p class="conteudo" id="titulo">${comida.nome[0].toUpperCase()}${comida.nome.substring(
        1
      )}</p></h2>
      <p class="conteudo"><strong>Descrição</strong>: ${comida.descricao}</p>
      <p class="conteudo"><strong>Ingredientes</strong>: ${
        comida.ingredientes
      }</p>
      <p class="conteudo"><strong>Vegetariano</strong>: ${
        comida.vegetariano === true ? "sim" : "não"
      }</p>
      </div>
    
    

    `
    );
    main.appendChild(block);
  }
  avarange();
  itsTrue();
}
createBlock(cardapio);

//pesquisa

let search = document.querySelector("#pesquisa");

search.addEventListener("input", returnSearch);

function returnSearch(e) {
  let letra = e.target.value;
  const nomeDaComida = cardapio.filter((cardapioObj) => {
    return cardapioObj.nome.includes(letra);
  });
  createBlock(nomeDaComida);
}

//Para adicionar novos valores:

const add = document
  .querySelector("#adicionar")
  .addEventListener("click", (e) => {
    creatForm();
  });

function creatForm() {
  const sectionForm = document.querySelector("#for-form");

  search.removeEventListener("input", returnSearch, false);
  changeBackground();

  function setAttributes(element, atributes) {
    for (let i in atributes) {
      element.setAttribute(i, atributes[i]);
    }
  }

  const form = document.createElement("form");
  form.setAttribute("id", "form");
  form.style.background = "white";

  form.insertAdjacentHTML(
    "beforeend",
    `
  <label for="nome">nome:</label>
  <input type="nome" name="nome" id="nome" placeholder="escreva o nome da comida aqui" required="required">

  <label for="descrption">Descrição</label>
  <input type="text" name="description" id="description" placeholder="descreva sua comida" required="required">

  <label for="ingredientes">Ingredientes:</label>
  <input type="text" name="ingredients" id="ingredients" placeholder="quais os ingredientes usados?" required="required">

  <p>Tem opção vegetariano?</p>

  <div id="inline">
  <div>
  <input type="radio" name="vegetarian" id="vegetarianYes" class="vegetarian" value="true" checked>
  <label for="vegetarian">sim</label>
  </div>
  <div>
  <input type="radio" name="vegetarian" id="vegetariaNo" class="vegetarian" value="false">
  <label for="vegetarian">não</label>
  </div>
  </div>

  <label for="price">preço:</label>
  <input type="number" name="price" id="price" placeholder="20" required="required">

  <label for="img"></label>
  <input type="file" name="img" id="img" accept="image/png, image/jpeg">
  `
  );

  const buttonInput = document.createElement("input");
  setAttributes(buttonInput, {
    type: "button",
    value: "enviar",
  });
  form.appendChild(buttonInput);
  sectionForm.appendChild(form);

  buttonInput.addEventListener("click", () => {
    const newFood = {
      nome: document.querySelector("#nome").value.toLowerCase(),
      descricao: document.querySelector("#description").value,
      ingredientes: document.querySelector("#ingredients").value,
      vegetariano:
        document.querySelector("input[class='vegetarian']:checked").value ===
        "true"
          ? true
          : false,
      preco: document.querySelector("#price").value,
      img: `./img/${
        document.querySelector("#img").files[0] === undefined
          ? ""
          : document.querySelector("#img").files[0].name
      }`,
    };
    console.log(newFood.vegetariano);
    if (
      newFood.nome === "" ||
      newFood.descricao === "" ||
      newFood.ingredientes === "" ||
      newFood.vegetariano === "" ||
      newFood.preco === "" ||
      newFood.vegetariano === ""
    ) {
      alert("Todos os itens precisam ser preenchidos!");
    } else {
      changeBackground();

      cardapio.push(newFood);
      createBlock(cardapio);

      search.addEventListener("input", returnSearch);
      sectionForm.removeAttribute("id", "new-for-form");
      sectionForm.setAttribute("id", "for-form");
      sectionForm.removeChild(form);
      sectionForm.removeChild(buttonExit);
    }
  });

  const buttonExit = document.createElement("input");
  setAttributes(buttonExit, {
    type: "button",
    value: "x",
    id: "exit",
  });
  sectionForm.appendChild(buttonExit);
  buttonExit.addEventListener("click", () => {
    search.addEventListener("input", returnSearch);
    sectionForm.removeAttribute("id", "new-for-form");
    sectionForm.setAttribute("id", "for-form");
    sectionForm.removeChild(form);
    sectionForm.removeChild(buttonExit);
    changeBackground();
  });
  sectionForm.setAttribute("id", "new-for-form");
}

function changeBackground() {
  section.classList.toggle("blur");
}
