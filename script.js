const destino1 = {
  nome: "Bahia".toUpperCase(),
  avaliacaoCritica: 7,
  litoral: true,
  lugares: [
    "Trancoso",
    "Chapada Diamantina",
    "Arraial D’Ajuda",
    "Vale do Capão",
    "Pelourinho",
  ],
  imagem: "assets/sal.png",
  link: "https://manualdoturista.com.br/bahia/",
};

const destino2 = {
  nome: "Paraíba".toUpperCase(),
  avaliacaoCritica: 10,
  litoral: true,
  lugares: [
    "Areia Vermelha",
    "Parque dos Dinossauros",
    "Coqueirinho",
    "Campina Grande",
    "Cabaceiras",
  ],
  imagem: "assets/pb.png",
  link: "https://turismo.joaopessoa.pb.gov.br/",
};

const destino3 = {
  nome: "Rio de Janeiro".toUpperCase(),
  avaliacaoCritica: 10,
  litoral: true,
  lugares: [
    "Cristo Redentor",
    "Copacabana",
    "Búzios",
    "Arraial do Cabo",
    "Petrópolis",
  ],
  imagem: "assets/rj.png",
  link: "https://passeiorio.com.br/",
};

const destino4 = {
  nome: "Rio Grande do Sul".toUpperCase(),
  avaliacaoCritica: 7,
  litoral: true,
  lugares: [
    "Gramado",
    "Canela",
    "Porto Alegre",
    "Bento Gonçalves",
    "São Miguel das Missões",
  ],
  imagem: "assets/rs.png",
  link: "https://www.turismo.rs.gov.br/turismo/",
};

const media =
  (destino1.avaliacaoCritica +
    destino2.avaliacaoCritica +
    destino3.avaliacaoCritica +
    destino4.avaliacaoCritica) /
  3;

console.log("Média aritmética", media);

const verificaLitoral =
  (destino1.litoral &&
    destino2.litoral &&
    destino3.litoral &&
    destino4.litoral) === true;
console.log("Todos os destinos são litorâneos?", verificaLitoral);

console.log(destino1, destino2, destino3, destino4);
const arrayDeDestino = (destino1, destino2, destino3, destino4);

const todosOsDestinos = [];

if (destino1.litoral) {
  todosOsDestinos.push(destino1);
} else {
  console.log(`O destino ${destino1.nome} não foi adicionado!`);
}

if (destino2.litoral) {
  todosOsDestinos.push(destino2);
} else {
  console.log(`O destino ${destino2.nome} não foi adicionado!`);
}

if (destino3.litoral) {
  todosOsDestinos.push(destino3);
} else {
  console.log(`O destino ${destino3.nome} não foi adicionado!`);
}

if (destino4.litoral) {
  todosOsDestinos.push(destino4);
} else {
  console.log(`O destino ${destino4.nome} não foi adicionado!`);
}

console.log("ARRAY TODOS OS DESTINOS", todosOsDestinos);

todosOsDestinos.map((destino, index) => {
  let lugares = "";
  destino.lugares.map((lugar) => {
    if (lugares) {
      lugares = lugares.concat(", ");
    }
    lugares = lugares.concat(lugar);
  });
  todosOsDestinos[index].lugares = lugares;
  console.log(todosOsDestinos[index]);
});

function retornaString(objeto) {
  for (objeto of todosOsDestinos) {
    console.log(
      "Nome: ",
      objeto.nome,
      "Avaliação Crítica: ",
      objeto.avaliacaoCritica,
      "Litoral: ",
      objeto.litoral,
      "Destinos: ",
      objeto.lugares
    );
  }
}

retornaString();

function funcaoDeFiltro(todosOsDestinos, valorString) {
  let objARetornar = {};

  for (let i = 0; i < todosOsDestinos.length; i++) {
    if (todosOsDestinos[i].nome.toUpperCase() === valorString.toUpperCase()) {
      objARetornar.nome = todosOsDestinos[i].nome;
      objARetornar.avaliacaoCritica = todosOsDestinos[i].avaliacaoCritica;
      objARetornar.litoral = todosOsDestinos[i].litoral;
      objARetornar.lugares = todosOsDestinos[i].lugares;
      objARetornar.imagem = todosOsDestinos[i].imagem;
      objARetornar.link = todosOsDestinos[i].link;
    }
  }

  if (
    objARetornar.nome &&
    objARetornar.nome.toUpperCase() !== valorString.toUpperCase()
  ) {
    alert("Destino não encontrado");
  } else {
    return objARetornar;
  }
}

const listaDestinos = document.createElement("ul");
const container = document.getElementById("container");

container.insertAdjacentElement("beforeend", listaDestinos);
listaDestinos.setAttribute("id", "travel-list");

const elementoDeLista = document.getElementById("travel-list");

for (let i = 0; i < todosOsDestinos.length; i++) {
  elementoDeLista.innerHTML += `
  <div class="travel-list">
    <div class="article">
      <div class="cards"> 
        <img src="${todosOsDestinos[i].imagem}" />
        <ul > <b> <a href="${todosOsDestinos[i].link}" target="_blank">${todosOsDestinos[i].nome}</a>  </b> </br> </br> Avaliação Crítica: ${todosOsDestinos[i].avaliacaoCritica} </br> Possui litoral: ${todosOsDestinos[i].litoral} </br> <ol>Lugares a visitar: ${todosOsDestinos[i].lugares}</ol></ul> 
      </div>
    </div>
  </div>`;
}

function exibeValorDoCampo(event) {
  const input = event.target;
}

function buscaDestino() {
  const elementoDeCampo = document.getElementById("campo");
  const textoABuscar = elementoDeCampo.value;

  const destinoRetornado = funcaoDeFiltro(todosOsDestinos, textoABuscar);
  console.log(destinoRetornado);

  if (destinoRetornado.nome) {
    const elementoDeLista = document.getElementById("travel-list");

    elementoDeLista.innerHTML = `
    <div class="travel-list">
      <div class="article">
        <div class="card-retornado"> 
          <img src="${destinoRetornado.imagem}" />
          <ul > <b> <a href="${destinoRetornado.link}" target="_blank">${destinoRetornado.nome}</a> </b> </br> </br> Avaliação Crítica: 
          ${destinoRetornado.avaliacaoCritica} </br> Possui litoral: 
          ${destinoRetornado.litoral} </br> <ol>Lugares a visitar: 
          ${destinoRetornado.lugares}</ol></ul> 
        </div>
      </div>
    </div>`;
  } else {
    alert("Destino não encontrado");
  }
}
